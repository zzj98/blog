<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper-container" >
      <!-- slides -->
      <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
        <img class='swiper-img' :src='item.imgUrl'/>
      </swiper-slide>
      <!-- Optional controls ,显示小点-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>

  export default {
    name:'HomeSwiper',
    //es6的写法，相当于data:function(){return{swiperOption:{}}}
    data(){
      return{
        swiperOption:{
          // 参数选项,显示小点
          pagination:'.swiper-pagination',
          //循环
          loop:true,
          //每张播放时长3秒，自动播放
          autoplay:2000,
          //滑动速度
          speed:1000,
          autoHeight:true,
          paginationClickable:true,
          autoplayDisableOnInteraction: false,
          // delay:1000
        },
        //三张轮播，使用变量循环
        swiperList:[
          {
            id:'001',
            imgUrl:"http://zzj19980514.xyz:8081/static/img/play/01.jpg",
          },
          {
            id:'002',
            imgUrl:"http://zzj19980514.xyz:8081/static/img/play/02.jpg",
          },
          {
            id:'003',
            imgUrl:"http://zzj19980514.xyz:8081/static/img/play/03.jpg",
          },
          {
            id:'004',
            imgUrl:"http://zzj19980514.xyz:8081/static/img/play/04.jpg",
          },
          {
            id:'005',
            imgUrl:"http://zzj19980514.xyz:8081/static/img/play/05.jpg",
          }
        ],
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        }
      }
    },

  }
</script>
<style lang='stylus' scoped>
  *{
    padding 0
    margin 0
  }
  .swiper-container-autoheight,
  .swiper-container-autoheight .swiper-slide
    max-height 215px
  .wrapper >>>.swiper-pagination-bullet-active
    background #f0932b !important
  .wrapper
    overflow:hidden
    width 66%
    /*min-width 150px*/
    max-height 250px
    padding 0 17%
    position static
    .swiper-item
      width:100%
      .swiper-img
        width:100%
</style>
