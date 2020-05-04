<template>
  <mavon-editor
    class="md"
    :value="article.content"
    :subfield="prop.subfield"
    :defaultOpen="prop.defaultOpen"
    :toolbarsFlag="prop.toolbarsFlag"
    :editable="prop.editable"
    :scrollStyle="prop.scrollStyle"
    :ishljs="prop.ishljs"
  ></mavon-editor>

</template>

<script>
  import {articleAPI, baseUrl} from "../../api/api";

  export default {
    name: "articleCom",
    data() {
      return {
        article: {
        }
      }
    },
    computed: {
      prop() {
        return {
          subfield: false,// 单双栏模式
          defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: false,
          toolbarsFlag: false,
          scrollStyle: true,
          ishljs: true,
        }
      }
    },
    methods: {
      returnTitleImg() {
        this.$emit('getTitle', {
          'title': this.article.title,
          'src': this.article.src,
        })
      },
      imgUrl(path) {//拼接图片URL
        if (path.slice(0,4) === 'http'){
          return path
        }
        return baseUrl + '/api/img/' + path
      },
    },
    mounted() {
      articleAPI(this.$route.params).then(res => {
        this.article = res.data;
        this.article.src = this.imgUrl(this.article.src)
        this.returnTitleImg()
      }).catch(res => {
      });
    }
  }
</script>

<style scoped>

</style>
