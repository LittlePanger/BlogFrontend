<template>
  <div>
    <el-container direction="vertical">
      <Header></Header>
      <el-main>
        <div style="height: 400px;" class="mainImg" :style="{backgroundImage:'url(' + imgUrl + ')'}"><h1>{{title}}</h1></div>
        <router-view @getTitle='getTitleIndex'></router-view>
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
    data() {
      return {
        title: '',
        imgUrl:'',
      }
    },
    components: {
      Header,
      Footer,
      MainImg,
    },
    methods: {
      getTitleIndex(value) {
        this.title = value.title;
        this.imgUrl = value.url
        console.log(this.imgUrl)
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
    background-size: auto auto;
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
</style>
