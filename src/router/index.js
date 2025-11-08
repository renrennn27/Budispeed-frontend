import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/LoginPage.vue'
import SigninPage from '@/components/SigninPage.vue'
import Dashboard from '@/components/Dashboard.vue'
import DetailProduk from '@/components/DetailProduk.vue'
import Produk from '../components/Produk.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: LoginPage
    },
    {
      path: '/admin/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/admin/Sign-in',
      name: 'Sign-in',
      component: SigninPage
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/produk',
      name: 'Produk',
      component: Produk
    },
    {
      path: '/DetailProduk',
      name: 'DetailProduk',
      component: DetailProduk
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
