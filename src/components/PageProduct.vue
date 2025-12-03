<script setup>
import { ref, reactive, onMounted } from 'vue';
import { RouterLink } from 'vue-router'; // Kita akan gunakan ini
import apiClient from '../services/api'; // Menggunakan apiClient kita yang sudah benar
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

// --- STATE YANG SAMA DARI KODE ---
// DATA PRODUK
const semuaProduk = ref([]);
const produkPilihan = ref([]);
const produkTerlaris = ref([]);
const produkRekomendasi = ref([]);
const loading = ref(true);

// SLIDER LOGIC (TIDAK DIUBAH)
const sliderPositions = reactive({
  slider1: 0,
  slider2: 0,
  slider3: 0
});
const sliderWrapper1 = ref(null);
const sliderWrapper2 = ref(null);
const sliderWrapper3 = ref(null);
const wrapperRefs = {
  slider1: sliderWrapper1,
  slider2: sliderWrapper2,
  slider3: sliderWrapper3,
};
// -----------------------------------------

// --- LOGIKA BARU UNTUK MENGAMBIL DATA ---
onMounted(async () => {
  loading.value = true;
  console.log('🚀 Memuat produk dari API Laravel...');
  
  try {
    // 1. Panggil API kita SATU KALI
    const response = await apiClient.get('/products');
    const allData = response.data;
    console.log('✅ Data dari API berhasil diambil:', allData.length, 'produk');

    // 2. Isi semua array dari satu sumber data
    semuaProduk.value = allData;
    
    // 3. "Mock" data slider dari data utama.
    // (Nanti, jika Anda tambahkan kategori di backend, Anda bisa ganti ini)
    produkPilihan.value = allData.slice(0, 10); // Ambil 10 produk pertama
    produkTerlaris.value = allData.slice(10, 20); // Ambil 10 produk berikutnya
    produkRekomendasi.value = allData.slice(20, 30); // Ambil 10 produk setelahnya

  } catch (error) {
    console.error('❌ Error memuat produk:', error);
  } finally {
    loading.value = false;
  }
});

// --- FUNGSI HELPER YANG DISESUAIKAN ---

// Fungsi ini disederhanakan. API kita sudah memberi URL lengkap.
// Fungsi helper
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

// Fungsi format harga
function formatCurrency(value) {
  if (!value) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value);
}

