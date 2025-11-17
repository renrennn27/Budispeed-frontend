<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'; 
import apiClient from '../services/api';

const product = ref(null);
const loading = ref(true);
const route = useRoute(); 

onMounted(async () => {
 const productId = route.params.id; 
  
  if (!productId) return;

  try {
    const response = await apiClient.get(`/products/${productId}`);
    product.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil detail produk:', error);
  } finally {
    loading.value = false;
  }
});

const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value);
}
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    
    <div v-else-if="product" class="product-page">
      <div class="product-container">
        <div class="photo-section">
          <img :src="product.image_url || 'https://via.placeholder.com/240'" alt="productName" class="product-image">
        </div>

        <div class="description-section">
          <h2 class="product-title">{{ product.name }}</h2>
          
          <div class="price-container">
            <span class="price-new">{{ formatCurrency(product.price) }}</span>
          </div>

          <div class="description-text">
            <p>{{ product.description }}</p>
          </div>

          <div class="marketplace-button-container">
            <a 
              v-if="product.marketplace_url" 
              :href="product.marketplace_url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="button-marketplace"
            >
              Beli di Marketplace
            </a>
            <p v-else class="no-link-message">
              Produk ini tersedia via kontak langsung.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="loading-state">
      <p>Produk tidak ditemukan.</p>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin: 30px 0;
}

.loading-state {
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: #666;
}

.product-page {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-container {
  display: flex;
  gap: 0;
  max-width: 650px;
  width: 100%;
  overflow: hidden;
}

.photo-section {
  flex: 0 0 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}

.product-image {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 5px;
}

.description-section {
  flex: 1;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.product-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.price-container {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-new {
  font-size: 1.1rem;
  font-weight: bold;
  color: #d9534f;
}

.price-old {
  font-size: 15px;
  font-weight: bold;
  color: #d9534f;
  text-decoration: line-through;
}

.description-text {
  margin-top: 5px;
}

.description-text p {
  font-size: 13px;
  line-height: 1.6;
  color: #333;
  margin: 0;
  text-align: left;
}

.marketplace-button-container {
  margin-top: 25px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 24px;
    margin: 20px 0;
  }

  .product-container {
    flex-direction: column;
    max-width: 100%;
  }

  .photo-section {
    flex: none;
    width: 100%;
    padding: 20px;
  }

  .description-section {
    padding: 20px;
  }

  .product-title {
    font-size: 14px;
  }

  .product-subtitle {
    font-size: 12px;
  }

  .price-new,
  .price-old {
    font-size: 14px;
  }

  .description-text p {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 20px;
    margin: 15px 0;
  }

  .product-page {
    padding: 10px;
  }

  .photo-section {
    padding: 15px;
  }

  .description-section {
    padding: 15px;
  }

  .product-title {
    font-size: 13px;
  }

  .product-subtitle {
    font-size: 11px;
  }

  .price-new,
  .price-old {
    font-size: 13px;
  }

  .description-text p {
    font-size: 10px;
  }
}
</style>