<template>
  <div class="comment-main">
    <div class="poem-wrap">
      <div class="poem-border poem-border-left"></div>
      <div class="poem-border poem-border-right"></div>
      <h1>念两句诗</h1>
      <p class="poem-content">{{poem.content}}</p>
      <p class="poem-info">{{poem.title}}</p>
    </div>
    <div class="comment-list">
      <div class="comment-list-title">
        <h3>Comments | {{commentCount}} 条评论</h3>
      </div>
      <div class="comment" v-for="item in comment" :key="item.id">
        <div class="comment-avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="comment-writer">
          <a :href="item.site"><span>{{item.writer}}</span></a>
        </div>
        <div class="comment-info">
          <span>发布于{{item.time}} &nbsp;
            (&nbsp;<img :src="item.systemSrc" alt="" class="comment-info-svg">&nbsp;{{item.system}} &nbsp;
            <img :src="item.browserSrc" alt="" class="comment-info-svg">&nbsp;{{item.browser}})
            来自:{{item.address}}</span>
        </div>
        <div class="comment-body">
          <p style="text-align: left">
            {{item.content}}
          </p>
        </div>
        <hr>
      </div>
      <div class="page-block">
        <el-pagination
          layout="prev, pager, next"
          :total="commentCount"
          :page-size="5"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
    <div class="comment-bottom">
      <textarea name="" id="comment" cols="30" rows="10" class="comment-textarea" placeholder="这里应该有句话.."
                v-model="commentData.content"></textarea>
      <div class="comment-form-user">
        <div class="comment-form-avatar">
          <i v-if="!imgData.hasOwnProperty('upload')" class="e-icondingbudaohang-zhangh"></i>
          <img :src="getImgUrl(imgData)" alt="">
        </div>
        <div class="comment-form-input">
          <input placeholder="阁下是?" v-model="commentData.writer"></input>
          <input placeholder="邮箱" v-model="commentData.mail" @blur.prevent="checkMail"></input>
          <input placeholder="个人站点" v-model="commentData.site" @blur.prevent="checkSite"></input>
        </div>
        <div class="comment-form-robot">
          <input type="checkbox" id="checkbox" v-model="commentData.robot"/><label for="checkbox"></label>
          <span @click="commentData.robot = !commentData.robot">能量槽充能 | I'm not a robot</span>
        </div>
        <div class="comment-form-submit">
          <button @click="submit">传输信号</button>
          <div class="comment-form-upload el-icon-picture-outline">
            <el-tooltip effect="dark" content="给自己一个头像吧" placement="top">
              <input type="file" @change="addImg" ref="inputer">
            </el-tooltip>
          </div>
        </div>
      </div>
      <!--      </form>-->
    </div>
  </div>
</template>

