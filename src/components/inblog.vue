<template>
  <div id="inblog">
    <Header></Header>
    <div class="box">
      <router-link to="/login" class="dbt"><button>我的作品</button></router-link>
      <router-link to="/login" class="dbt"><button>我的收藏</button></router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
  #inblog{
    width: 100%;
    height: 100%;
    position: fixed;
  }

  div{
    float: left
  }

  button{
    width:10%;
    padding:4% 0 4%;
    min-width: 80px;
    min-height: 80px;
    border-radius: 120px;
  }

  .box{
    width: 70%;
    height: 80%;
    margin: 30px 0 0 13%;
    padding: 10px;
    border-radius: 18px;
    background: white;
  }
</style>
