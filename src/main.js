// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import Header from './components/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import qs from 'qs';

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper:swiper,
    swiperSlide:swiperSlide
  }
}

Vue.use(Header);
Vue.use(VueAwesomeSwiper, /* { default global options } */);

Vue.prototype.$axios = axios;
// Vue.prototype.$qs = qs;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
