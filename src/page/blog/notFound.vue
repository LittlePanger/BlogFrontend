<template>
  <div>
    <img :src="src404" alt="">
    <div>
      <p>{{countdown}}秒后返回上一页</p>
      <router-link to='/'><el-button type="text">返回首页</el-button></router-link>
      <el-button type="text" @click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "notFound",
    data() {
      return {
        src404: '',
        countdown: 5,
        clock: '',
      }
    },
    methods:{
      getImg(){//根据随机数选择图片
        let num = Math.floor(Math.random() * 10 + 1);
        let key = (num % 2 === 0) ? "k2" : "k1";
        let dict = {
          'k1': require('../../assets/404cat.gif'),
          'k2': require('../../assets/404pig.gif')
        };
        this.src404 = dict[key]
      },
      countDown() {//倒计时
        this.clock = window.setInterval(() => {
          this.countdown--
        },1000)
      },
      goBack(){//返回上一页
        clearInterval(this.clock);
        this.$router.go(-1);
      },
    },
    watch:{
      'countdown':function (val){
        if (val===0){
          this.goBack()
        }
      }
    },
    mounted() {
      this.getImg();
      this.countDown();
    }
  }
</script>

<style scoped>
  .alert-404 {
    width: 500px;
  }
</style>
