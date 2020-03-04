<template>
  <div>
    <el-container direction="vertical">
      <Header></Header>
      <el-main>
        <MainImg></MainImg>
        <div>main</div>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
  import Header from '../common/header'
  import Footer from '../common/footer'
  import MainImg from '../common/mainImg'
  export default {
    name: "base",
    components: {
      Header,
      Footer,
      MainImg,
    }
  }
</script>

<style scoped>

</style>
