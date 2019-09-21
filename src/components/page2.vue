<template>
  <div id="page2">
    <div class="wid">
      <!--{{flag}}-->
      <login class="login" :flag="flag"  @childFn="parentFn" v-show="!flag"></login>
      <registered class="registered" :flag="flag"  @childFn="parentFn" v-show="flag"></registered>
    </div>
  </div>
</template>

<script>
  import login from './page2/login'
  import registered from './page2/registered'

  export default {
    name: "page2",
    data(){
      return{
        flag:0,
      }
    },
    methods: {
      parentFn(payload) {
        this.flag = payload;
      },
    },
    components: {
      login,
      registered,
    },
  }
</script>

<style scoped>
  #page2 {
    position: fixed;
    width: 100%;
    height: 100%;
    background: url("../assets/background.jpg") no-repeat fixed;
    background-size: 100% 100%;
  }

  .wid {
    margin: 6% 14% 0;
    height: 75%;
    background: #f5f6fa;
    opacity: 0.75;
  }
</style>
