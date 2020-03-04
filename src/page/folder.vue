<template>
  <div>
    folder
  </div>
</template>

<script>

  export default {
    name: "folder",
    data (){
      return{
      }
    },
    methods:{
      getTitle(){
        this.$emit('getTitle',{'title':'归档','url':'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg'})
      }
    },
    created() {
      this.getTitle()
    }
  }

</script>

<style>
 /*.mainImg {*/
 /*  background-image: url(../assets/bg.jpg)*/
 /*}*/
</style>
