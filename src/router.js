import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Resume from './pages/Resume.vue'
import Website from './pages/Website.vue'
import Ecomm from './pages/Ecomm.vue'
import Dash from './pages/Dash.vue'


Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: '/dist',
      
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    
    {
      path: '/ohbot-website',
      name: 'website',
      component: Website
    },
    {
      path: '/ohbot-ecommerce',
      name: 'ecomm',
      component: Ecomm
    },
    {
      path: '/ohbot-dashboard',
      name: 'dash',
      component: Dash
    }, 
  ]
})