<script>
  import {baseUrl, pageComment, commentGet, commentSubmit, articleDetailFolder} from "../../api/api";

  export default {
    name: "comment",
    data() {
      return {
        commentCount: 0,
        commentData: {
          writer: '',
          mail: '',
          site: '',
          robot: false,
          content: '',
          userAgent: ''
        },
        formData: new FormData(),
        imgData: {},
        defaultImgUrl: 'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1b4c510fd9f9d72a11f2fd1ed22a2834349bbb1b.jpg',
        tips: false,
        poem: {'content': '苟利国家生死以,岂因祸福避趋之', 'title': '[清代] 林则徐《赴戍登程口占示家人》'},
        comment: []
      }
    },
    methods: {
      getSVG() {
        this.comment.forEach(ele => {
          if (ele.systemSrc.slice(-4) !== '.svg'){
            ele.systemSrc = require('../../assets/svg/' + ele.systemSrc + '.svg');
            ele.browserSrc = require('../../assets/svg/' + ele.browserSrc + '.svg');
          }
        })
      },
      getComment(val){
        commentGet({'page': val}).then(res => {
          this.commentCount = res.count;
          this.comment = res.results;
          this.getSVG();
          this.setTime()
        })
      },
      handleCurrentChange(val) {
        this.getComment(val)
      },
      checkMail() {
        let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!reg.test(this.commentData.mail)) {
          this.checkMsg('邮箱好像不太对嗷~')
        }
      },
      checkSite() {
        let reg = /^(http:\/\/|https:\/\/)/;
        if (!reg.test(this.commentData.site)) {
          this.checkMsg('网站请以http://或https://开头')
        }
      },
      check(commentData) {//校验数据
        if (!commentData.robot) {
          this.checkMsg('⚠检测到能量槽未充能,无法传输信号⚠');
          return false
        }
        let warningMsg = {
          'writer': '留下名字呗',
          'mail': '留个联系方式啦',
          'content': '你想说什么呢?',
        };
        for (let i in commentData) {
          if (commentData.hasOwnProperty(i)) {
            if (i !== 'site' && i !== 'userAgent') {
              if (commentData[i] == null || commentData[i] === '') {
                this.checkMsg(warningMsg[i]);
                return false
              }
            }
          }
        }
        return true
      },
      submit() {//提交
        let commentData = this.commentData;
        if (!this.check(commentData)) {
          return
        }
        let send = this.sending();
        commentData['userAgent'] = navigator.userAgent;
        for (let i in commentData) {
          if (commentData.hasOwnProperty(i)) {
            this.formData.append(i, commentData[i])
          }
        }
        commentSubmit(this.formData).then(res => {
          if (res.code === 200) {
            // 成功后移除发送中,弹出发送成功
            send.close();
            this.sendSuccess();
            // 计算时间差值,将新数据填入数组首位,移除最后一位,总数量+1,清空图片和input
            res.data.time = this.getTimeDiff(res.data.time);
            this.comment.unshift(res.data);
            this.comment.pop();
            this.getSVG();
            this.commentCount += 1;
            this.imgData = {};
            this.commentData = {
              writer: '',
              mail: '',
              site: '',
              robot: false,
              content: '',
              userAgent: ''
            }
          } else {
            // 失败后移除发送中,弹出发送失败及错误原因
            send.close();
            this.sendError(res.error)
          }
        })
      },
      returnTitleImg(data) {
        this.$emit('getTitle', data)
      },
      addImg(event) {//头像添加到头像框内
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        let fil = inputDOM.files[0];
        if (fil.size > 1024 * 1024) {
          // alert('请选择1M以内的图片！');
          this.$message.error('请选择1M以内的图片！');
          return false
        }
        this.$set(this.imgData, 'upload', fil);
        this.formData.append('file', fil);
      },
      getImgUrl(dict) {
        var url = null;
        var file = null;
        if (dict.upload !== undefined) {
          file = dict.upload
        } else {
          return
          // return this.defaultImgUrl
        }
        if (window.createObjectURL !== undefined) { // basic
          url = window.createObjectURL(file);
        } else if (window.URL !== undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL !== undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      },
      // 消息提醒
      sending() {
        return this.$message({
          message: '正在传输信号,嘟~~~',
          duration: 0
        })
      },
      sendSuccess() {
        this.$message({
          message: '收到，OVER!',
          type: 'success'
        });
      },
      sendError(msg) {
        this.$message({
          message: '<p>发送失败了TvT</p><b>' + msg + '</b>',
          type: 'error',
          dangerouslyUseHTMLString: true,
        });
      },
      checkMsg(msg) {
        this.$message({
          message: msg,
          type: 'warning'
        });
      },
      getTimeDiff(time){
        let timestamp = new Date(time).getTime();
        let time_diff = new Date().getTime() - timestamp;
        let res = Math.round(time_diff / 1000);
        if (res < 60){
          return res + '秒前'
        }else if(res < 60*60){
          return Math.round(res / 60) + '分钟前'
        }else if(res < 60*60*24){
          return Math.round(res / (60 * 60)) + '小时前'
        }else if(res < 60*60*24*30){
          return Math.round(res / (60 * 60 * 24)) + '天前'
        }else{
          return time
        }
      },
      setTime(){
        this.comment.forEach(ele => {
          ele.time = this.getTimeDiff(ele.time)
        })
      }
    },
    mounted() {
      pageComment().then(res => {
        this.returnTitleImg(res.data)
      }).catch(res => {
        this.returnTitleImg({
          'title': '留言板',
          'src': 'http://img.article.pchome.net/01/58/91/24/pic_lib/wm/Bing03.jpg'
        })
      });
      this.getComment()
    }
  }
</script>

