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
  import Header from './header'
  import Footer from './footer'
  import MainImg from './mainImg'
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
