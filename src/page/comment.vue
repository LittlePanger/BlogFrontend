<template>
  <div>
    comment
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
        getTitle(){
          this.$emit('getTitle',{'title':'留言板','url':'https://picjumbo.com/wp-content/uploads/mans-hand-is-trying-to-reach-the-sun_free_stock_photos_picjumbo_P1000733.jpg'})
        }
      },
      mounted() {
        this.getTitle()
      }
    }
</script>

<style scoped>

</style>
