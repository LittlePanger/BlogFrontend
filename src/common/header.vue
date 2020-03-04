<template>
  <el-header height="74px" style="padding: 0" :class="{home:isHome}">
    <el-row :gutter="20">
      <el-col :span="4" style="line-height: 72px"><router-link to="/"><img src="../assets/logo.png" alt="" style="height: 50px;vertical-align: middle"></router-link></el-col>
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
</template>

<script>
  export default {
    data(){
      return {
        isHome:false,
        navBarMiddle:[
          {'id':0,'name':'首页','src':'/home','icon':'e-iconshouye'},
          {'id':1,'name':'归档','src':'/folder','icon':'e-iconwenjian'},
          {'id':2,'name':'留言','src':'/comment','icon':'e-iconliuyan'},
          {'id':3,'name':'关于','src':'/login','icon':'e-icon1'},
        ],
        navBarRight:[
          {'id':0,'name':'搜索','src':'/login','icon':'e-iconsousuo'},
          {'id':1,'name':'登录','src':'/login','icon':'e-icondingbudaohang-zhangh'},
        ],
        navBarImg:{'src':'../../build/logo.png'}

      }
    },
    methods:{
      mouseOver(e){
        e.currentTarget.firstElementChild.style.color = "#e67474";
        e.currentTarget.style.borderBottom = "5px solid #e67474"
      },
      mouseOut(e){
        e.currentTarget.firstElementChild.style.color = "rgb(144,147,153)";
        e.currentTarget.style.borderBottom = "transparent"
      }
    },
    created() {
      if (this.$route.path === '/home'){
        this.isHome = true
      }
    }
  }
</script>

<style scoped>
  a {
    line-height: 72px;
    text-decoration: none;
    color:rgb(144,147,153);
  }
  /*.el-row {*/
  /*  margin-bottom: 20px;*/
  /*&:last-child {*/
  /*   margin-bottom: 0;*/
  /* }*/
  /*}*/
  /*.el-col {*/
  /*  border-radius: 4px;*/
  /*}*/
  /*.bg-purple-dark {*/
  /*  background: #99a9bf;*/
  /*}*/
  /*.bg-purple {*/
  /*  background: #d3dce6;*/
  /*}*/
  /*.bg-purple-light {*/
  /*  background: #e5e9f2;*/
  /*}*/
  /*.grid-content {*/
  /*  border-radius: 4px;*/
  /*  min-height: 36px;*/
  /*}*/
  /*.row-bg {*/
  /*  padding: 10px 0;*/
  /*  background-color: #f9fafc;*/
  /*}*/
</style>
