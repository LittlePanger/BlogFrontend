<template>
  <div>
    comment
    comment

    <div>
      comment
      comment
    </div>
  </div>
</template>

<script>
    export default {
        name: "comment",
      data (){
        return{
        }
      },
      methods:{
        returnTitleImg(){
          this.$emit('getTitle',{'title':'留言板','url':'https://picjumbo.com/wp-content/uploads/mans-hand-is-trying-to-reach-the-sun_free_stock_photos_picjumbo_P1000733.jpg'})
        }
      },
      mounted() {
        this.returnTitleImg()
      }
    }
</script>

<style scoped>

</style>
