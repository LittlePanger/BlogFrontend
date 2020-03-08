<template>

</template>

<script>
  export default {
    name: "article",
    data() {
      return {
        article: {
          'title': 'bia',
          'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
          'content': '',
          'time': '2020-03-08',
        }
      }
    },
    methods: {
      returnTitleImg() {
        this.$emit('getTitle', {
          'title': this.article.title,
          'url': this.article.img,
        })
      },
    },
    mounted() {
      this.returnTitleImg()
    }
  }
</script>

<style scoped>

</style>
