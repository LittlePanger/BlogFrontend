<template>
<div>
  title{{article.title}}
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
</div>

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
        }
      }
    },
    computed: {
      prop() {
        return {
          subfield: true,// 单双栏模式
          defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: true,
          toolbarsFlag: false,
          scrollStyle: true,
          ishljs: true,
        }
      }
    },
    methods: {
    },
    mounted() {
      articleAPI(this.$route.params).then(res => {
        this.article = res.data
      }).catch(res => {
      });
    }
  }
</script>

<style scoped>

</style>
