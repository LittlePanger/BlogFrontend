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
html{
  /*overflow-x:hidden;*/
}
/*body{cursor:url('./assets/img/pointer.png'), default;}*/
/*a:hover{cursor:url(https://www.jishusongshu.com/wp-content/uploads/2020/01/link1.png), pointer;}*/
</style>