<style scoped>
  .comment-main {
    margin-top: 30px;
    padding: 0 10%;
  }

  .poem-wrap {
    position: relative;
    width: 80%;
    left: 10%;
    min-height: 140px;
    border: 2px solid #797979;
    border-top-width: 0px;
  }

  .poem-border {
    position: absolute;
    height: 2px;
    width: 27%;
    background-color: #797979;
  }

  .poem-border-left {
    left: 0;
  }

  .poem-border-right {
    right: 0;
  }

  .poem-wrap h1 {
    position: relative;
    top: -10px;
    margin-top: -20px;
    display: inline-block;
    letter-spacing: 4px;
    color: #797979;
  }

  .poem-wrap p {
    width: 70%;
    line-height: 30px;
    color: #797979;
  }

  .poem-content {
    margin: auto;
    font-size: 25px;
  }

  .poem-info {
    font-size: 15px;
    margin: 15px auto;
  }

  .comment-list-title {
    text-align: left;
  }

  .comment-list-title h3 {
    margin: 80px 0 40px 0;
    color: #7d7d7d;
    font-weight: 400;
  }

  .comment-avatar {
    position: absolute;
  }

  .comment-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #dadada;
    position: relative;
    transition: transform 1s ease-out;
  }

  .comment-avatar img:hover {
    transform: rotateZ(360deg);
    border: 1px solid #fe9600;
  }

  .comment-writer, .comment-info {
    text-align: left;
  }

  .comment-writer {
    padding: 3px 0;
    color: #FE9600;
    font-size: 15px;
    font-weight: 600;
    margin-left: 55px;
  }

  .comment-writer a {
    color: #FE9600;
    text-decoration: none;
  }

  .comment-info {
    width: fit-content;
    margin-left: 55px;
    font-size: 12px;
    letter-spacing: 0;
    text-transform: none;
    color: rgba(0, 0, 0, .35);
  }

  .comment-info-svg {
    height: 14px;
    vertical-align: text-bottom;
  }

  .comment hr {
    height: 1px;
    width: 100%;
    background: #eee;
    border: 0;
    margin: 40px 0;
  }

  .page-block {
    text-align: right;
    margin-bottom: 30px;
  }

  .comment-textarea {
    width: 100%;
    min-height: 170px;
    padding: 10px 5px;
    background-image: url('../../assets/catLogo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    outline-color: #fe9600;
    box-sizing: border-box;
  }

  /* *********保留********* */
  /*.textarea-top label {*/
  /*  width: fit-content;*/
  /*  position: relative;*/
  /*  margin: 0px;*/
  /*  top: 11px;*/
  /*  background: #fe9600;*/
  /*  color: white;*/
  /*  border-radius: 2%;*/
  /*}*/
  /* *********保留********* */
  .comment-form-input {
    margin-left: 60px;
  }

  .comment-form-input input {
    padding: 20px;
    font-size: 14px;
    box-sizing: border-box;
    display: inline-block;
    width: 32%;
    border-radius: 9px;
    border: 1px solid #DBDBDB;
    outline-color: #fe9600;
  }

  .comment-form-user {
    position: relative;
    margin-top: 30px;
  }

  .comment-form-avatar {
    position: absolute;
    display: inline-block;
    width: 55px;
    height: 55px;
    pointer-events: none;
    left: 0;
    top: 2px;
  }

  .comment-form-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #dadada;
    position: absolute;
    left: 0;
  }

  .comment-form-avatar i {
    position: absolute;
    font-size: 65px;
    left: -4px;
    top: -7px;
    color: #ddd;
  }

  .comment-form-robot {
    margin-top: 20px;
    text-align: left;
  }

  .comment-form-robot label {
    position: absolute;
    left: 0;
  }

  .comment-form-robot span {
    cursor: pointer;
    color: #555;
    font-size: 16px;
  }

  .comment-form-submit {
    height: 60px;
    margin-top: 20px;
  }

  .comment-form-submit button {
    height: 46px;
    width: 90%;
    position: absolute;
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 3%;
    color: #555;
  }

  .comment-form-submit button:hover {
    border: 1px solid #fe9600;
    color: #fe9600;
  }

  .comment-form-upload {
    border: 1px solid #ddd;
    width: 6.5%;
    height: 44px;
    position: absolute;
    right: 0;
    line-height: 46px;
    font-size: 20px;
    color: #555;
  }

  .comment-form-upload input {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    opacity: 0;
    top: 0;
  }

  .comment-form-upload:hover {
    border: 1px solid #fe9600;
    color: #fe9600;
  }

  .comment-input-tip {
    height: 20px;
    width: 125px;
    line-height: 20px;
    background-color: #555;
    color: white;
    font-size: 14px;
    position: absolute;
    left: -40px;
    bottom: 55px;
  }

  .triangle-down {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #555555;
    position: absolute;
    left: 18px;
    top: -15px;
  }

  #checkbox + label {
    background-color: #FFF;
    border: 1px solid #C1CACA;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 1000px;
    display: inline-block;
    margin-right: 30px;
  }

  #checkbox + label:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.2);
  }

  #checkbox:checked + label {
    background-color: #FFFFFF;
    border: 1px solid #92A1AC;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    color: #243441;
  }

  #checkbox:checked + label:before {
    content: ' ';
    border-radius: 100px;
    position: absolute;
    background: #fe9600;
    /*opacity: 0.8;*/
    display: none;
    box-shadow: inset 0 15px 23px -10px rgba(187, 230, 240, 0.3), 0 2px 2px rgba(0, 0, 0, 0.1);
    top: 3px;
    left: 3px;
    width: 12px;
    height: 12px;
  }

  #checkbox:checked + label:before {
    content: ' ';
    display: block;
  }
</style>
