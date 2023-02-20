import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../components/Login/LoginPage';
import getDataFromSessionStorage from '@/utils/getDataFromSessionStorage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/layout',
    component: () => import(/* webpackChunkName: "LayoutWrapper" */ '../components/Layout/LayoutWrapper'),
    beforeEnter: (to, from, next) => {
      const isUserData = getDataFromSessionStorage('userData');
      if (isUserData) {
        next();
      } else {
        router.push({ name: 'LoginPage' });
      }
    },
    children: [
      {
        path: 'dashboard',
        name: 'DashboardPage',
        component: () => import(/* webpackChunkName: "Dashboard" */ '../components/Dashboard/DashboardPage'),
        props: true
      },
      {
        path: 'cart',
        name: 'CartItems',
        component: () => import(/* webpackChunkName: "Cart" */ '../components/Cart/CartItems') ,
        props: true,
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
