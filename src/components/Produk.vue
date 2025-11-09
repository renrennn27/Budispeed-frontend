<template>
  <div class="main-container">
    <div class="container">
      
      <div>
        <h1>Semua Produk yang Kami Jual</h1>
        <div class="product-grid">
          <a v-for="produk in semuaProduk" 
             :key="produk.link" 
             :href="produk.link" 
             class="product-card" 
             target="_blank">
            
            <div class="product-image">
              <img :src="produk.gambar" :alt="produk.nama">
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ produk.nama }}</h3>
              <p class="product-price">{{ produk.harga }}</p>
              <div class="product-rating">
                <span class="rating-number">{{ produk.rating }}</span>
                <div class="stars" v-html="buatBintang(produk.rating)"></div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="slider-section">
        <h1>Produk Pilihan</h1>
        <div class="slider-container">
          <button class="slider-button button-left" @click="geserKiri('slider1')">
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          
          <div class="slider-wrapper" ref="sliderWrapper1">
            <div class="slider-items" :style="{ transform: `translateX(${sliderPositions.slider1}px)` }">
              <div v-for="produk in semuaProduk" :key="produk.link" class="slider-item">
                <a :href="produk.link" class="product-card" target="_blank">
                  <div class="product-image"><img :src="produk.gambar" :alt="produk.nama"></div>
                  <div class="product-info">
                    <h3 class="product-name">{{ produk.nama }}</h3>
                    <p class="product-price">{{ produk.harga }}</p>
                    <div class="product-rating">
                      <span class="rating-number">{{ produk.rating }}</span>
                      <div class="stars" v-html="buatBintang(produk.rating)"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <button class="slider-button button-right" @click="geserKanan('slider1')">
            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
        </div>
      </div>

      <div class="slider-section">
        <h1>Produk Terlaris</h1>
        <div class="slider-container">
          <button class="slider-button button-left" @click="geserKiri('slider2')">
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <div class="slider-wrapper" ref="sliderWrapper2">
            <div class="slider-items" :style="{ transform: `translateX(${sliderPositions.slider2}px)` }">
              <div v-for="produk in semuaProduk" :key="produk.link" class="slider-item">
                <a :href="produk.link" class="product-card" target="_blank">
                  <div class="product-image"><img :src="produk.gambar" :alt="produk.nama"></div>
                  <div class="product-info">
                    <h3 class="product-name">{{ produk.nama }}</h3>
                    <p class="product-price">{{ produk.harga }}</p>
                    <div class="product-rating">
                      <span class="rating-number">{{ produk.rating }}</span>
                      <div class="stars" v-html="buatBintang(produk.rating)"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <button class="slider-button button-right" @click="geserKanan('slider2')">
            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
        </div>
      </div>

      <div class="slider-section">
        <h1>Rekomendasi untuk Anda</h1>
        <div class="slider-container">
          <button class="slider-button button-left" @click="geserKiri('slider3')">
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <div class="slider-wrapper" ref="sliderWrapper3">
            <div class="slider-items" :style="{ transform: `translateX(${sliderPositions.slider3}px)` }">
              <div v-for="produk in semuaProduk" :key="produk.link" class="slider-item">
                <a :href="produk.link" class="product-card" target="_blank">
                  <div class="product-image"><img :src="produk.gambar" :alt="produk.nama"></div>
                  <div class="product-info">
                    <h3 class="product-name">{{ produk.nama }}</h3>
                    <p class="product-price">{{ produk.harga }}</p>
                    <div class="product-rating">
                      <span class="rating-number">{{ produk.rating }}</span>
                      <div class="stars" v-html="buatBintang(produk.rating)"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <button class="slider-button button-right" @click="geserKanan('slider3')">
            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// Impor 'ref' dan 'reactive' dari Vue untuk membuat data reaktif
import { ref, reactive } from 'vue';

