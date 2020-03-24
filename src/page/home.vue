<template>
  <div>
    <el-container direction="vertical" class="bg">
      <Header :isPc="isPc"></Header>
      <el-main ref="main">
        <div>homemain</div>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
  import Footer from '../components/footer'
  import MainImg from '../components/mainImg'
  import Header from '../components/header'

  export default {
    name: "home",
    components: {
      Footer,
      MainImg,
      Header
    },
    data() {
      return{
        isPc: true,
      }
    },
    methods: {
      getScreenWidth() {
        let w = document.documentElement.clientWidth || document.body.clientWidth;
        if (w<800){
          this.isPc = false
        }
      }
    },
    created() {
      this.getScreenWidth()
    },
    mounted() {
      // 屏幕高度-header高度
      var h = document.documentElement.clientHeight;
      this.$refs.main.$el.style.marginTop = h - 74 +'px'
      // console.log(this.$refs.main.$el.style.marginTop)
    }
  }
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(../assets/home-bg.jpg) no-repeat center center;
    background-size: auto;
    display: flex;
  }

  main {
    padding: 0;
    color: red;
    /*margin-top: 961px;*/
    margin-bottom: 50px;
    overflow: visible;
  }
</style>

<style>
  .home a {
    color: #FFFFFF!important;
  }
</style>
