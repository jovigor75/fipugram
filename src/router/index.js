import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [  // rute na stranice koje čine aplikaciju
  {
    path: '/',//putanja
    name: 'home', // naziv
    component: HomeView // odgovarajuća komponenta
  },
  {
    path: '/login', // putanja
    name: 'login', // naziv
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')  // komponenta je import kojom se komponenta prikazuje
  },
  {
    path: '/signup', // putanja
    name: 'signup', // naziv
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')  // komponenta je import kojom se komponenta prikazuje
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
