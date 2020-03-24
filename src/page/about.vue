<template>
  <div class="about-main">
    <div class="about-chat">
      <h4 class="about-chat-top">与 神秘人 聊天中</h4>
      <div class="message-box box-left"><div class="message-content"></div></div>
      <div class="message-box box-left"><div class="message-content"></div></div>
      <div class="message-box box-right"><div class="message-content"></div></div>
    </div>
  </div>
</template>

<script>
  import {pageAbout} from "../api/api";
  export default {
    name: "about",
    data (){
      return{
      }
    },
    methods:{
      returnTitleImg(data){
        this.$emit('getTitle',data)
      }
    },
    mounted() {
      pageAbout().then(res => {
        this.returnTitleImg(res.data)
      }).catch(res => {
        this.returnTitleImg({'title':'关于','url':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2506259012,3613775179&fm=26&gp=0.jpg'})
      })
    },
  }
</script>

<style scoped>
  .about-main{
    width: auto;
    padding: 0 10px;
    margin-top: 10px;
  }
  .about-chat{
    min-height: 300px;
    padding: 2px 6px 4px;
    background-color: rgba(242, 242, 242, 0.5);
    border-radius: 10px;
  }
  .message-box{
    margin: 10px 0;
    min-height: 20px;
  }
  .message-content{
    width: auto;
    max-width: 85%;
    display: inline-block;
    padding: 7px 13px;
    border-radius: 15px;
    color: #595a5a;
    background-color: #ebebeb;
  }
  .box-left{
    text-align: left;
  }
  .box-right{
    text-align: right;
  }
</style>
