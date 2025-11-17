<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import apiClient from '../services/api.js';

const route = useRoute();
const router = useRouter();
const isEditMode = ref(false);
const productId = ref(null);

const formData = ref({
  name: '',
  price: 0,
  description: '',
  marketplace_url: '',
  rating: null,
});
const imageFile = ref(null);
const currentImageUrl = ref('');

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file && file.size < 2048000) { // Validasi ukuran < 2MB
    imageFile.value = file;
  } else if (file) {
    alert('Ukuran file terlalu besar. Maksimal 2MB.');
    event.target.value = null; // Reset input file
  }
}

onMounted(async () => {
  if (route.params.id) {
    isEditMode.value = true;
    productId.value = route.params.id;
    try {
      const response = await apiClient.get(`/products/${productId.value}`);
      const product = response.data;
      formData.value = {
        name: product.name,
        price: product.price,
        description: product.description,
        marketplace_url: product.marketplace_url,
        rating: product.rating,
      };
      currentImageUrl.value = product.image_url;
    } catch (error) {
      console.error('Gagal mengambil data produk:', error);
    }
  }
});

async function handleSubmit() {
  const data = new FormData();

  data.append('name', formData.value.name);
  data.append('price', formData.value.price);
  data.append('description', formData.value.description);
  data.append('marketplace_url', formData.value.marketplace_url);
  data.append('rating', formData.value.rating ?? '');
  
  if (imageFile.value) {
    data.append('image_file', imageFile.value);
  }

  try {
    if (isEditMode.value) {
      await apiClient.post(`/products/${productId.value}`, data);
    } else {
      await apiClient.post('/products', data);
    }
    router.push({ name: 'admin.dashboard' }); // Kembali ke dashboard
  } catch (error) {
    console.error('Gagal menyimpan produk:', error);
    alert('Gagal menyimpan: ' + (error.response?.data?.message || error.message));
  }
}
</script>

<template>
  <div class="form-page-container">
    <div class="form-container">
      
      <h1 class="form-title">
        {{ isEditMode ? 'Edit Produk' : 'Tambah Produk Baru' }}
      </h1>
      
      <form @submit.prevent="handleSubmit">
        
        <div class="form-group">
          <label for="name">Nama Produk</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            placeholder="Contoh: Little Trees USA"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="price">Harga Produk</label>
          <input 
            type="number" 
            id="price" 
            v-model="formData.price" 
            placeholder="Contoh: 15900"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="description">Deskripsi Produk</label>
          <textarea 
            id="description" 
            v-model="formData.description" 
            rows="5"
            placeholder="Jelaskan detail produk di sini..."
            required
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="marketplace_url">Link Marketplace</label>
          <input 
            type="url" 
            id="marketplace_url" 
            v-model="formData.marketplace_url"
            placeholder="Contoh: https://shopee.co.id/..."
          >
        </div>
        
        <div class="form-group">
          <label for="rating">Rating Produk</label>
          <input 
            type="number" 
            step="0.1" 
            min="0"
            max="5"
            id="rating" 
            v-model="formData.rating"
            placeholder="Contoh: 4.5"
          >
        </div>
        
        <div class="form-group">
          <label for="image_file">Gambar Produk (Maks 2MB)</label>
          <div v-if="isEditMode && currentImageUrl" class="image-preview">
            <p>Gambar saat ini:</p>
            <img :src="currentImageUrl" alt="Gambar saat ini">
          </div>
          <input 
            type="file" 
            id="image_file" 
            @change="handleFileSelect"
            accept="image/png, image/jpeg, image/webp" 
          >
        </div>
        
        <div class="form-actions">
          <RouterLink :to="{ name: 'admin.dashboard' }" class="btn btn-secondary">
            Batal
          </RouterLink>
          <button type="submit" class="btn btn-primary">
            Simpan
          </button>
        </div>
        
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Style baru yang bersih sesuai desain */
.form-page-container {
  padding: 32px;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
}

.form-container {
  width: 100%;
  max-width: 700px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  color: #111827;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  color: #374151;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db; /* Abu-abu muda */
  border-radius: 8px;
  font-size: 0.875rem;
  color: #111827;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #D90000;
  box-shadow: 0 0 0 2px rgba(217, 0, 0, 0.3);
}

.form-group input[type="file"] {
  padding: 0;
  border: none;
  box-shadow: none;
}
.form-group input[type="file"]::file-selector-button {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.form-group input[type="file"]::file-selector-button:hover {
  background-color: #f9fafb;
}

.image-preview {
  margin-bottom: 12px;
}
.image-preview p {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 8px;
}
.image-preview img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.form-actions {
  display: flex;
  justify-content: flex-end; /* Tombol di kanan */
  gap: 12px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-primary {
  background-color: #D90000;
  color: white;
}
.btn-primary:hover {
  background-color: #b00000;
}

.btn-secondary {
  background-color: #e5e7eb; /* Abu-abu muda */
  color: #374151;
  border: 1px solid #d1d5db;
}
.btn-secondary:hover {
  background-color: #d1d5db;
}
</style>