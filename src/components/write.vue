<template>
    <div id="write">
      <Header></Header>
      <div class="box">
        <div class="window">
          <h2>标题：</h2><input type="text" name="title" v-model="blog.title"><br/><br/>
          <h2>语言：</h2><select>
          <option value ="volvo">JAVA</option>
          <option value ="saab">PHP</option>
          <option value="opel">JS</option>
        </select><br/><br/>
          <h2>简介：</h2><textarea maxlength="10" name="introduce" v-model="blog.introduce"></textarea><br/><br/>
          <h2>代码：</h2><textarea name="main" v-model="blog.main"></textarea>
          <router-link to="/login" class="dbt"><button>确认</button></router-link>
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
            blog:{
              title:'',
              introduce:'',
              main:'',
            },
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
  #write{
    width: 100%;
    height: 100%;
    position: fixed;
  }

  div{
    float: left
  }

  h2{
    display : inline;
    margin-left: 15px;

  }

  textarea{
    resize:none
  }

  select{
    width: 60px;
    height: 20px;
  }

  input[name="title"]{
    width: 20%;
    height: 20px;
    font-size: 17px;
  }

  textarea[name="introduce"]{
    width: 60%;
    height: 50px;
    font-size: 17px;
    vertical-align:top
  }

  textarea[name="main"]{
    width: 80%;
    height: 54%;
    font-size: 17px;
    text-align:left;
    vertical-align:top;
  }

  button{
    width: 20%;
    background: #95a5a6;
    border-radius: 15px;
    margin-top: 15px;
    margin-left: 40%;
  }

  .window{
    width: 100%;
    height: 100%;
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
