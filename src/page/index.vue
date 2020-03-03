<template>
  <div>
    <el-container direction="vertical">
      <Header></Header>
      <el-main>
        main
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
  import Header from '../common/header'
  import Footer from '../common/footer'
    export default {
      name: "index",
      components: {
        Header,
        Footer,
      }
    }

</script>

<style scoped>
main {
  background-color: #99a9bf;
}
/*撑开main*/
/*.el-main{*/
/*  min-height: calc(100vh - 134px)*/
/*}*/
</style>
