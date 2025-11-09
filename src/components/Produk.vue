<template>
  <div class="main-container">
    <div class="container">
      <div class="hero">
            <div class="hero-isi">
                <div class="hero-kiri">
                    <p style="color: #666; margin-bottom: 10px;">Sajangju</p>
                    <h1>Produk Berkualitas dengan Harga Terbaik</h1>
                    <p>Temukan koleksi lengkap produk pilihan kami dengan kualitas terjamin. Dari elektronik hingga aksesoris, semua ada di sini dengan harga yang kompetitif.</p>
                    <button class="tombol-belanja">Belanja Sekarang</button>
                </div>
                <div class="hero-kanan">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop" alt="Produk">
                </div>
            </div>
        </div>
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
              <div v-for="produk in produkPilihan" :key="produk.link" class="slider-item">
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
              <div v-for="produk in produkTerlaris" :key="produk.link" class="slider-item">
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
              <div v-for="produk in produkRekomendasi" :key="produk.link" class="slider-item">
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
import { ref, reactive } from 'vue';
import hooddomperImage from '../assets/Hooddomper.png';

// ========================================
// DATA PRODUK - SETIAP SECTION PUNYA DATA SENDIRI
// ========================================

// 1. SEMUA PRODUK YANG KAMI JUAL
const semuaProduk = ref([
    {
        nama: "Kopros",
        harga: "Rp 19.000",
        rating: 4.8,
        gambar: hooddomperImage,
        link: "https://tokopedia.com/produk1"
    },
    {
        nama: "Kopros",
        harga: "Rp 19.000",
        rating: 4.8,
        gambar: hooddomperImage,
        link: "https://tokopedia.com/produk1"
    },{
        nama: "Kopros",
        harga: "Rp 19.000",
        rating: 4.8,
        gambar: hooddomperImage,
        link: "https://tokopedia.com/produk1"
    },{
        nama: "Kopros",
        harga: "Rp 19.000",
        rating: 4.8,
        gambar: hooddomperImage,
        link: "https://tokopedia.com/produk1"
    },{
        nama: "Kopros",
        harga: "Rp 19.000",
        rating: 4.8,
        gambar: hooddomperImage,
        link: "https://tokopedia.com/produk1"
    },{
        nama: "Kopros",
        harga: "Rp 19.000",
        rating: 4.8,
        gambar: hooddomperImage,
        link: "https://tokopedia.com/produk1"
    },{
        nama: "Kopros",
        harga: "Rp 19.000",
        rating: 4.8,
        gambar: hooddomperImage,
        link: "https://tokopedia.com/produk1"
    },
]);

