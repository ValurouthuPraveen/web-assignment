import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../components/Login/LoginPage';
import DashboardPage from '../components/Dashboard/DashboardPage';
import CartItems from '../components/Cart/CartItems';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage
  },
  {
    path: '/cart',
    name: 'CartItems',
    component: CartItems
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
