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
        <el-row>
          <el-col :xs="0" :sm="3" :md="3" :lg="5" :xl="7">
            <div class="side-content"></div>
          </el-col>
          <el-col :xs="24" :sm="18" :md="18" :lg="14" :xl="10">
            <div class="card-wrapper" v-for="(item,index) in articleDetail" :key="item.id">
              <div class="card">
                <div class="card-img" :class="{'right':index%2 != 1,'left':index%2 != 0}">
                  <img :src="item.img" alt="">
                </div>
                <div class="card-content" :class="{'left':index%2 != 1,'right':index%2 != 0}">
                  <div class="card-content-wrapper">
                    <div class="card-content-title">
                      <h3><a :href="item.src" class="card-content-a">{{item.title}}</a></h3>
                    </div>
                    <div class="card-info">
                      <i class="el-icon-time card-icon">
                        <time class="card-info-content">{{item.time}}</time>
                      </i>
                      <i class="el-icon-view card-icon">
                        <span class="card-info-content">{{item.heat}}℃</span>
                      </i>
                      <i class="el-icon-s-comment card-icon">
                        <span class="card-info-content">{{item.commentNum}}条评论</span>
                      </i>
                    </div>
                    <div class="card-content-detail">
                      <p>{{item.detail}}</p>
                    </div>
                    <a :href="item.src" class="el-icon-more card-content-a"></a>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="0" :sm="3" :md="3" :lg="5" :xl="7">
            <div class="side-content"></div>
          </el-col>
        </el-row>
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
        articleDetail: [
          {
            'id': 0,
            'title': '这是一个文章的标题,很长很长的那种',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://image.biaobaiju.com/uploads/20190504/21/1556975848-dCYyeaURhD.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳',
            'heat': 3251,
            'commentNum': 15,
          },
          {
            'id': 1,
            'title': '标题',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://image.biaobaiju.com/uploads/20190504/21/1556975848-dCYyeaURhD.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳',
            'heat': 3251,
            'commentNum': 15,
          },
          {
            'id': 2,
            'title': '标题',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://image.biaobaiju.com/uploads/20190504/21/1556975848-dCYyeaURhD.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳',
            'heat': 3251,
            'commentNum': 15,
          },
        ]
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

  .side-content {
    min-height: 1px;
  }

  .card-wrapper {
    margin-top: 30px;
  }

  .card {
    width: 100%;
    height: 300px;
    padding: 0;
    border-radius: 10px;
    border: 1px solid #92A1AC;
    overflow: hidden;
    box-shadow: 2px 2px 10px #909090;
    /*box-shadow:0px 12px 8px -12px #000*/
  }

  .card:hover img {
    transform: scale(1.1);
  }

  .card:hover {
    box-shadow: -2px -2px 10px #909090;
    transition: box-shadow .3s ease
  }

  .left {
    float: left;
    text-align: left;
  }

  .right {
    float: right;
    text-align: right;
  }

  .card-img {
    height: 100%;
    width: 60%;
    overflow: hidden;
  }

  .card-img img {
    height: 100%;
    object-fit: cover;
    transition: all 0.6s;
  }

  .card-img img:hover {
    /*transform: scale(1.1);*/
  }

  .card-content {
    height: 100%;
    width: 40%;
  }

  .card-content-wrapper {
    margin: 40px 20px;
    height: 220px;
  }

  .card-content-a {
    text-decoration: none;
    color: #504e4e;
  }

  .card-info {
    color: #888;
    margin-bottom: 15px;
  }

  .card-icon {
    font-size: 14px;
    margin-right: 4px;
  }

  .card-info-content {
    font-size: 12px;
    margin: 0 4px;
  }

  .card-content-detail {
    font-size: 15px;
  }

  .el-icon-more {
    font-size: 30px;
    margin-top: 18px;
  }

  .card-content-a:hover {
    color: #FE9600;
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

