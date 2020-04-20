<template>
  <div>
    <el-collapse-transition>
      <div v-if="(scrollShow)&&(isPc)" class="scrollShow-cat" @click="goTop"></div>
    </el-collapse-transition>
  </div>

</template>

<script>
  export default {
    props: ['isPc'],
    data() {
      return {
        scrollShow: false,
        scrollTop: '',
      }
    },
    methods: {
      handleScroll() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (this.scrollTop > 474) {
          this.scrollShow = true
        } else {
          this.scrollShow = false
        }
      },
      goTop() {
        let timer = null,
          _that = this;
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 30;
            document.body.scrollTop = document.documentElement.scrollTop =
              _that.scrollTop;
            timer = requestAnimationFrame(fn);
          } else {
            cancelAnimationFrame(timer);
            _that.scrollShow = false;
          }
        });
      },
    },
    mounted() {//给window添加一个滚动监听事件
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.getWidth)
    },
    destroyed() {//离开该页面需要移除这个监听的事件
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.getWidth)
    },
  }
</script>

<style scoped>
  .scrollShow-cat {
    width: 63px;
    height: 810px;
    position: fixed;
    z-index: 99;
    top: 0;
    right: 50px;
    background-image: url("../../assets/scroll.png");
    background-size: 63px 810px;
  }
</style>
