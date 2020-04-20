<template>
  <div>
    <el-container direction="vertical">
      <Header :isPc="isPc"></Header>
      <div class="bg"></div>
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
      <div class="scroll-to-main" :style="{'top':mainHeight-146 + 'px'}">
        <i class="el-icon-arrow-down" @click="scrollToMain"></i>
      </div>
      <el-main ref="main">
        <el-row>
          <el-col :xs="0" :sm="5" :md="4" :lg="7" :xl="8">
            <div class="side-content"></div>
          </el-col>
          <el-col :xs="24" :sm="14" :md="16" :lg="10" :xl="8">
            <div class="card-wrapper" v-if="isPc">
              <div class="card" v-for="(item,index) in articleDetail" :key="item.id">
                <div class="card-img" :class="{'right':index%2 != 1,'left':index%2 != 0}">
                  <img :src="item.src" alt="">
                </div>
                <div class="card-content" :class="{'left':index%2 != 1,'right':index%2 != 0}">
                  <div class="card-content-wrapper">
                    <div class="card-content-title">
                      <h3><a :href="item.url" class="card-content-a">{{item.title}}</a></h3>
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
            <!--移动端-->
            <div class="card-wrapper-mobile" v-else>
              <div class="card-mobile" v-for="item in articleDetail" :key="item.id">
                <div class="card-img-mobile">
                  <img :src="item.src" alt="">
                </div>
                <div class="card-content-mobile">
                  <div class="card-content-wrapper-mobile">
                    <div class="card-content-title-mobile">
                      <h3><a :href="item.url" class="card-content-a">{{item.title}}</a></h3>
                    </div>
                    <div class="card-info-mobile">
                      <i class="el-icon-time card-icon-mobile">
                        <time class="card-info-content-mobile">{{item.time}}</time>
                      </i>
                      <i class="el-icon-view card-icon-mobile">
                        <span class="card-info-content-mobile">{{item.heat}}℃</span>
                      </i>
                      <i class="el-icon-s-comment card-icon-mobile">
                        <span class="card-info-content-mobile">{{item.commentNum}}条评论</span>
                      </i>
                    </div>
                    <div class="card-content-detail-mobile">
                      <p>{{item.detail}}</p>
                    </div>
                    <hr class="card-hr">
                  </div>
                </div>
              </div>
            </div>
            <div class="more">
              <router-link to="/folder">more</router-link>
            </div>
          </el-col>
          <el-col :xs="0" :sm="5" :md="4" :lg="7" :xl="8">
            <div class="side-content"></div>
          </el-col>
        </el-row>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
  import {articleDetailHome} from '../../api/api'
  import Footer from '../../components/blog/footer'
  import Header from '../../components/blog/header'

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
        articleDetail: []
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
          // 减去 header
          height = _that.mainHeight - 74
        } else {
          // 减去header和已经划过的距离
          height = _that.mainHeight - document.documentElement.scrollTop - 74
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
      this.getScreenWidth()
      window.addEventListener('resize', this.getScreenWidth)
      articleDetailHome().then(res => {
        this.articleDetail = res.data
      }).catch(res => {
      })
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
    background: url(../../assets/home-bg.jpg) no-repeat fixed center;
    background-size: auto;
    display: flex;
  }

  main {
    padding: 0;
    /*margin-top: 961px;*/
    margin-bottom: 50px;
    overflow: visible;
  }

  .scroll-to-main {
    position: relative;
  }

  .el-icon-arrow-down {
    font-size: 35px;
    color: white;
    font-weight: 900;
    transform: scale(1.5, 1);
    z-index: 20;
  }

  .side-content {
    min-height: 1px;
  }

  .card {
    width: 100%;
    height: 300px;
    margin-top: 30px;
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

  .card-content {
    height: 100%;
    width: 40%;
  }

  .card-content-wrapper {
    margin: 20px 20px;
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
  }

  .card-content-a:hover {
    color: #FE9600;
  }

  /*mobile*/
  .card-mobile {
    padding: 0 15px;
    height: 440px;
    text-align: left;
  }

  .card-img-mobile {
    height: 210px;
    margin-bottom: 20px;
  }

  .card-img-mobile img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }

  .card-content-mobile {
    height: 210px;
  }

  .card-info-mobile {
    color: #888;
    margin-bottom: 15px;
  }

  .card-icon-mobile {
    margin-right: 4px;
  }

  .card-info-content-mobile {
    margin: 0 4px;
  }

  .card-hr {
    width: 50%;
    height: 1px;
    margin: 25px auto;
    border: 0;
    background: #efefef;
  }

  .more {
    width: 150px;
    height: 45px;
    margin: 30px auto 0;
    border: 1px solid black;
    border-radius: 20px;
  }

  .more a {
    display: block;
    line-height: 45px;
    text-decoration: none;
    color: #2c3e50;
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
    background-image: url('../../assets/img/wave-top.png')
  }

  .waveAnimation .waveTop {
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  .waveMiddle {
    background-size: 50% 120px;
    background-image: url('../../assets/img/wave-mid.png')
  }

  .waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
  }

  .waveBottom {
    background-size: 50% 100px;
    background-image: url('../../assets/img/wave-bot.png')
  }

  .waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
  }
</style>