// Fungsi Bintang Anda (TIDAK DIUBAH)
function buatBintang(rating) {
  let bintangHTML = '';
  const bintangPenuh = Math.floor(rating);
  
  for (let i = 0; i < bintangPenuh; i++) {
    bintangHTML += '<svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  }
  
  // Ini menangani setengah bintang (jika rating 4.5)
  if (rating % 1 !== 0 && (rating % 1) >= 0.5) {
    // Menambahkan bintang setengah (atau warna lebih redup)
    bintangHTML += '<svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5"/></svg>';
  }
  
  return bintangHTML;
}

// Fungsi Slider Anda (TIDAK DIUBAH)
function geserKiri(sliderId) {
  const wrapper = wrapperRefs[sliderId].value;
  if (!wrapper) return;
  const lebarCard = 230; // 220 card + 10 gap
  const lebarContainer = wrapper.offsetWidth;
  const jumlahCardTerlihat = Math.floor(lebarContainer / lebarCard);
  const geserJarak = jumlahCardTerlihat * lebarCard;
  let posisiBaru = sliderPositions[sliderId] + geserJarak;
  if (posisiBaru > 0) posisiBaru = 0;
  sliderPositions[sliderId] = posisiBaru;
}

// Fungsi Slider Anda (TIDAK DIUBAH)
function geserKanan(sliderId) {
  const wrapper = wrapperRefs[sliderId].value;
  if (!wrapper) return; 
  const lebarCard = 230; // 220 card + 10 gap
  const lebarContainer = wrapper.offsetWidth;
  const jumlahCardTerlihat = Math.floor(lebarContainer / lebarCard);
  const geserJarak = jumlahCardTerlihat * lebarCard;
  
  let jumlahProduk;
  if (sliderId === 'slider1') jumlahProduk = produkPilihan.value.length;
  else if (sliderId === 'slider2') jumlahProduk = produkTerlaris.value.length;
  else if (sliderId === 'slider3') jumlahProduk = produkRekomendasi.value.length;
  
  const totalLebarSlider = jumlahProduk * lebarCard;
  const maxGeser = -(totalLebarSlider - lebarContainer + lebarContainer % lebarCard);
  
  let posisiBaru = sliderPositions[sliderId] - geserJarak;
  if (posisiBaru < maxGeser) posisiBaru = maxGeser;
  sliderPositions[sliderId] = posisiBaru;
}
</script>


<template>
  <div class="main-container">
    <Navbar />
    <div class="container">
      
      <div class="hero">
        <div class="hero-isi">
          <div class="hero-kiri" data-aos="fade-up">
            <p style="color: #666; margin-bottom: 40px;">BudiSpeed</p>
            <h1>Produk Berkualitas dengan Harga Terbaik</h1>
            <p>Temukan koleksi lengkap produk pilihan kami dengan kualitas terjamin. Dari elektronik hingga aksesoris, semua ada di sini dengan harga yang kompetitif.</p>
            <a href="https://shopee.co.id/budispeed.id" target="_blank" class="tombol-belanja">Belanja Sekarang</a>
          </div>
          <div class="hero-kanan" data-aos="fade-up" data-aos-delay="200">
            <img src="../assets/Logotempat.png" alt="Produk"> 
          </div>
        </div>
      </div>

      <div v-if="loading" class="loading-section">
        <p>Memuat produk...</p>
      </div>

      <div v-else>
        <h1 data-aos="fade-up">Semua Produk yang Kami Jual</h1>
        
        <div v-if="semuaProduk.length === 0" class="empty-state">
          <p>Belum ada produk.</p>
        </div>
        
        <div v-else class="product-grid">
          <component 
            v-for="(product, index) in semuaProduk" 
            :key="product.id" 
            :is="product.marketplace_url ? 'a' : RouterLink"
            :href="product.marketplace_url"
            :to="product.marketplace_url ? null : '/detailproduct/' + product.id"
            :target="product.marketplace_url ? '_blank' : null"
            class="product-card" 
            
            data-aos="fade-up"
            :data-aos-delay="(index % 5) * 100"
          >
            <div class="product-image">
              <img :src="getImageUrl(product.image_url)" :alt="product.name">
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-price">{{ formatCurrency(product.price) }}</p>
              <div class="product-rating">
                <span class="rating-number">{{ product.rating || 'N/A' }}</span>
                <div class="stars" v-html="buatBintang(product.rating)"></div>
              </div>
            </div>
          </component>
        </div>
      </div>

      <div class="slider-section" v-if="produkPilihan.length > 0" data-aos="fade-up">
        <h1>Produk Pilihan</h1>
        <div class="slider-container">
          <button class="slider-button button-left" @click="geserKiri('slider1')">
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          
          <div class="slider-wrapper" ref="sliderWrapper1">
            <div class="slider-items" :style="{ transform: `translateX(${sliderPositions.slider1}px)` }">
              <div v-for="product in produkPilihan" :key="product.id" class="slider-item">
                <component 
                  :is="product.marketplace_url ? 'a' : RouterLink"
                  :href="product.marketplace_url"
                  :to="product.marketplace_url ? null : '/detailproduct/' + product.id"
                  :target="product.marketplace_url ? '_blank' : null"
                  class="product-card" 
                >
                  <div class="product-image">
                    <img :src="getImageUrl(product.image_url)" :alt="product.name">
                  </div>
                  <div class="product-info">
                    <h3 class="product-name">{{ product.name }}</h3>
                    <p class="product-price">{{ formatCurrency(product.price) }}</p>
                    <div class="product-rating">
                      <span class="rating-number">{{ product.rating || 'N/A' }}</span>
                      <div class="stars" v-html="buatBintang(product.rating)"></div>
                    </div>
                  </div>
                </component>
              </div>
            </div>
          </div>
          
          <button class="slider-button button-right" @click="geserKanan('slider1')">
            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
        </div>
      </div>

      <div class="slider-section" v-if="produkTerlaris.length > 0" data-aos="fade-up">
        <h1>Produk Terlaris</h1>
        <div class="slider-container">
          <button class="slider-button button-left" @click="geserKiri('slider2')">
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <div class="slider-wrapper" ref="sliderWrapper2">
            <div class="slider-items" :style="{ transform: `translateX(${sliderPositions.slider2}px)` }">
              <div v-for="product in produkTerlaris" :key="product.id" class="slider-item">
                <component 
                  :is="product.marketplace_url ? 'a' : RouterLink"
                  :href="product.marketplace_url"
                  :to="product.marketplace_url ? null : '/detailproduct/' + product.id"
                  :target="product.marketplace_url ? '_blank' : null"
                  class="product-card" 
                >
                  <div class="product-image">
                    <img :src="getImageUrl(product.image_url)" :alt="product.name">
                  </div>
                  <div class="product-info">
                    <h3 class="product-name">{{ product.name }}</h3>
                    <p class="product-price">{{ formatCurrency(product.price) }}</p>
                    <div class="product-rating">
                      <span class="rating-number">{{ product.rating || 'N/A' }}</span>
                      <div class="stars" v-html="buatBintang(product.rating)"></div>
                    </div>
                  </div>
                </component>
              </div>
            </div>
          </div>
          <button class="slider-button button-right" @click="geserKanan('slider2')">
            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
        </div>
      </div>

      <div class="slider-section" v-if="produkRekomendasi.length > 0" data-aos="fade-up">
        <h1>Rekomendasi untuk Anda</h1>
        <div class="slider-container">
          <button class="slider-button button-left" @click="geserKiri('slider3')">
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <div class="slider-wrapper" ref="sliderWrapper3">
            <div class="slider-items" :style="{ transform: `translateX(${sliderPositions.slider3}px)` }">
              <div v-for="product in produkRekomendasi" :key="product.id" class="slider-item">
                <component 
                  :is="product.marketplace_url ? 'a' : RouterLink"
                  :href="product.marketplace_url"
                  :to="product.marketplace_url ? null : '/detailproduct/' + product.id"
                  :target="product.marketplace_url ? '_blank' : null"
                  class="product-card" 
                >
                  <div class="product-image">
                    <img :src="getImageUrl(product.image_url)" :alt="product.name">
                  </div>
                  <div class="product-info">
                    <h3 class="product-name">{{ product.name }}</h3>
                    <p class="product-price">{{ formatCurrency(product.price) }}</p>
                    <div class="product-rating">
                      <span class="rating-number">{{ product.rating || 'N/A' }}</span>
                      <div class="stars" v-html="buatBintang(product.rating)"></div>
                    </div>
                  </div>
                </component>
              </div>
            </div>
          </div>
          <button class="slider-button button-right" @click="geserKanan('slider3')">
            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>


<style>
/* STYLE ANDA SAMA SEKALI TIDAK SAYA UBAH.
  Ini akan berfungsi seperti sebelumnya.
*/
.main-container {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 15px;
}

.hero {
  background-color: #f9fafb;
  padding: 60px 20px;
  border-radius: 12px;
  margin-bottom: 40px;
}

.hero-isi {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  align-items: center;
}

.hero-kiri {
  flex: 1;
}

.hero-kiri h1 {
  font-size: 48px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
}

.hero-kiri p {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.tombol-belanja {
  background-color: black;
  color: white;
  padding: 15px 40px;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.tombol-belanja:hover {
  background-color: #333;
}

.hero-kanan {
  flex: 1;
}

.hero-kanan img {
  width: 100%;
  border-radius: 16px;
}

.loading-section {
  text-align: center;
  padding: 60px 20px;
  font-size: 18px;
  color: #666;
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: #999;
  font-size: 16px;
}

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
  transition: 0.3s;
}

.product-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
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
  transition: 0.3s;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
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
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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

.slider-section {
  margin-bottom: 40px;
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
  transition: 0.3s;
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