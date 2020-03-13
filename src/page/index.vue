<template>
  <div>
    <el-container direction="vertical">
      <Header></Header>
      <el-main>
        <div style="height: 400px;" class="mainImg" :style="{backgroundImage:'url(' + mainImgUrl + ')'}"><h1>{{mainTitle}}</h1></div>
        <div>
          <el-row :gutter="10">
            <el-col :xs="1" :sm="2" :md="4" :lg="6" :xl="6">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :xs="22" :sm="18" :md="14" :lg="12" :xl="12">
              <router-view @getTitle='getTitleImgIndex'></router-view>
            </el-col>
            <el-col :xs="1" :sm="2" :md="4" :lg="6" :xl="6">
              <div class="grid-content bg-purple-light"></div>
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

  export default {
    name: "index",
    data() {
      return {
        mainTitle: '',
        mainImgUrl:'',
      }
    },
    components: {
      Header,
      Footer,
      MainImg,
    },
    methods: {
      getTitleImgIndex(value) {
        this.mainTitle = value.title;
        this.mainImgUrl = value.url;
      }
    }
  }

</script>

<style scoped>
  main {
    background-color: #99a9bf;
    padding: 0;
  }
  .mainImg{
    background: no-repeat center center;
    background-size: 100% auto;
  }
  .mainImg h1 {
    margin: 0;
    height: 400px;
    line-height: 400px;
    color: white;
    font-size: 40px;
    font-family: 'Noto Serif SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc', 'PT Serif', 'SongTi SC', 'MicroSoft Yahei', Georgia, serif;
  }
  /*.mainImg {*/
  /*  background-image: url(../assets/contact-bg.jpg)*/
  /*}*/

  /*撑开main*/
  /*.el-main{*/
  /*  min-height: calc(100vh - 134px)*/
  /*}*/
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
