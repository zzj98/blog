<template>
  <div id="login">
    <!--<h2>{{flag}}</h2>-->
    <form class="box" method="get">
      <h1>用户登录</h1>
      <input type="text" name="phone" placeholder="手机号" v-model="phone">
      <input type="text" name="pwd" placeholder="验证码" v-model="pwd">
      <!--<router-link to="/registered">-->
      <input @click="click" type="button" name="btn" value="注册账号">
      <!--</router-link>-->
      <input type="button" name="btn" value="获取验证码">
      <input @click="aaa" type="button" name="submit" value="登录">
    </form>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return{
        phone:'',
        pwd:'',
      }
    },
    methods: {
      click() {
        this.$emit('childFn', this.flag=1);
      },
      aaa(){
        var params = {
          "phone":this.phone,
          "pwd":this.pwd,
        };
        this.$axios.post('http://zzj19980514.xyz:8082/user',JSON.stringify(params),{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        })
          .then(response => {
            this.blog = response.data;
            console.log(this.blog)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },
    props: {
      flag: {
        type: Number,
      }
    },
  }
</script>

<style scoped>
  .box {
    width: 300px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*background: #3a3b4c;*/
    /*opacity:0.89;*/
    text-align: center;
  }

  .box h1 {
    color: #191919;
    text-transform: uppercase;
    font-weight: 500;
  }

  .box input[type = "text"] {
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #191919;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: #191919;
    border-radius: 10px;
    transition: 0.25s;
  }

  .box input[type = "text"]:focus {
    width: 240px;
    border-color: #191919;
  }

  .box input[name = "submit"] {
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #191919;
    padding: 12px 50px;
    outline: none;
    color: #191919;
    border-radius: 10px;
    transition: 0.25s;
    cursor: pointer;
  }

  .box input[name = "submit"]:hover {
    background: #3498db;
  }

  .box input[name = "btn"] {
    background: none;
    margin: 0 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 3px 12px;
    outline: none;
    color: #191919;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }

  .box input[name = "btn"]:hover {
    background: #3498db;
  }
</style>
