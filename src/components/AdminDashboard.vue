<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, RouterLink } from 'vue-router'; // Pastikan RouterLink di-import
import apiClient from '../services/api';

const products = ref([]);
const router = useRouter();

// --- FUNGSI BARU UNTUK FORMAT HARGA (SESUAI DESAIN) ---
const formatCurrency = (value) => {
  if (value == null) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value);
}

// 1. Buat fungsi untuk mengambil produk
async function fetchProducts() {
  try {
    const response = await apiClient.get('/products');
    products.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil produk:', error);
  }
}

// 2. Panggil fungsi itu saat komponen dimuat
onMounted(fetchProducts);

// GANTI FUNGSI LAMA DENGAN INI
function getImageUrl(url) {
  if (!url) return 'https://via.placeholder.com/220';

  // Jika url sudah ada http (dari internet), biarkan
  if (url.startsWith('http')) return url;

  // Hapus tanda slash di depan jika ada agar tidak double
  const cleanUrl = url.startsWith('/') ? url.substring(1) : url;

  // PAKSA tambahkan alamat backend port 8000
  return `http://127.0.0.1:8000/${cleanUrl}`;
}

// 3. Buat fungsi untuk menghapus produk
async function deleteProduct(id) {
  if (!confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
    return;
  }
  try {
    await apiClient.delete(`/products/${id}`);
    fetchProducts(); // Refresh tabel
  } catch (error) {
    console.error('Gagal menghapus produk:', error);
  }
}

// 4. Fungsi untuk logout
function logout() {
  localStorage.removeItem('admin_token');
  router.push('/login');
}
</script>

<template>
  <div class="dashboard-container">
    
    <header class="dashboard-header">
      <h1>Manajemen Produk</h1>
      <div class="header-actions">
        <RouterLink :to="{ name: 'admin.products.new' }" class="btn btn-primary">
          Tambah Produk +
        </RouterLink>
        <button @click="logout" class="btn btn-logout">Logout</button>
      </div>
    </header>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Gambar</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="products.length === 0">
            <td colspan="4" class="empty-state">Belum ada produk.</td>
          </tr>
          
          <tr v-for="product in products" :key="product.id">
            <td>
              <img 
                :src="getImageUrl(product.image_url)"
                :alt="product.name" 
                class="product-thumbnail"
              >
            </td>
            <td>{{ product.name }}</td>
            <td>{{ formatCurrency(product.price) }}</td>
            <td class="actions">
              <RouterLink 
                :to="{ name: 'admin.products.edit', params: { id: product.id } }" 
                class="btn-icon btn-edit"
                title="Edit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </RouterLink>
              
              <button 
                @click="deleteProduct(product.id)" 
                class="btn-icon btn-delete"
                title="Hapus"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.025 0A48.254 48.254 0 0 1 6.75 5.397M14.5 5.79V4.25a2.25 2.25 0 0 0-2.25-2.25h-3a2.25 2.25 0 0 0-2.25 2.25v1.54M12 5.79a48.24 48.24 0 0 1-3.25.02A48.24 48.24 0 0 1 6.75 5.79" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* Style baru yang bersih sesuai desain */
.dashboard-container {
  padding: 24px;
  background-color: #f9fafb; /* Latar belakang abu-abu muda */
  min-height: 100vh;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.dashboard-header h1 {
  font-size: 1.75rem; /* 28px */
  font-weight: 600;
  color: #111827; /* Hitam pekat */
}

.header-actions {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
}

.btn-primary {
  background-color: #D90000; /* Warna merah utama */
  color: white;
}
.btn-primary:hover {
  background-color: #b00000;
}

.btn-logout {
  background-color: #6b7280; /* Abu-abu */
  color: white;
}
.btn-logout:hover {
  background-color: #4b5563;
}

.table-container {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Untuk merapikan border-radius tabel */
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #f3f4f6; /* Latar header tabel */
}

th, td {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
  vertical-align: middle;
}

th {
  font-size: 0.75rem; /* 12px */
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

td {
  font-size: 0.875rem; /* 14px */
  color: #374151;
}

.empty-state {
  text-align: center;
  color: #6b7280;
  padding: 32px;
}

.product-thumbnail {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.actions {
  display: flex;
  gap: 8px;
}

.btn-icon {
  background-color: transparent;
  border: none;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: all 0.2s;
}
.btn-icon svg {
  width: 20px;
  height: 20px;
}

.btn-edit:hover {
  color: #3b82f6; /* Biru */
  background-color: #eff6ff;
}

.btn-delete:hover {
  color: #ef4444; /* Merah */
  background-color: #fef2f2;
}
</style>