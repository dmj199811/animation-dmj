import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/excel-deal',
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
  // {
  //   path: '/work-page4',
  //   name: 'show2',
  //   component: () => import('../views/newPage2/index.vue')
  // },
  // {
  //   path: '/work-page5',
  //   name: 'show3',
  //   component: () => import('../views/newPage3/index.vue')
  // },
  // {
  //   path: '/work-page6',
  //   name: 'show4',
  //   component: () => import('../views/newPage4/index.vue')
  // },
  // {
  //   path: '/work-page7',
  //   name: 'show5',
  //   component: () => import('../views/newPage5/index.vue')
  // },
  // {
  //   path: '/work-page8',
  //   name: 'show6',
  //   component: () => import('../views/newPage6/index.vue')
  // },
  // {
  //   path: '/work-page9',
  //   name: 'show7',
  //   component: () => import('../views/newPage7/index.vue')
  // },
  // {
  //   path: '/work-page10',
  //   name: 'show8',
  //   component: () => import('../views/newPage8/index.vue')
  // },
  // {
  //   path: '/work-page11',
  //   component: () => import('../views/newPage9/index.vue')
  // },
  // {
  //   path: '/work-page12',
  //   component: () => import('../views/newPage10/index.vue')
  // },
  // {
  //   path: '/work-page13',
  //   component: () => import('../views/newPage11/index.vue')
  // },
  // {
  //   path: '/work-page14',
  //   component: () => import('../views/newPage12/index.vue')
  // },
  // {
  //   path: '/work-page15',
  //   component: () => import('../views/newPage13/index.vue')
  // },
  // {
  //   path: '/work-page16',
  //   component: () => import('../views/newPage14/index.vue')
  // },
  // {
  //   path: '/work-page17',
  //   component: () => import('../views/newPage15/index.vue')
  // },
  // {
  //   path: '/work-page18',
  //   component: () => import('../views/newPage16/index.vue')
  // },
  // {
  //   path: '/work-page20',
  //   component: () => import('../views/newPage18/index.vue')
  // },
  {
    path: '/work-newPage19',
    component: () => import('../views/newPage19/index.vue')
  },
  {
    path: '/work-newPage20',
    component: () => import('../views/newPage20/index.vue')
  },
  {
    path: '/work-newPage21',
    component: () => import('../views/newPage21/index.vue')
  },
  {
    path: '/work-newPage22',
    component: () => import('../views/newPage22/index.vue')
  },
  {
    path: '/work-loading',
    component: () => import('../views/work-loading/index.vue')
  },
  {
    path: '/resourcePage',
    component: () => import('../views/resourcePage/index.vue')
  },
  {
    path: '/internetMoney',
    component: () => import('../views/internetMoney/index.vue')
  },
  {
    path: '/driveRoom',
    component: () => import('../views/driveRoom/index.vue')
  },
  {
    path: '/newMalfunctionScreen',
    component: () => import('../views/newMalfunctionScreen/index.vue')
  },
  {
    path: '/displayBoard',
    component: () => import('../views/displayBoard/index.vue')
  },
  {
    path: '/trobuleConfiguration',
    component: () => import('../views/trobuleConfiguration/index.vue')
  },
  {
    path: '/excel-deal',
    component: () => import('../views/excel-deal/index.vue')
  },
  {
    path: '/internetMoneyNew',
    component: () => import('../views/internetMoneyNew/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
