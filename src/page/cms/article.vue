<!--<template>-->
<!--  <div>-->
<!--    <div class="article-header">-->
<!--      <div style="float: left">-->
<!--        <el-page-header @back="goBack">-->
<!--        </el-page-header>-->
<!--      </div>-->
<!--&lt;!&ndash;      <div style="width: 500px;float:right;    height: 24px; ">&ndash;&gt;-->
<!--&lt;!&ndash;        <el-steps :active="1" align-center>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-step icon="el-icon-edit"></el-step>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-step icon="el-icon-picture"></el-step>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-step icon="el-icon-setting"></el-step>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-step icon="el-icon-upload"></el-step>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-steps>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </div>-->
<!--    <div style="width: 500px;float:right;    height: 24px; ">-->
<!--      <el-steps :active="1" align-center direction="vertical">-->
<!--        <el-step icon="el-icon-edit"></el-step>-->
<!--        <el-step icon="el-icon-picture"></el-step>-->
<!--        <el-step icon="el-icon-setting"></el-step>-->
<!--        <el-step icon="el-icon-upload"></el-step>-->
<!--      </el-steps>-->
<!--    </div>-->
<!--    <div class="span-input">-->
<!--      <input type="text" placeholder="标题" class="input-title" v-model="article.title">-->
<!--      &lt;!&ndash;      <el-input v-model="article.title" style="width: 80%"></el-input>&ndash;&gt;-->
<!--    </div>-->

<!--</template>-->
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
        <el-button type="" icon="el-icon-arrow-left" v-show="stepActive!==0" @click="stepActive-=1"></el-button>
        <el-button type="" icon="el-icon-arrow-right" v-show="stepActive!==2" @click="stepActive+=1"></el-button>
        <el-button type="" icon="el-icon-upload2" v-show="stepActive===2" style="font-size: 14px"></el-button>
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
              :src="getSrc()"
              fit="scale-down"
              :preview-src-list="[article.src]"
            >
              <!--图标错误提示-->
              <!--            <div slot="error" class="image-slot"-->
              <!--                 style="display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;background: #f5f7fa;color: #909399;">-->
              <!--              <i class="el-icon-picture-outline"></i>-->
              <!--            </div>-->
            </el-image>
          </div>
          <input type="file" class="input-img">
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
              default-time="12:00:00">
            </el-date-picker>
          </div>
          <div class="span-input">
            <span>概述:</span>
            <el-input v-model="article.detail" style="width: 80%"></el-input>
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
  import {articleAPI} from "../../api/api";

  export default {
    name: "articleCMS",
    data() {
      return {
        article: {
          'title': '',
          'time': '',
          'url': '',
          'src': '',
          'detail': '',
          'heat': '',
          'commentNum': '',
          'content': '',
        },
        stepActive: 0,
        isNew: true,
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
      getSrc() {
        if (this.isNew) {

        } else {
          return this.article.src
        }
      },
      reArticle(){
        this.isNew = true;
        this.article = {
          'title': '',
          'time': '',
          'url': '',
          'src': '',
          'detail': '',
          'heat': '',
          'commentNum': '',
          'content': '',
        }
      }
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
          let date = new Date().toLocaleDateString();
          this.article.url = `/article/${date}/${name}.html`;
        }
      },
      $route(to,from) {
        if (to.params.year === '0000') {
          this.reArticle()
        }
      }
    },
    mounted() {
      // TODO 监听路由变化
      if (this.$route.params.year !== '0000') {
        this.isNew = false;
        articleAPI(this.$route.params).then(res => {
          this.article = res.data
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
