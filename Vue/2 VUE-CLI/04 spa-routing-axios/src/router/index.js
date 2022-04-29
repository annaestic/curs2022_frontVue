import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdiosView from '../views/AdiosView.vue'
import ApiView from '../views/ApiView.vue'
import AcuditsView from '../views/AcuditsView.vue'
import FormularisView from '../views/FormularisView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/adios',
    name: 'adios',
    component: AdiosView
  },
  {
    path: '/api',
    name: 'api',
    component: ApiView
  },
  {
    path: '/form',
    name: 'form',
    component: FormularisView
  },
  {
    path: '/acudits',
    name: 'acudits',
    component: AcuditsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
