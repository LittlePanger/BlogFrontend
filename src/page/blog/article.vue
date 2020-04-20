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
  import {articleAPI} from "../../api/api";

  export default {
    name: "articleCom",
    data() {
      return {
        article: {
          'title': 'bia',
          'img': 'http://a4.att.hudong.com/20/62/01000000000000119086280352820.jpg',
          'content': '',
          'time': '2020-03-08',
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
          'src': this.article.img,
        })
      },
    },
    mounted() {
      this.returnTitleImg()
      articleAPI(this.$route.params).then(res => {
        this.article.content = res.data.content
      }).catch(res => {
        this.returnTitleImg({
          'title': '留言板',
          'src': 'http://img.article.pchome.net/01/58/91/24/pic_lib/wm/Bing03.jpg'
        })
      });
    }
  }
</script>

<style scoped>

</style>
