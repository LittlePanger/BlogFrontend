<template>
  <div>
    <el-container direction="vertical">
      <Header :isPc="isPc"></Header>
      <ScrollGoTop :isPc="isPc"></ScrollGoTop>
      <el-main>
        <div class="mainImg" style="height: 400px;">
          <img :src="mainImgUrl" alt="">
          <h1 :class="{'mainImg-h1-pc':isPc,'mainImg-h1-mobile':!isPc}">{{mainTitle}}</h1>
        </div>
        <div>
          <el-row>
            <el-col :xs="0" :sm="3" :md="3" :lg="5" :xl="7">
              <div class="side-content"></div>
            </el-col>
            <el-col :xs="24" :sm="18" :md="18" :lg="14" :xl="10">
              <router-view @getTitle='getTitleImgIndex' :isPc="isPc"></router-view>
            </el-col>
            <el-col :xs="0" :sm="3" :md="3" :lg="5" :xl="7">
              <div class="side-content"></div>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  import MainImg from '../components/mainImg'
  import ScrollGoTop from '../components/scrollGoTop'

  export default {
    name: "index",
    data() {
      return {
        mainTitle: '',
        mainImgUrl: '',
        isPc: true,
      }
    },
    components: {
      Header,
      Footer,
      MainImg,
      ScrollGoTop,
    },
    methods: {
      getTitleImgIndex(value) {
        this.mainTitle = value.title;
        this.mainImgUrl = value.url;
      },
      getScreenWidth() {
        let width = document.documentElement.clientWidth || document.body.clientWidth;
        this.isPc = width >= 768;
      }
    },
    created() {
    },
    mounted() {//给window添加一个滚动监听事件
      window.addEventListener('resize', this.getScreenWidth)
    },
    destroyed() {//离开该页面需要移除这个监听的事件
      window.removeEventListener('resize', this.getScreenWidth)
    },
  }

</script>

<style scoped>
  main {
    /*background-color: #99a9bf;*/
    padding: 0;
  }

  .mainImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mainImg h1 {
    margin: 0;
    height: 400px;
    line-height: 400px;
    color: white;
    font-size: 40px;
    position: absolute;
    width: 100%;
  }

  .mainImg-h1-pc {
    top: 74px;
  }

  .mainImg-h1-mobile {
    top: 60px;
  }
  /*撑开main*/
  /*.el-main{*/
  /*  min-height: calc(100vh - 134px)*/
  /*}*/
  .el-row {
    /*background-color: #aaaaaa;*/
  }

  .side-content {
    min-height: 1px;
  }

  /*.mainImg ::after{*/
  /*  content: '';*/
  /*  width: 150%;*/
  /*  height: 4.375rem;*/
  /*  background: #fff;*/
  /*  left: -25%;*/
  /*  bottom: -2.875rem;*/
  /*  border-radius: 100%;*/
  /*  position: absolute;*/
  /*}*/
  .mainImg ::after {
    content: '';
    width: 100%;
    height: 4.375rem;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: -3.3rem;
    border-radius: 100% 100% 100% 100% / 50% 50% 30% 30%;
  }
</style>
