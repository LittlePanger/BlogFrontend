<template>
  <div>
    <el-container>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :style="{'height':screenHeight+'px'}"
               @open="handleOpen" @close="handleClose"
               :collapse="isCollapse" :router="true">
        <el-menu-item index="/cms/dashboard">
          <i class="el-icon-odometer">
          </i>
          <span slot="title">仪表盘</span>
        </el-menu-item>
        <el-menu-item index="/cms/article/0000/00/00/*.html">
          <i class="el-icon-document-add"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/cms/folder">
          <i class="el-icon-folder"></i>
          <span slot="title">归档</span>
        </el-menu-item>
        <el-menu-item index="/cms/comment">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">留言</span>
        </el-menu-item>
        <el-menu-item index="/cms/settings">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
      <el-container>
        <el-header height="50px">
          <!--          <i class="el-icon-menu header-icon" @click="isCollapse=!isCollapse"/>-->
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
        <!--        <el-footer>Footer</el-footer>-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "indexCMS",
    data() {
      return {
        isCollapse: true,
        screenHeight: 0
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getScreenHeight() {// 屏幕高度
        this.screenHeight = document.documentElement.clientHeight;
      },
    },
    mounted() {
      this.getScreenHeight()
    }

  }
</script>

<style scoped>
  .header-icon {
    float: left;
    font-size: 18px;
    padding: 16px 0;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
