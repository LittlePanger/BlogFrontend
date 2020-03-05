<template>
  <div>
    about
  </div>
</template>

<script>
  export default {
    name: "about",
    data (){
      return{
      }
    },
    methods:{
      returnTitleImg(){
        this.$emit('getTitle',{'title':'关于','url':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2506259012,3613775179&fm=26&gp=0.jpg'})
      }
    },
    mounted() {
      this.returnTitleImg()
    }
  }
</script>

<style scoped>

</style>
