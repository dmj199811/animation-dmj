import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/circle-echarts',
  },
  {
    path: '/circle-echarts',
    name: 'ani2',
    component: () => import('../views/circle-echarts/index.vue')
  },
  {
    path: '/xlsx-example',
    name: 'xlsx1',
    component: () => import('../views/xlsx1/index.vue')
  },
  {
    path: '/svg-example1',
    name: 'svg1',
    component: () => import('../views/svg1/index.vue')
  },
  {
    path: '/svg-example2',
    name: 'svg2',
    component: () => import('../views/svg2/index.vue')
  },
  {
    path: '/work-message',
    name: 'message1',
    component: () => import('../views/work/message/index.vue')
  },
  {
    path: '/work-page2',
    name: 'show1',
    component: () => import('../views/work/show1/index.vue')
  },
  {
    path: '/work-page3',
    name: 'show2',
    component: () => import('../views/newPage/index.vue')
  },
  {
    path: '/work-page4',
    name: 'show2',
    component: () => import('../views/newPage2/index.vue')
  },
  {
    path: '/work-page5',
    name: 'show3',
    component: () => import('../views/newPage3/index.vue')
  },
  {
    path: '/work-page6',
    name: 'show4',
    component: () => import('../views/newPage4/index.vue')
  },
  {
    path: '/work-page7',
    name: 'show5',
    component: () => import('../views/newPage5/index.vue')
  },
  {
    path: '/work-page8',
    name: 'show6',
    component: () => import('../views/newPage6/index.vue')
  },
  {
    path: '/work-page9',
    name: 'show7',
    component: () => import('../views/newPage7/index.vue')
  },
  {
    path: '/work-page10',
    name: 'show8',
    component: () => import('../views/newPage8/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
