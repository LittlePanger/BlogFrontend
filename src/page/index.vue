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
      name: "index",
      components: {
        Header,
        Footer,
        MainImg,
      }
    }

</script>

<style scoped>
main {
  background-color: #99a9bf;
  padding: 0;
}
/*撑开main*/
/*.el-main{*/
/*  min-height: calc(100vh - 134px)*/
/*}*/
</style>
