<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="always" :body-style="{ padding: '0px' }" class="top-card">
          <div class="top-card-content">
            <div class="top-card-left">
              <i class="el-icon-user"></i>
            </div>
            <div class="top-card-right">
              <div class="top-card-right-div cd-top">
                <span>123</span>
              </div>
              <div class="top-card-right-div cd-bottom">
                <span>用户访问量</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="top-card">
          <div>
            1
          </div>
          <div>

          </div>
        </el-card>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "dashboard"
  }
</script>

<style scoped>
  .top-card {
    width: 100%;
  }

  .top-card-content {
    height: 100px;
    line-height: 100px;
  }

  .top-card-left {
    width: 20%;
    height: 100%;
    float: left;
    background-color: #e67474;
  }

  .top-card-left i {
    line-height: 100px;
    font-size: 40px;
  }

  .top-card-right {
    width: 80%;
    height: 100%;
    float: left;
  }

  .top-card-right-div {
    height: 50%;
    width: 100%;
  }

  .cd-top span {
    position: relative;
    bottom: 15px;
    font-size: 30px;
  }

  .cd-bottom span {
    position: relative;
    bottom: 35px;
    font-size: 14px;
    color: #666;
  }

  .cd-top {

  }

  .cd-bottom {

  }
</style>
