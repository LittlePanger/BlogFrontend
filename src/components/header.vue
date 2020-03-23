<template>
  <el-header height="74px" style="padding: 0" :class="{home:isHome}" v-if="isPc" class="header-pc">
    <el-row :gutter="20">
      <el-col :span="4" style="line-height: 72px">
        <router-link to="/">
          <img src="../assets/nameLOGOWhite.png" alt="" style="height: 50px;vertical-align: middle" v-if="isHome">
          <img src="../assets/nameLOGO.png" alt="" style="height: 50px;vertical-align: middle" v-else>
        </router-link>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span="3" :offset="6" v-for="item in navBarMiddle" :key="item.id" v-if="item.id === 0">
            <div @mouseover="mouseOver($event)" @mouseout="mouseOut($event)" style="height: 69px">
              <router-link v-bind:to="item.src" v-bind:class="item.icon">{{item.name}}</router-link>
            </div>
          </el-col>
          <el-col :span="3" v-else>
            <div @mouseover="mouseOver($event)" @mouseout="mouseOut($event)" style="height: 69px">
              <router-link :to="item.src" v-bind:class="item.icon">{{item.name}}</router-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4" style="line-height: 72px">
        <router-link v-for="item in navBarRight" :key="item.id" :to="item.src" style="margin-left: 25px"><span
          :class="item.icon" style="font-size: 25px"></span></router-link>
      </el-col>
    </el-row>
  </el-header>
  <el-header v-else>
    <div class="mobile-header-icon"><i class="el-icon-menu" style="font-size: 30px;line-height: 60px"></i></div>
    <router-link to="/" class="mobile-header-logo">
      <img src="../assets/nameLOGOWhite.png" alt="" style="height: 50px;vertical-align: middle" v-if="isHome">
      <img src="../assets/nameLOGO.png" alt="" style="height: 50px;vertical-align: middle" v-else>
    </router-link>
  </el-header>
</template>

<script>
  export default {
    props: ['isPc'],
    data() {
      return {
        isHome: false,
        navBarMiddle: [
          {'id': 0, 'name': '首页', 'src': '/home', 'icon': 'e-iconshouye'},
          {'id': 1, 'name': '归档', 'src': '/folder', 'icon': 'e-iconwenjian'},
          {'id': 2, 'name': '留言', 'src': '/comment', 'icon': 'e-iconliuyan'},
          {'id': 3, 'name': '关于', 'src': '/about', 'icon': 'e-icon1'},
        ],
        navBarRight: [
          {'id': 0, 'name': '搜索', 'src': '/article', 'icon': 'e-iconsousuo'},
          {'id': 1, 'name': '登录', 'src': '/account/login', 'icon': 'e-icondingbudaohang-zhangh'},
        ],
        navBarImg: {'src': '../../build/logo.png'}

      }
    },
    methods: {
      mouseOver(e) {
        e.currentTarget.firstElementChild.style.color = "#e67474";
        e.currentTarget.style.borderBottom = "5px solid #e67474"
      },
      mouseOut(e) {
        e.currentTarget.firstElementChild.style.color = "rgb(144,147,153)";
        e.currentTarget.style.borderBottom = "transparent"
      }
    },
    created() {
      if (this.$route.path === '/home') {
        this.isHome = true
      }
    }
  }
</script>

<style scoped>
  .header-pc a {
    line-height: 72px;
    text-decoration: none;
    color: rgb(144, 147, 153);
  }
  .mobile-header-icon{
    height: 60px;
    float: left;
  }
  .mobile-header-logo{
    position: relative;
    right: -15px;
    float: right;
    line-height: 50px;
  }
</style>