// Gunakan 'ref' untuk array atau nilai primitif
// BUKAN: var produk1 = ... TAPI: const semuaProduk = ref([...])
const semuaProduk = ref([
    {
        nama: "Little Trees USA Kemenkeu Budispeed | Pengharum Mobil Original",
        harga: "Rp 19.000",
        rating: 4.8,
        gambar: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/produk1"
    },
    {
        nama: "Produk Keren Lainnya",
        harga: "Rp 25.000",
        rating: 4.5,
        gambar: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/produk2"
    },
    // ... Tambahkan 8 produk lainnya di sini
    { nama: "Produk 3", harga: "Rp 19.000", rating: 4.8, gambar: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=400&h=400&fit=crop", link: "https://tokopedia.com/produk3" },
    { nama: "Produk 4", harga: "Rp 19.000", rating: 4.8, gambar: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=400&h=400&fit=crop", link: "https://tokopedia.com/produk4" },
    { nama: "Produk 5", harga: "Rp 19.000", rating: 4.8, gambar: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=400&h=400&fit=crop", link: "https://tokopedia.com/produk5" },
    { nama: "Produk 6", harga: "Rp 19.000", rating: 4.8, gambar: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=400&h=400&fit=crop", link: "https://tokopedia.com/produk6" },
    { nama: "Produk 7", harga: "Rp 19.000", rating: 4.8, gambar: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=400&h=400&fit=crop", link: "https://tokopedia.com/produk7" },
    { nama: "Produk 8", harga: "Rp 19.000", rating: 4.8, gambar: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=400&h=400&fit=crop", link: "https://tokopedia.com/produk8" },
    { nama: "Produk 9", harga: "Rp 19.000", rating: 4.8, gambar: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=400&h=400&fit=crop", link: "https://tokopedia.com/produk9" },
    { nama: "Produk 10", harga: "Rp 19.000", rating: 4.8, gambar: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=400&h=400&fit=crop", link: "https://tokopedia.com/produk10" }
]);

// Gunakan 'reactive' untuk objek
// Ini adalah 'state' untuk posisi setiap slider
// BUKAN: var posisiSlider1 = 0; TAPI:
const sliderPositions = reactive({
    slider1: 0,
    slider2: 0,
    slider3: 0
});

// Template Refs - ini cara Vue untuk mengakses elemen DOM
const sliderWrapper1 = ref(null);
const sliderWrapper2 = ref(null);
const sliderWrapper3 = ref(null);

// Buat pemetaan agar mudah diakses di fungsi
const wrapperRefs = {
    slider1: sliderWrapper1,
    slider2: sliderWrapper2,
    slider3: sliderWrapper3,
};

// Fungsi bintang bisa tetap sama, tidak masalah
function buatBintang(rating) {
    let bintangHTML = '';
    const bintangPenuh = Math.floor(rating);
    
    for (let i = 0; i < bintangPenuh; i++) {
        bintangHTML += '<svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    
    if (rating % 1 !== 0) {
        bintangHTML += '<svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5"/></svg>';
    }
    
    return bintangHTML;
}

// BUKAN: function buatCardProduk() -> Ini digantikan oleh <template> dan v-for

// Fungsi geser kiri (dimodifikasi untuk 'state' Vue)
// BUKAN: slider.style.transform = ... TAPI: ubah data 'sliderPositions'
function geserKiri(sliderId) {
    const lebar = 220 + 10; // 230
    
    if (sliderPositions[sliderId] + lebar > 0) {
        sliderPositions[sliderId] = 0;
    } else {
        sliderPositions[sliderId] += lebar;
    }
}

// Fungsi geser kanan (dimodifikasi untuk 'state' dan 'refs' Vue)
function geserKanan(sliderId) {
    const wrapper = wrapperRefs[sliderId].value;
    if (!wrapper) return; 

    const lebar = 220 + 10; // 230
    const lebarContainer = wrapper.offsetWidth;
    const totalLebarSlider = semuaProduk.value.length * lebar - 10; 
    const maxGeser = -(totalLebarSlider - lebarContainer);

    if (sliderPositions[sliderId] - lebar < maxGeser) {
        sliderPositions[sliderId] = maxGeser;
    } else {
        sliderPositions[sliderId] -= lebar;
    }
}

// BUKAN: var grid = document.getElementById('grid1'); ...
// BUKAN: var slider1 = document.getElementById('slider1'); ...
// Ini semua sudah TIDAK DIPERLUKAN lagi karena sudah di-handle oleh v-for di template.

</script>

<style>
/* CSS Anda sudah benar, tidak perlu diubah */
.main-container {
         margin: 0;
         padding: 0;
         font-family: Arial, sans-serif;
         background-color: #f5f5f5;
         padding: 15px;
     }
/* ... sisa CSS Anda ... */
     .container {
         max-width: 1200px;
         margin: 0 auto;
     }

     h1 {
         font-size: 30px;
         font-weight: bold;
         margin-bottom: 20px;
         color: black;
     }

     .product-grid {
         display: grid;
         grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
         gap: 10px;
         margin-bottom: 30px;
         justify-items: start;
     }

     .product-card {
         background: white;
         border-radius: 8px;
         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
         overflow: hidden;
         text-decoration: none;
         color: black;
         display: block;
         max-width: 220px;
     }

     .product-card:hover {
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
     }

     .product-image {
         width: 100%;
         height: 220px;
         background-color: #ddd;
         overflow: hidden;
         position: relative;
     }

     .product-image img {
         width: 100%;
         height: 100%;
         object-fit: cover;
     }

     .product-card:hover .product-image img {
         transform: scale(1.05);
         transition: 0.3s;
     }

     .product-info {
         padding: 12px;
     }

     .product-name {
         font-size: 14px;
         color: #555;
         margin-bottom: 8px;
         height: 40px;
         overflow: hidden;
     }

     .product-price {
         font-size: 18px;
         font-weight: bold;
         color: black;
         margin-bottom: 8px;
     }

     .product-rating {
         display: flex;
         align-items: center;
         gap: 5px;
     }

     .rating-number {
         font-size: 14px;
         font-weight: bold;
         color: #555;
     }

     .stars {
         display: flex;
         gap: 2px;
     }

     .star {
         width: 16px;
         height: 16px;
         fill: #ffa500;
     }

     /* Slider */
     .slider-section {
         margin-bottom: 30px;
     }

     .slider-container {
         position: relative;
         padding: 0 50px;
     }

     .slider-wrapper {
         overflow: hidden;
     }

     .slider-items {
         display: flex;
         gap: 10px;
         transition: transform 0.3s;
     }

     .slider-item {
         min-width: 220px;
         max-width: 220px;
     }

     .slider-button {
         position: absolute;
         top: 35%;
         transform: translateY(-50%);
         background: white;
         border: none;
         width: 40px;
         height: 40px;
         border-radius: 50%;
         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
         cursor: pointer;
         z-index: 10;
     }

     .slider-button:hover {
         background: #f0f0f0;
     }

     .button-left {
         left: 5px;
     }

     .button-right {
         right: 5px;
     }

     .slider-button svg {
         width: 20px;
         height: 20px;
         fill: #333;
     }
</style>