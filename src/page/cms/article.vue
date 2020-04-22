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
<!--    &lt;!&ndash;    <div class="span-input">&ndash;&gt;-->
<!--    &lt;!&ndash;      <span>热度:</span>&ndash;&gt;-->
<!--    &lt;!&ndash;      <el-input v-model="article.heat" style="width: 80%"></el-input>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->

<!--    &lt;!&ndash;    <div class="span-input">&ndash;&gt;-->
<!--    &lt;!&ndash;      <span>链接:</span>&ndash;&gt;-->
<!--    &lt;!&ndash;      <el-input v-model="article.url" style="width: 80%"></el-input>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    <div class="span-input">&ndash;&gt;-->
<!--    &lt;!&ndash;      <span>评论:</span>&ndash;&gt;-->
<!--    &lt;!&ndash;      <el-input v-model="article.commentNum" style="width: 80%"></el-input>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->

<!--    &lt;!&ndash;    <div class="span-input">&ndash;&gt;-->
<!--    &lt;!&ndash;      <span>时间:</span>&ndash;&gt;-->
<!--    &lt;!&ndash;      <el-date-picker&ndash;&gt;-->
<!--    &lt;!&ndash;        v-model="article.time"&ndash;&gt;-->
<!--    &lt;!&ndash;        type="datetime"&ndash;&gt;-->
<!--    &lt;!&ndash;        placeholder="选择日期时间"&ndash;&gt;-->
<!--    &lt;!&ndash;        default-time="12:00:00">&ndash;&gt;-->
<!--    &lt;!&ndash;      </el-date-picker>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    <el-input v-model="article.src"></el-input>&ndash;&gt;-->
<!--    &lt;!&ndash;    <el-input type="textarea" v-model="article.detail"></el-input>&ndash;&gt;-->
<!--    &lt;!&ndash;    <el-form-item label="是否显示" prop="delivery">&ndash;&gt;-->
<!--    &lt;!&ndash;      <el-switch v-model=""></el-switch>&ndash;&gt;-->
<!--    &lt;!&ndash;    </el-form-item>&ndash;&gt;-->

<!--    &lt;!&ndash;    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>&ndash;&gt;-->
<!--    &lt;!&ndash;    <el-button @click="resetForm('ruleForm')">重置</el-button>&ndash;&gt;-->

<!--    <mavon-editor-->
<!--      class="md"-->
<!--      :value="article.content"-->
<!--      :subfield="prop.subfield"-->
<!--      :defaultOpen="prop.defaultOpen"-->
<!--      :toolbarsFlag="prop.toolbarsFlag"-->
<!--      :editable="prop.editable"-->
<!--      :scrollStyle="prop.scrollStyle"-->
<!--      :ishljs="prop.ishljs"-->
<!--    ></mavon-editor>-->
<!--  </div>-->

<!--</template>-->
<template>
  <el-container>
    <el-header>
      <el-page-header @back="goBack">
      </el-page-header>
    </el-header>
    <el-container>
      <el-aside width="50px" style="height: 3000px">
        <el-steps :active="1" align-center direction="vertical">
          <el-step icon="el-icon-picture"></el-step>
          <el-step icon="el-icon-edit"></el-step>
          <el-step icon="el-icon-setting"></el-step>
          <el-step icon="el-icon-upload"></el-step>
        </el-steps>
      </el-aside>
      <el-main>
        <el-divider content-position="right" class="main-divider-1">开局一张图</el-divider>
        <input type="file" class="input-img">
        <div style="height: 580px">
          <el-image
            style="height: 100%;width: 100%;"
            :src="article.src"
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


        <el-divider content-position="right" class="main-divider-2">内容全靠编</el-divider>

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
        <el-divider content-position="right" class="main-divider">来张图</el-divider>

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
    methods: {},
    mounted() {
      articleAPI(this.$route.params).then(res => {
        this.article = res.data
      }).catch(res => {
      });
    }
  }
</script>

<style scoped>
  .article-header {
    height: 50px;
  }

  .main-divider-1 {
    margin: 0 0 50px 0;
  }
  .input-img{
    margin-bottom: 50px;
  }

  .main-divider-2 {
    margin: 50px 0;

  }

  .main-divider {
    margin: 50px 0;
  }

  .span-input {
    margin-bottom: 20px;
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
</style>
