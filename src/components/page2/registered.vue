<template>
  <div id="registered">
    <!--<h2>{{flag}}</h2>-->
    <form class="box" method="get">
      <h1>用户注册</h1>
      <input type="text" name="phone" placeholder="手机号">
      <input type="text" name="pwd" placeholder="验证码">
      <!--<router-link to="/registered">-->
      <!--</router-link>-->
      <input @click="click" type="button" name="btn" value="直接登录">
      <input type="button" name="btn" value="获取验证码">
      <input type="submit" value="注册">
    </form>
  </div>
</template>

<script>
    export default {
      name: "registered",
      methods: {
        click() {
          this.$emit('childFn', this.flag=0);
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

  .box input[type = "submit"] {
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

  .box input[type = "submit"]:hover {
    background: #3498db;
  }

  .box input[type = "button"] {
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

  .box input[type = "button"]:hover {
    background: #3498db;
  }
</style>
