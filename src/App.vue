<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    margin: 0;
  }

  /* 鼠标样式*/
  /*body{cursor:url('./assets/img/pointer.png'), default;}*/
  /*a:hover{cursor:url(https://www.jishusongshu.com/wp-content/uploads/2020/01/link1.png), pointer;}*/

  /*进度条*/
  #nprogress .bar {
    height: 3px;
    background: #fe9600;
    z-index: 1000;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px #fe9600, 0 0 5px #fe9600;
  }

  #nprogress .spinner {
    z-index: 1
  }
</style>
