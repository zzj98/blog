<template>
  <div id="read">
    <Header></Header>
    <div class="left">
      <div class="window">
        <textarea name="left" v-model="blog[0].main" readonly="readonly"></textarea>
      </div>
    </div>
    <div class="right">
      <div class="window">
        <textarea name="right"></textarea>
        <textarea name="result" readonly="readonly"></textarea>
        <router-link to="/" class="dbt"><button name="test">test</button></router-link>
        <router-link to="/" class="dbt"><button>upload</button></router-link>
        <router-link to="/" class="dbt"><button>read</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "read",
    data(){
      return{
        aaa:123,
        blog:'',
      }
    },
    mounted(){
      // const qs = require('qs');
      // axios.post('/foo', qs.stringify({ 'bar': 123 }));
      let postdata = {"aaa":this.aaa};
      this.$axios({
        method:"post",
        url:'http://zzj19980514.xyz:8082/information',
        data:{
          "aaa":this.aaa,
        }})
        .then(response => {
          this.blog = response.data;
          console.log(this.blog)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  #read{
    width: 100%;
    height: 100%;
    position: fixed;
  }

  div{
    float: left
  }

  h2,button{
    margin-left: 15px;
  }

  textarea{
    resize:none
  }

  textarea[name="left"]{
    width: 88%;
    height: 86%;
    margin: 5%;
    font-size: 17px;
    text-align:left;
    vertical-align:top
  }

  textarea[name="right"]{
    width: 88%;
    height: 70%;
    margin: 5% 5% 2% 5%;
    font-size: 17px;
    text-align:left;
    vertical-align:top
  }

  textarea[name="result"]{
    width: 88%;
    height: 10%;
    margin: 1% 5% 3% 5%;
    font-size: 17px;
    text-align:left;
    vertical-align:top
  }

  button{
    width: 100px;
    background: #95a5a6;
    border-radius: 15px;
    margin-left: 5%;
  }

  button[name="test"]{
    margin-left: 15%;
  }

  .left{
    width: 38%;
    height: 80%;
    margin: 30px 0 0 6.5%;
    padding: 10px;
    border-radius: 18px;
    background: white;
  }

  .right{
    width: 38%;
    height: 80%;
    margin: 30px 0 0 3%;
    padding: 10px;
    border-radius: 18px;
    background: white;
  }

  .window{
    width: 100%;
    height: 100%;
    overflow-y:auto;
  }

</style>
