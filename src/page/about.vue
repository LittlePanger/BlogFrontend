<template>
  <div class="about-main">
    <div class="about-chat">
      <h4 class="about-chat-top">与 LittlePanger 聊天中</h4>
      <transition-group name="slide-fade">
        <div class="message-box box-left" v-if="timerNum>0" key="k1">
          <div class="message-content">Hi~ o(*￣▽￣*)ブ</div>
        </div>
        <div class="message-box box-left" v-if="timerNum>1" key="k2">
          <div class="message-content">我是LittlePanger</div>
        </div>
        <div class="message-box box-left" v-if="timerNum>2" key="k3">
          <div class="message-content">这是我的博客</div>
        </div>
        <div class="message-box box-left" v-if="timerNum===4" key="k4">
          <div class="message-content message-btn" @click="timerNum=5">然后呢?</div>
          <div class="message-content message-btn" @click="timerNum=9">不感兴趣,溜了溜了</div>
        </div>
        <div class="message-box box-right" v-if="timerNum>4 && timerNum<9" key="k5">
          <div class="message-content">然后呢?</div>
        </div>
        <div class="message-box box-left" v-if="timerNum>5 && timerNum<9" key="k6">
          <div class="message-content">一个刚入门的coder</div>
        </div>
        <div class="message-box box-left" v-if="timerNum>6 && timerNum<9" key="k7">
          <div class="message-content">穿梭于2次元与2进制的厨子</div>
        </div>
        <div class="message-box box-left" v-if="timerNum>7 && timerNum<9" key="k8">
          <div class="message-content">代码虐我千百遍,我待代码如初恋</div>
        </div>
        <div class="message-box box-right" v-if="timerNum>8" key="k9">
          <div class="message-content">不感兴趣,溜了溜了</div>
        </div>
        <div class="message-box box-left" v-if="timerNum>9" key="k10">
          <div class="message-content">꒦ິ꒳꒦ີ</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import {pageAbout} from "../api/api";

  export default {
    name: "about",
    data() {
      return {
        timer: '',
        timerNum: 0,
      }
    },
    methods: {
      returnTitleImg(data) {
        this.$emit('getTitle', data)
      },
      show() {
        if (this.timerNum !==4) {
          this.timerNum += 1
        }
        if ((this.timerNum > 10)||(this.timerNum ===8)) {
          clearInterval(this.timer);
        }
      }
    },
    mounted() {
      pageAbout().then(res => {
        this.returnTitleImg(res.data)
      }).catch(res => {
        this.returnTitleImg({
          'title': '关于',
          'src': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2506259012,3613775179&fm=26&gp=0.jpg'
        })
      });
      this.timer = setInterval(this.show, 1000);
    },
    created() {
    },
    beforeDestroy() {
      clearTimeout(this.timer);
    }

  }
</script>

<style scoped>
  .about-main {
    width: auto;
    padding: 0 10px;
    margin-top: 10px;
  }

  .about-chat {
    min-height: 300px;
    padding: 2px 6px 4px;
    background-color: rgba(242, 242, 242, 0.5);
    border-radius: 10px;
  }

  .message-box {
    margin: 10px 0;
    min-height: 20px;
  }

  .message-content {
    width: auto;
    max-width: 85%;
    display: inline-block;
    padding: 7px 13px;
    border-radius: 15px;
    color: #595a5a;
    background-color: #ebebeb;
  }

  .message-btn {
    color: white;
    background-color: #777979;
  }

  .box-left {
    text-align: left;
  }

  .box-right {
    text-align: right;
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-leave-active {
    transition: all .2s ease-out;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