// 2. PRODUK PILIHAN (Data terpisah, bisa diubah sendiri)
const produkPilihan = ref([
    {
        nama: "Headphone Wireless Premium",
        harga: "Rp 299.000",
        rating: 4.9,
        gambar: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/headphone1"
    },
    {
        nama: "Smart Watch Elite",
        harga: "Rp 1.250.000",
        rating: 4.7,
        gambar: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/smartwatch1"
    },
    {
        nama: "Keyboard Mechanical RGB",
        harga: "Rp 450.000",
        rating: 4.8,
        gambar: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/keyboard1"
    },
    { nama: "Mouse Gaming Pro", harga: "Rp 350.000", rating: 4.6, gambar: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop", link: "https://tokopedia.com/mouse1" },
    { nama: "Speaker Bluetooth", harga: "Rp 500.000", rating: 4.8, gambar: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", link: "https://tokopedia.com/speaker1" }
]);

// 3. PRODUK TERLARIS (Data terpisah, bisa diubah sendiri)
const produkTerlaris = ref([
    {
        nama: "Hoodie Premium Cotton",
        harga: "Rp 175.000",
        rating: 4.9,
        gambar: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/hoodie1"
    },
    {
        nama: "Sepatu Sneakers Original",
        harga: "Rp 850.000",
        rating: 4.8,
        gambar: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/sepatu1"
    },
    {
        nama: "Tas Ransel Urban",
        harga: "Rp 320.000",
        rating: 4.7,
        gambar: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/tas1"
    },
    { nama: "Kacamata Sunglasses", harga: "Rp 250.000", rating: 4.6, gambar: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop", link: "https://tokopedia.com/kacamata1" },
    { nama: "Jam Tangan Sport", harga: "Rp 425.000", rating: 4.8, gambar: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop", link: "https://tokopedia.com/jam1" }
]);

// 4. REKOMENDASI UNTUK ANDA (Data terpisah, bisa diubah sendiri)
const produkRekomendasi = ref([
    {
        nama: "Power Bank 20000mAh",
        harga: "Rp 199.000",
        rating: 4.7,
        gambar: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/powerbank1"
    },
    {
        nama: "Tripod Smartphone",
        harga: "Rp 125.000",
        rating: 4.5,
        gambar: "https://images.unsplash.com/photo-1606988543206-e109707a1fdb?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/tripod1"
    },
    {
        nama: "Charger Fast Charging",
        harga: "Rp 89.000",
        rating: 4.8,
        gambar: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/charger1"
    },
     {
        nama: "Charger Fast Charging",
        harga: "Rp 89.000",
        rating: 4.8,
        gambar: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/charger1"
    },
     {
        nama: "Charger Fast Charging",
        harga: "Rp 89.000",
        rating: 4.8,
        gambar: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/charger1"
    },
     {
        nama: "Charger Fast Charging",
        harga: "Rp 89.000",
        rating: 4.8,
        gambar: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop",
        link: "https://tokopedia.com/charger1"
    },
    { nama: "Cable USB-C Premium", harga: "Rp 45.000", rating: 4.6, gambar: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop", link: "https://tokopedia.com/cable1" },
    { nama: "Screen Protector HD", harga: "Rp 35.000", rating: 4.7, gambar: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop", link: "https://tokopedia.com/screen1" }
]);

// State untuk posisi slider
const sliderPositions = reactive({
    slider1: 0,
    slider2: 0,
    slider3: 0
});

// Template Refs
const sliderWrapper1 = ref(null);
const sliderWrapper2 = ref(null);
const sliderWrapper3 = ref(null);

const wrapperRefs = {
    slider1: sliderWrapper1,
    slider2: sliderWrapper2,
    slider3: sliderWrapper3,
};

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

function geserKiri(sliderId) {
    const wrapper = wrapperRefs[sliderId].value;
    if (!wrapper) return;
    
    const lebarCard = 230;
    const lebarContainer = wrapper.offsetWidth;
    const jumlahCardTerlihat = Math.floor(lebarContainer / lebarCard);
    const geserJarak = jumlahCardTerlihat * lebarCard;
    
    let posisiBaru = sliderPositions[sliderId] + geserJarak;
    
    if (posisiBaru > 0) {
        posisiBaru = 0;
    }
    
    sliderPositions[sliderId] = posisiBaru;
}

function geserKanan(sliderId) {
    const wrapper = wrapperRefs[sliderId].value;
    if (!wrapper) return; 

    const lebarCard = 230;
    const lebarContainer = wrapper.offsetWidth;
    const jumlahCardTerlihat = Math.floor(lebarContainer / lebarCard);
    const geserJarak = jumlahCardTerlihat * lebarCard;
    
    // Pilih data produk sesuai slider yang diklik
    let jumlahProduk;
    if (sliderId === 'slider1') jumlahProduk = produkPilihan.value.length;
    else if (sliderId === 'slider2') jumlahProduk = produkTerlaris.value.length;
    else if (sliderId === 'slider3') jumlahProduk = produkRekomendasi.value.length;
    
    const totalLebarSlider = jumlahProduk * lebarCard;
    const maxGeser = -(totalLebarSlider - lebarContainer);
    
    let posisiBaru = sliderPositions[sliderId] - geserJarak;
    
    if (posisiBaru < maxGeser) {
        posisiBaru = maxGeser;
    }
    
    sliderPositions[sliderId] = posisiBaru;
}

</script>

<style>
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
}

.hero-isi {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 40px;
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
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
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