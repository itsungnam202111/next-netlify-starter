import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoxOfficeView2 from '../views/BoxOfficeView2.vue'
import BoxOfficeView3 from '../views/BoxOfficeView3.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/boxOffice',
    name: 'boxOffice',
    component: () => import(/* webpackChunkName: "about" */ '../views/BoxOfficeView')
  },
  {
    path: '/boxOffice2',
    name: 'boxOffice2',
    component: BoxOfficeView2
  },
  {
    path: '/boxOffice3',
    name: 'boxOffice3',
    component: BoxOfficeView3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
