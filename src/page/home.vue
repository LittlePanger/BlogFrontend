<template>
  <div>
    <el-container direction="vertical" class="bg">
      <Header :isPc="isPc"></Header>
      <div class="waveWrapper waveAnimation" :style="{'top':mainHeight-110 + 'px'}">
        <div class="waveWrapperInner bgTop">
          <div class="wave waveTop"></div>
        </div>
        <div class="waveWrapperInner bgMiddle">
          <div class="wave waveMiddle"></div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div class="wave waveBottom"></div>
        </div>
      </div>
      <div class="scroll-to-main"><i class="el-icon-arrow-down" @click="scrollToMain"></i></div>
      <el-main ref="main">
        <div style="height: 900px">homemain</div>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
  import Footer from '../components/footer'
  import Header from '../components/header'

  export default {
    name: "home",
    components: {
      Footer,
      Header
    },
    data() {
      return {
        isPc: true,
        mainHeight: 0,
      }
    },
    methods: {
      getMainHeight() {
        // 屏幕高度-header高度
        this.mainHeight = document.documentElement.clientHeight;
        this.$refs.main.$el.style.marginTop = this.mainHeight + 'px'
      },
      getScreenWidth() {
        let width = document.documentElement.clientWidth || document.body.clientWidth;
        this.isPc = width >= 768;
      },
      scrollToMain() {
        let timer = null,
          _that = this,
          height = 0,
          scrollHeight = 0;
        if (document.documentElement.scrollTop === 0) {
          height = _that.mainHeight
        } else {
          height = _that.mainHeight - document.documentElement.scrollTop
          scrollHeight = document.documentElement.scrollTop
        }
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
          if (height > 30) {
            height -= 30;
            scrollHeight += 30
            document.documentElement.scrollTop = scrollHeight;
            timer = requestAnimationFrame(fn);
          } else {
            document.documentElement.scrollTop = height + scrollHeight;
            cancelAnimationFrame(timer);
          }
        });
      }
    },
    mounted() {
      this.getMainHeight()
      window.addEventListener('resize', this.getScreenWidth)
    },
    destroyed() {
      window.removeEventListener('resize', this.getScreenWidth)
    },
  }
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(../assets/home-bg.jpg) no-repeat fixed center;
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

  .el-icon-arrow-down {
    font-size: 35px;
    color: white;
    font-weight: 900;
    position: absolute;
    bottom: 100px;
    transform: scale(1.5, 1);
    z-index: 20;
  }

  /*wave*/
  @keyframes move_wave {
    0% {
      transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
      transform: translateX(-50%) translateZ(0) scaleY(1)
    }
  }

  .waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 110px;
  }

  .waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;
    /*background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);*/
  }

  .bgTop {
    z-index: 15;
    opacity: 0.5;
  }

  .bgMiddle {
    z-index: 10;
    opacity: 0.75;
  }

  .bgBottom {
    z-index: 5;
  }

  .wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
  }

  .waveTop {
    background-size: 50% 100px;
    background-image: url('../assets/img/wave-top.png')
  }

  .waveAnimation .waveTop {
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  .waveMiddle {
    background-size: 50% 120px;
    background-image: url('../assets/img/wave-mid.png')
  }

  .waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
  }

  .waveBottom {
    background-size: 50% 100px;
    background-image: url('../assets/img/wave-bot.png')
  }

  .waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
  }
</style>

