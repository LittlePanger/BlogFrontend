<template>
  <el-footer height="150px">
    <a v-for="item in social" :key="item.id" :href="item.href" @mouseover="mouseOver($event)" @mouseout="mouseOut($event)"><span :class="item.icon" style="font-size: 50px;padding: 15px"></span></a>
    <div style="margin-top: 10px">Crafted with <span class="e-icon1" style="color: #e74c3c;font-size: 25px"></span> by LittlePanger</div>
    <p style="margin:0">Copyright &copy; LittlePanger {{time}}</p>

    <a class="beian" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502041140">
    <img src="../../assets/备案图标.png" style="float:left;"/>京公网安备 11010502041140号
    </a>
  </el-footer>
</template>

<script>
    export default {
      name: "B-footer",
      data() {
        return{
          time:new Date().getFullYear(),
          social:[
            {'id':0,'name':'weibo','href':'11','icon':'e-iconweibo-copy'},
            {'id':1,'name':'github','href':'11','icon':'e-icongithub'},
            {'id':2,'name':'twitter','href':'11','icon':'e-icontuitetwitter43'}
          ]
        }
      },
      methods:{
        mouseOver(e){
          e.currentTarget.firstElementChild.style.color = "#e65026";
        },
        mouseOut(e){
          e.currentTarget.firstElementChild.style.color = "#000000";
        }
      }
    }
</script>

<style scoped>
  a {
    text-decoration: none;
    color:#000000;
    font-size: 20px;
  }
  p {
    color: #b9b9b9;
  }
  .beian {
    font-size: 15px;
    display:inline-block;
    text-decoration:none;
    line-height:15px;
    margin-top: 5px;
    color: #b9b9b9;
  }
  .beian img{
    height: 15px;
    width: 15px;
  }
  footer {
    margin-top: 100px;
  }
</style>
