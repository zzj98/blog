<template>
  <div id="navigation">
    <div class="logo"><a href="">Img Logo</a></div>
    <ul class="menu">
      <li><router-link to="/" class="dbt">java</router-link></li>
      <li><router-link to="/" class="dbt">php</router-link></li>
      <li><router-link to="/" class="dbt">c++</router-link></li>
      <li><router-link to="/" class="dbt">js</router-link></li>
      <li><router-link to="/" class="dbt">html</router-link></li>
      <li><router-link to="/" class="dbt">css</router-link></li>
      <li style="float: right;">
        <router-link to="/login" class="dbt" v-if="!flag">登录</router-link>
        <router-link to="/inblog" class="dbt" v-if="flag">用户中心</router-link>
      </li>
      <div class="container">
        <form class="parent">
          <input type="text" class="search" placeholder="搜索">
          <input type="button" name="" id="" class="btn">
        </form>
      </div>
    </ul>
  </div>
</template>

<script>
  import '../../assets/find.png';

  export default {
    name: "navigation",
    data(){
      return{
        data:'',
        flag:"",
      }
    },
    mounted(){
      this.$axios.post('http://zzj19980514.xyz:8082/information')
        .then(response => {
          this.content = response.data;
          // console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped>

  #navigation {
    width: 100%;
    height: 40px;
    background: #f0932b;
    line-height: 40px;
  }

  h1, h2, h3, h4 {
    margin: 0 7px;
  }

  div {
    float: left
  }

  .logo{
    margin-left: 15px;
  }

  .menu {
    width: 80%;
    height: 40px;
    margin: 0 auto;
    padding: 0;
    position: relative;
  }

  .menu li {
    float: left;
    height: 40px;
    font-size: 16px;
  }

  .menu li a.dbt {
    padding: 0 24px;
    display: block;
    height: 40px;
    color: #ffffff;
  }

  .menu li.on a.dbt, .menu li a.dbt:hover {
    background: #8f402b;
  }

  .container {
    float: right;
    height: 40px;
    width: 25%;
    /*margin: 50px auto 0 auto;*/
  }

  .parent {
    position: relative;
  }

  .search {
    width: 85%;
    height: 30px;
    top: 3px;
    border-radius: 18px;
    outline: none;
    border: 1px solid #ccc;
    padding-left: 20px;
    position: absolute;
  }

  .btn {
    height: 35px;
    width: 35px;
    position: absolute;
    background: url("../../assets/find.png") no-repeat;
    top: 3px;
    left: 80%;
    border: none;
    outline: none;
    cursor: pointer;
  }

</style>
