import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home2',
    component: () => import('../views/Home2.vue')
  },
  {
    path: '/Homepractice',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogBody',
    name: 'blogBody',
    component: () => import('../views/blog crud/blogBody.vue')
  },
  {
    path: '/addBlog/:id',
    name: 'addBlog',
    component: () => import('../views/blog crud/addBlog.vue')
  },
  {
    path: '/pdfPage/:id',
    name: 'pdfPage',
    component: () => import('../views/blog crud/pdfPage.vue')
  },
  {
    path: '/tablePdf',
    name: 'tablePdf',
    component: () => import('../views/blog crud/tablePdf.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
