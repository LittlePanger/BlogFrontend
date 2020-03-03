<template>
  <div>
    <el-container direction="vertical">
      <Header></Header>
      <el-main>
        main
<!--        <img src="../../build/logo.png" alt="">-->
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Header from '../common/header'
    export default {
      name: "index",
      components: {
        Header,
      }
    }

</script>

<style scoped>
main {
  background-color: #99a9bf;
}
</style>
