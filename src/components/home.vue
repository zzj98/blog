<template>
  <div id="home">
    <Header></Header>
    <Shuffling></Shuffling>
    <div class="list">
      <ul class="side-box">
        <li v-for="(item) in tool">
          <router-link to="/read" class="dbt">
            <div class="box">
              <h3>标题：{{item.title}}</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;内容简介：{{item.introduce}}</p>
              <p>作者：{{item.work}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Shuffling from './home/Shuffling-figure'

  export default {
    name: 'home',
    data() {
      return {
        msg: '/login',
        tool: ''
      }
    },
    components: {
      Shuffling,
    },
    mounted(){
      this.$axios.post('http://zzj19980514.xyz:8082/information')
        .then(response => {
          this.tool = response.data;
          // console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }


  #home{
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .side-box{
    width: 55%;
    margin:7px 0 0 23%;
    padding: 8px 2px;
    background: aliceblue;
    /*border: 1px solid #000;*/
  }

  .box {
    margin: 5px;
    padding: 7px;
    border: 1px solid #95a5a6;
    color: black;
  }


</style>
