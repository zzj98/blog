<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',

  }
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: url("assets/h-background.jpg") no-repeat fixed;
    background-size: 100% 100%;
    /*background: aqua;*/
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button:focus{
    outline:none;
  }

  #app {

  }
</style>
