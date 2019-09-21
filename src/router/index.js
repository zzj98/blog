import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import login from '../components/page2'
import read from '../components/read'
import inblog from '../components/inblog'
import write from '../components/write'
import registered from '../components/page2/registered'
import loginin from '../components/page2/login'
// import Shuffling from '../components/home/Shuffling-figure02'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/read',
      name: 'read',
      component: read
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered
    },
    {
      path: '/loginin',
      name: 'loginin',
      component: loginin
    },
    {
      path: '/inblog',
      name: 'inblog',
      component: inblog
    },
    {
      path: '/write',
      name: 'write',
      component: write
    },
    // {
    //   path: '/Shuffling',
    //   name: 'Shuffling',
    //   component: Shuffling
    // },
  ]
})
