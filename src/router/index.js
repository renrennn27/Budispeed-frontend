import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/LoginPage.vue'
import AdminDashboard from '@/components/AdminDashboard.vue'
import AdminProductForm from '../components/AdminProductForm.vue'
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
      path: '/product', // <-- Rute Anda
      name: 'product',
      component: PageProduct
    },
    {
      path: '/detailproduct/:id', // <-- Tambahkan :id agar dinamis
      name: 'detailproduct',
      component: DetailProduct
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/dashboard', // <-- Rute Anda
      name: 'admin.dashboard',
      component: AdminDashboard,
      meta: { requiresAuth: true } // 2. TAMBAHKAN META
    },
    {
      path: '/admin/products/new',
      name: 'admin.products.new',
      component: AdminProductForm,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/products/edit/:id',
      name: 'admin.products.edit',
      component: AdminProductForm,
      meta: { requiresAuth: true }
    }
  ],
})

router.beforeEach((to, from, next) => {
  // Cek apakah halaman tujuan butuh login
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('admin_token');
    if (token) {
      // Punya token, izinkan masuk
      next();
    } else {
      // Tidak punya token, tendang ke halaman login
      next({ name: 'login' });
    }
  } else {
    // Halaman publik, izinkan masuk
    next();
  }
});

export default router
