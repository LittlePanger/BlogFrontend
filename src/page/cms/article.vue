<template>
  <el-container>
    <el-header style="margin-bottom: 20px">
      <!--      <el-page-header @back="goBack" class="header-back">-->
      <!--      </el-page-header>-->
      <el-steps :active="stepActive" style="width: 500px;float: left" align-center finish-status="success">
        <el-step title="开局一张图" icon="el-icon-picture"></el-step>
        <el-step title="内容全靠编" icon="el-icon-edit"></el-step>
        <el-step title="其他设置" icon="el-icon-setting"></el-step>
        <el-step title="上传" icon="el-icon-upload"></el-step>
      </el-steps>
      <el-button-group style="float: right;margin-top: 10px">
        <el-button type="" icon="el-icon-arrow-left" v-show="stepActive!==0"
                   @click="stepActive-=1"></el-button>
        <el-button type="" icon="el-icon-arrow-right" v-show="stepActive!==2 && stepActive!==3"
                   @click="stepActive+=1"></el-button>
        <el-button type="" icon="el-icon-upload2" v-show="stepActive===2" style="font-size: 14px"
                   @click="articleSub"></el-button>
      </el-button-group>
    </el-header>
    <el-container>
      <!--      <el-aside width="50px">-->
      <!--        <el-steps :active="stepActive" align-center direction="vertical" space="750px">-->
      <!--          <el-step icon="el-icon-picture"></el-step>-->
      <!--          <el-step icon="el-icon-edit"></el-step>-->
      <!--          <el-step icon="el-icon-setting"></el-step>-->
      <!--          <el-step icon="el-icon-upload" class="step-last" style="height: 0"></el-step>-->
      <!--        </el-steps>-->
      <!--      </el-aside>-->
      <el-main>
        <!--图片页-->
        <div class="step-0" v-show="stepActive===0">
          <div style="height: 580px">
            <el-image
              style="height: 100%;width: 100%;"
              :src="article.src"
              fit="scale-down"
              :preview-src-list="previewSrcList"
              ref="imgEl"
            >
              <!--图标错误提示-->
              <!--            <div slot="error" class="image-slot"-->
              <!--                 style="display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;background: #f5f7fa;color: #909399;">-->
              <!--              <i class="el-icon-picture-outline"></i>-->
              <!--            </div>-->
            </el-image>
          </div>
          <input type="file" class="input-img" @change="addImg" ref="inputer">
        </div>

        <!--文章页-->
        <div class="step-1" v-show="stepActive===1">
          <div class="span-input">
            <input type="text" placeholder="标题" class="input-title" v-model="article.title">
          </div>
          <mavon-editor
            style="height: 600px"
            class="md"
            :value="article.content"
            :subfield="prop.subfield"
            :defaultOpen="prop.defaultOpen"
            :toolbarsFlag="prop.toolbarsFlag"
            :editable="prop.editable"
            :scrollStyle="prop.scrollStyle"
            :ishljs="prop.ishljs"
            v-model="article.content"
          ></mavon-editor>
        </div>

        <!--设置页-->
        <div class="step-2" v-show="stepActive===2">
          <div class="span-input">
            <span>链接:</span>
            <el-input v-model="article.url" style="width: 80%"></el-input>
          </div>
          <div class="span-input">
            <span>时间:</span>
            <el-date-picker
              v-model="article.time"
              type="datetime"
              placeholder="选择日期时间"
              default-time="12:00:00"
              value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
          </div>
          <div class="span-input">
            <span>概述:</span>
            <el-input v-model="article.detail" style="width: 80%" maxlength="50" show-word-limit></el-input>
          </div>
          <div class="span-input">
            <span>热度:</span>
            <el-input v-model="article.heat" style="width: 80%"></el-input>
          </div>
          <!--          <el-switch v-model=""></el-switch>-->
        </div>

      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import {articleAPI, articleSubmit} from "../../api/api";

  export default {
    name: "articleCMS",
    data() {
      return {
        article: {
          'id': '',
          'title': '',
          'time': '',
          'url': '',
          'src': '',
          'detail': '',
          'heat': 0,
          'commentNum': 0,
          'content': '',
        },
        stepActive: 0,
        isNew: true,
        formData: new FormData(),
        imgData: {},
        previewSrcList: [],
      }
    },
    computed: {
      prop() {
        return {
          subfield: true,// 单双栏模式
          defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: true,
          toolbarsFlag: true,
          scrollStyle: true,
          ishljs: true,
        }
      }
    },
    methods: {
      getSrc(dict) {
        let url = null;
        let file = null;
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
        this.previewSrcList.push(url);
        this.article.src = url;
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
        this.getSrc(this.imgData)
      },
      reArticle() {
        this.isNew = true;
        this.article = {
          'id': null,
          'title': '',
          'time': '',
          'url': '',
          'src': '',
          'detail': '',
          'heat': 0,
          'commentNum': 0,
          'content': '',
        }
      },
      retTime() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        if (month < 9) {
          month += 1;
          month = '0' + month
        }
        if (day < 10) {
          day = '0' + day
        }
        return `${year}/${month}/${day}`
      },
      errMsg(msg){
        this.$message({
          message: msg,
          center: true,
          type: 'error'
        });
      },
      articleSub() {
        let params = this.$route.params;
        let url = `${params.year}/${params.month}/${params.day}/${params.name}`;
        this.stepActive = 3;
        let article = this.article;
        for (let i in article) {
          if (article.hasOwnProperty(i)) {
            this.formData.delete(i);
            this.formData.append(i, article[i])
          }
        }
        articleSubmit(this.formData).then(res => {
          if (res.code === 200) {
            this.stepActive = 4;
            this.$router.push({path:'/cms/folder'})
          }else if(res.code === 201){
            this.errMsg(res.error)
          }
        }).catch(res => {
        });
      },
    },
    watch: {
      'article.title': function (title) {
        if (this.isNew) {
          let name = '';
          let pinyin = require("pinyin");
          let nameList = pinyin(title.substr(0, 10), {style: pinyin.STYLE_NORMAL,});
          for (let n = 0; n < nameList.length; n++) {
            name += nameList[n][0]
          }
          let date = this.retTime();
          this.article.url = `/article/${date}/${name}.html`;
        }
      },
      $route(to, from) {
        if (to.params.year === '0000') {
          this.reArticle()
        }
      }
    },
    mounted() {
      if (this.$route.params.year !== '0000') {
        this.isNew = false;
        articleAPI(this.$route.params).then(res => {
          this.article = res.data;
          this.previewSrcList.push(res.data.src)
        }).catch(res => {
        });
      } else {
        this.reArticle()
      }
    },
  }
</script>

<style scoped>
  .header-back {
    float: left;
    margin-top: 18px
  }

  .article-header {
    height: 50px;
  }

  .input-img {
    margin-bottom: 50px;
  }

  .span-input {
    margin-bottom: 20px;
  }

  .span-input span {
    margin-right: 10px;
  }

  .input-title {
    width: 80%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    outline: none;
    border-bottom-color: #000;
    font-size: 20px;
  }

  .step-2 {
    text-align: left;
  }
</style>
