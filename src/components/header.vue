<template>
  <el-header height="74px" style="padding: 0" class="header-pc" v-if="isPc">
    <el-row>
      <el-col :span="4" style="line-height: 72px">
        <router-link to="/">
          <img src="../assets/nameLOGO.png" alt="" style="height: 50px;vertical-align: middle">
        </router-link>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span="3" :offset="6" v-for="item in navBarMiddle" :key="item.id" v-if="item.id === 0">
            <div @mouseover="mouseOver($event)" @mouseout="mouseOut($event)" class="header-link">
              <router-link v-bind:to="item.src" v-bind:class="item.icon">{{item.name}}</router-link>
            </div>
          </el-col>
          <el-col :span="3" v-else>
            <div @mouseover="mouseOver($event)" @mouseout="mouseOut($event)" class="header-link">
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

  <!--  mobile  -->
  <el-header class="header-mobile" v-else>
    <transition leave-active-class="animated zoomOut faster">
      <div class="mobile-menu" v-if="menuState" @touchmove.prevent>
        <div class="menu-open-left animated fadeInUp faster">
          <div class="menu-top">
            <div class="menu-avatar">
              <img src="../assets/avatar.jpg" alt="">
            </div>
            <div class="menu-name">
              <p>{{menuTop.name}}</p>
            </div>
            <div class="menu-social">
              <a v-for="item in menuSocial" :key="item.id" :href="item.href">
                <i :class="item.icon" :style="{'color':item.color}"></i>
              </a>
            </div>
          </div>
          <div class="menu-bottom">
            <ul>
              <li v-for="item in navBarMiddle" :key="item.id">
                <router-link :to="item.src" :class="item.icon"><span @click="closeMenu">{{item.name}}</span>
                </router-link>
              </li>
            </ul>
            <p>© 2020 LittlePanger</p>
          </div>
        </div>
        <div class="menu-open-right animated fadeInDown faster" @click="closeMenu">
          <i class="el-icon-close menu-close"></i>
        </div>
      </div>
    </transition>
    <div class="mobile-header-menu">
      <i class="el-icon-menu" @click="openMenu"></i>
    </div>
    <router-link to="/" class="mobile-header-logo">
      <img src="../assets/nameLOGO.png" alt="" style="height: 50px;vertical-align: middle">
    </router-link>
  </el-header>
</template>

<script>
  import {socialInfo} from "../api/api";
  import {personalInfo} from "../api/api";

  export default {
    props: ['isPc'],
    data() {
      return {
        menuState: false,
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
        navBarImg: {'src': '../../build/logo.png'},
        menuTop: {},
        menuSocial: []
      }
    },
    methods: {
      mouseOver(e) {
        e.currentTarget.firstElementChild.style.color = "#e67474";
        e.currentTarget.style.backgroundSize = "100% 5px"
      },
      mouseOut(e) {
        e.currentTarget.firstElementChild.style.color = "#666";
        e.currentTarget.style.backgroundSize = "0 5px"
      },
      openMenu() {
        this.menuState = true
      },
      closeMenu() {
        this.menuState = false
      }
    },
    mounted() {
      socialInfo().then(res =>{
        this.menuSocial = res.data
      }).catch(res => {
        this.menuSocial = [
          {'id': 0, 'name': 'weibo', 'href': '11', 'icon': 'e-iconweibo-copy', 'color': '#dd4b39'},
          {'id': 1, 'name': 'github', 'href': '11', 'icon': 'e-icongithub', 'color': '#333'},
          {'id': 2, 'name': 'twitter', 'href': '11', 'icon': 'e-icontuitetwitter43', 'color': '#00aced'}
        ]
      });
      personalInfo().then(res =>{
        this.menuTop = res.data[0]
      }).catch(res => {
        this.menuSocial = {
          'name': 'LittlePanger', 'avatar': '../assets/avatar.jpg',
        }
      });
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .header-link {
    height: 74px;
    transition: background-size 250ms linear;
    background: linear-gradient(90deg, #fe9600 0, #fe9600 0) no-repeat left bottom;
    background-size: 0 5px;
    border-bottom: 5px;
  }

  .header-pc a {
    line-height: 72px;
    /*color: rgb(144, 147, 153);*/
    color: #666;
  }

  .header-pc {
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    width: 100%;
    z-index: 999;
  }

  .header-mobile {
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    width: 100%;
    z-index: 999;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .mobile-header-menu {
    height: 60px;
    float: left;
  }

  .mobile-header-menu i {
    font-size: 30px;
    line-height: 60px
  }

  .mobile-header-logo {
    position: relative;
    right: -15px;
    float: right;
    line-height: 50px;
  }

  .menu-open-left {
    position: fixed;
    top: 0;
    left: 0;
    right: 35%;
    bottom: 0;
    background: rgb(255, 255, 255);
    z-index: 999;
  }

  .menu-open-right {
    position: fixed;
    top: 0;
    left: 65%;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
  }

  .menu-close {
    z-index: 1000;
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 35px;
    color: white;
    font-weight: bolder;
  }

  .menu-top {
    height: 30%;
    width: 100%;
  }

  .menu-bottom {
    height: 70%;
    width: 100%;
  }

  .menu-avatar {
    padding: 25px 0 15px 0;
    width: 100%;
  }

  .menu-avatar img {
    width: 40%;
    border-radius: 100%;
  }

  .menu-name p {
    text-align: center;
    color: #333;
    font-weight: 900;
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: 1.5px;
  }

  .menu-social i {
    font-size: 17px;
    margin: 0 15px;
  }

  .menu-bottom ul {
    list-style: none;
    padding: 0;
  }

  .menu-bottom li {
    margin: 50px 0;
  }

  .menu-bottom a {
    color: #333333;
    font-weight: 600;
  }

  .menu-bottom span {
    margin-left: 5px;
  }

  .menu-bottom p {
    width: 100%;
    position: absolute;
    bottom: 0px;
    text-align: center;
    font-size: 13px;
    color: #b9b9b9;
  }
</style>
