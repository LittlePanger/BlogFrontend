<template>
  <div class="comment-main">
    <div class="poem-wrap">
      <div class="poem-border poem-border-left"></div>
      <div class="poem-border poem-border-right"></div>
      <h1>念两句诗</h1>
      <p class="poem-content">苟利国家生死以,岂因祸福避趋之</p>
      <p class="poem-info">[清代] 林则徐《赴戍登程口占示家人》</p>
    </div>
    <div class="comment-list">
      <div class="comment-list-title">
        <h3>Comments | 1,632 条评论</h3>
      </div>
      <div class="comment" v-for="item in comment" :key="item.id">
        <div class="comment-avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="comment-writer">{{item.writer}}
        </div>
        <div class="comment-info">
          发布于{{item.time}}({{item.userAgent}})来自:{{item.address}}
        </div>
        <div class="comment-body">
          <p style="text-align: left">
            {{item.content}}
          </p>
        </div>
        <hr>
      </div>
    </div>
    <div class="comment-bottom">
      <form class="comment-form" action="https://vuejs.org/" method="post" novalidate="true" v-model="visitors">

        <!--      <div class="textarea-top"><label for="comment">这里应该有句话..</label></div>-->
        <textarea name="" id="comment" cols="30" rows="10" class="comment-textarea" placeholder="这里应该有句话.."></textarea>
        <div class="comment-form-user">
          <div class="comment-form-avatar"><img src="../assets/defaultAvatar.png" alt=""></div>
          <div class="comment-form-input">
            <input placeholder="阁下是?" v-model="visitors.name"></input>
            <input placeholder="邮箱" v-model="visitors.mail"></input>
            <input placeholder="个人站点" v-model="visitors.site"></input>
          </div>
          <div class="comment-form-robot">
            <input type="checkbox" id="checkbox" v-model="visitors.robot"/><label for="checkbox"></label>
            <span @click="visitors.robot = !visitors.robot">I'm not a robot</span>
          </div>
          <div class="comment-form-submit">
            <button>BOOM!!!</button>
            <div class="comment-form-upload">
              <input type="file">
              <i class="el-icon-picture-outline"></i>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comment",
    data() {
      return {
        visitors: {
          name: '',
          mail: '',
          site: '',
          robot:false,
        },
        imageUrl: '',
        comment: [
          {
            'id': 0,
            'avatar': 'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1b4c510fd9f9d72a11f2fd1ed22a2834349bbb1b.jpg',
            'writer': '小白',
            'time': '2020-03-25',
            'userAgent': '巴拉巴拉巴拉',
            'address': '北京',
            'content': '内容巴拉巴拉'
          },
          {
            'id': 1,
            'avatar': 'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1b4c510fd9f9d72a11f2fd1ed22a2834349bbb1b.jpg',
            'writer': '小白',
            'time': '2020-03-25',
            'userAgent': '巴拉巴拉巴拉',
            'address': '北京',
            'content': '内容巴拉巴拉'
          },
          {
            'id': 2,
            'avatar': 'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1b4c510fd9f9d72a11f2fd1ed22a2834349bbb1b.jpg',
            'writer': '小白',
            'time': '2020-03-25',
            'userAgent': '巴拉巴拉巴拉',
            'address': '北京',
            'content': '内容巴拉巴拉'
          },
          {
            'id': 3,
            'avatar': 'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1b4c510fd9f9d72a11f2fd1ed22a2834349bbb1b.jpg',
            'writer': '小白',
            'time': '2020-03-25',
            'userAgent': '巴拉巴拉巴拉',
            'address': '北京',
            'content': '内容巴拉巴拉'
          },
          {
            'id': 4,
            'avatar': 'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1b4c510fd9f9d72a11f2fd1ed22a2834349bbb1b.jpg',
            'writer': '小白',
            'time': '2020-03-25',
            'userAgent': '巴拉巴拉巴拉',
            'address': '北京',
            'content': '内容巴拉巴拉'
          },
        ]
      }
    },
    methods: {
      returnTitleImg() {
        this.$emit('getTitle', {
          'title': '留言板',
          'url': 'http://img.article.pchome.net/01/58/91/24/pic_lib/wm/Bing03.jpg'
        })
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    mounted() {
      this.returnTitleImg()
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
    position: relative;
    left: 55px;
    color: #FE9600;
    font-size: 15px;
    font-weight: 600;
  }

  .comment-info {
    position: relative;
    left: 55px;
    font-size: 12px;
    letter-spacing: 0px;
    text-transform: none;
    color: rgba(0, 0, 0, .35);
  }

  .comment hr {
    height: 1px;
    width: 100%;
    background: #eee;
    border: 0;
    margin: 40px 0;
  }

  .comment-textarea {
    width: 100%;
    min-height: 170px;
    padding: 10px 5px;
    background-image: url('../assets/catLogo.png');
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
    margin-top: 20px;
    /*height: 60px;*/
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
  }

  .comment-form-robot {
    margin-top: 30px;
    text-align: left;
  }
  .comment-form-robot label{
    position: absolute;
    left: 0;
  }
  .comment-form-robot span{
    cursor: pointer;
    color: #555;
    font-size: 16px;
  }

  .comment-form-submit {
    height: 60px;
    margin-top: 20px;
  }
  .comment-form-submit button{
    height: 46px;
    width: 90%;
    position: absolute;
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 3%;

  }
  .comment-form-upload{
    border: 1px solid #ddd;
    width: 6.5%;
    height: 44px;
    position: absolute;
    right: 0;
    line-height: 46px;
  }
  .comment-form-upload input{
    width: 44px;
    height: 44px;
    position:absolute;
    left: 0;
    opacity:0;
  }
  .comment-form-upload i{
    font-size: 20px;
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
