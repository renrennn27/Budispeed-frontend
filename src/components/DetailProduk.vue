<template>
  <div>
    <h1>Ini Halaman Produk Saya</h1>
    
    <div class="product-page">
      <div class="product-container">
        <div class="photo-section">
          <img :src="productImage" :alt="productName" class="product-image">
        </div>

        <div class="description-section">
          <h2 class="product-title">Little Treds USA Kemenkos Budispeedi</h2>
          <h3 class="product-subtitle">Pangharum-ing Sukmaning Gesang</h3>
          
          <div class="price-container">
            <span class="price-new">Rp. 60.000 - Rp. 80.000</span>
          </div>

          <div class="description-text">
            <p>Sebuah produk baru bergenre mobil skala cepat motor, harapannya nih beli pengaruh mobil skala cepat motor, harapannya. Variasi aromanya juga tidak garap-garap sekali untuk dipadu-padan dengan yang sejahteranya.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const productName = ref('Little Treds USA Kemenkos Budispeedi')
const productSubtitle = ref('Pangharum-ing Sukmaning Gesang')
const originalPrice = ref(80000)
const discountPrice = ref(60000)
const productImage = ref('https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop')
const productDescription = ref('Sebuah produk baru bergenre mobil skala cepat motor, harapannya nih beli pengaruh mobil skala cepat motor, harapannya. Variasi aromanya juga tidak garap-garap sekali untuk dipadu-padan dengan yang sejahteranya.')
</script>

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
  object-fit: cover;
}

.description-section {
  flex: 1;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.product-title {
  font-size: 15px;
  font-weight: bold;
  color: #000;
  margin: 0 0 3px 0;
  line-height: 1.2;
}

.product-subtitle {
  font-size: 13px;
  font-weight: normal;
  color: #000;
  margin: 0 0 12px 0;
  line-height: 1.2;
}

.price-container {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-new {
  font-size: 15px;
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
  font-size: 11px;
  line-height: 1.5;
  color: #333;
  margin: 0;
  text-align: left;
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