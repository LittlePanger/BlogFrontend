<template>
  <el-header>
    <el-row :gutter="20">
      <el-col :span="4"><img src="../../build/logo.png" alt="" style="height: 36px"></el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span="2" :offset="8"><div><router-link to="/login" class="el-icon-search">首页</router-link></div></el-col>
          <el-col :span="2"><div @mouseover="mouseOver($event)" ref="m"><router-link to="/login">归档</router-link></div></el-col>
          <el-col :span="2"><div><router-link to="/login">留言</router-link></div></el-col>
          <el-col :span="2"><div><router-link to="/login">关于</router-link></div></el-col>
        </el-row>
      </el-col>
      <el-col :span="4" style="line-height: 42px">
        <span class="el-icon-search" style="font-size: 25px"></span>
        <router-link to="/login">登录</router-link>
      </el-col>
    </el-row>

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
  export default {
    methods:{
      mouseOver(e){
          console.log(111,e.currentTarget.firstElementChild);
          // console.log(this.currentTarget.firstElementChild)
        // this.$el.style.color = "rgb(69, 71, 74)!important"
          e.currentTarget.firstElementChild.style.color = "red"
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color:rgb(144,147,153);
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
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
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
