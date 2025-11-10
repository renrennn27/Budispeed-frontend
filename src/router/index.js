import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/LoginPage.vue'
import SigninPage from '@/components/SigninPage.vue'
import AdminDashboard from '@/components/AdminDashboard.vue'
import DetailProduct from '@/components/DetailProduct.vue'
import PageProduct from '@/components/PageProduct.vue'

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
      path: '/AdminDashboard',
      name: 'AdminDashboard',
      component: AdminDashboard
    },
    {
      path: '/produk',
      name: 'Produk',
      component: PageProduct
    },
    {
      path: '/DetailProduk',
      name: 'DetailProduk',
      component: DetailProduct
    },
  ],
})

export default router
