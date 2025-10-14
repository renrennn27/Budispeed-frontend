<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import HomePage from '../components/HomePage.vue'
</script>

<template>
<Navbar />

  <main>
    <section class="hero">
      <h1>BUDI <span>SPEED</span></h1>
      <h2>Bengkel Legendaris, Kualitas Josjis.</h2>
      <p>Sejak 1998, Budispeed menjadi andalan pecinta otomotif di Surabaya. 
        Temukan aksesoris dan komponen terbaik untuk mobil Anda, dengan pelayanan jujur yang viral di media sosial.</p>
      <p>Tertarik? Pesan Sekarang!</p>
      <div class="hero-buttons">
        <button class="btn-primary">Pesan Sekarang</button>
        <button class="btn-secondary">Lihat Produk</button>
      </div>
    </section>
    
    <h2 class="h2-gallery">Galeri Hasil <span class="tulisan-merah">Kerja & Testimoni</span></h2>
    <section class="gallery-container">
      <div class="timeline">
        <div class="timeline-item left">
          <div class="timeline-content">
            <img src="../assets/bodykit.png" alt="bodykit">
            <P>Pemasangan Body Kit Venturer oleh <span class="tulisan-merah">Bos BudiSpeed</span></P>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <img src="../assets/Stoplamp.png" alt="stoplamp">
            <P>Stoplamp V2+ dengan <span class="tulisan-merah">Welcome Light Smoke</span></P>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <img src="../assets/bekleed.png" alt="bekleed">
            <P>Restorasi Bekleed Jok Fortuner VRZ dan <span class="tulisan-merah">Tambah Full Spons</span></P>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <img src="../assets/Littletrees.png" alt="littletrees">
            <P>Pemasangan Little Trees yang Benar <span class="tulisan-merah">Varian Gold</span></P>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <img src="../assets/Microfiber.png" alt="microfiber">
            <P>Edgeless Microfiber Satu Sisi Buat Lap Satu Sisi Lagi Buat Moles <span class="tulisan-merah">Anti Baret</span></P>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <img src="../assets/Hooddomper.png" alt="hooddomper">
            <P>Hood Damper untuk innova Reborn dari<span class="tulisan-merah"> Sustec Warna Hitam</span></P>
          </div>
        </div>
      </div>

    </section>
  </main>

  <Footer />
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 80px 20px;
}
.hero h1 {
  font-size: 3rem;
  font-style: italic;
  font-weight: bold;
  text-shadow: var(--text-shadow);
}
.hero h1 span {
  color: var(--primary-color);
  font-weight: bold;
}
.hero h2 {
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  text-shadow: var(--text-shadow);
}
.hero p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 30px auto;
}
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.btn-primary {
  background-color: var(--primary-color);
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: var(--text-shadow);
  box-shadow: var(--shadow);
  cursor: pointer;
}
.btn-secondary {
  background-color: transparent;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: var(--text-shadow);
  box-shadow: var(--shadow);
  cursor: pointer;
}
.btn-primary:hover {
  background-color: transparent;
}
.btn-secondary:hover {
  background-color: var(--primary-color);
  color: white;
}

.gallery-container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

.h2-gallery {
  text-align: left;
  margin-left: 50px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.tulisan-merah {
  color: #d9534f;
  font-weight: bold
}

.timeline {
  position: relative;
  margin: 0 auto;
  max-width: 800px;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 3px;
  background-color: #d9534f;
  bottom: 15px;
  transform: translateX(-50%);
  top: 15px;
  margin-left: -1.5px;
  left: 50%; 
}

.timeline-item {
  padding: 10px 0;
  position: relative;
  width: 50%;
  box-sizing: border-box;
}

.timeline-item::after {
content: '';
position: absolute;
width: 20px;
height: 20px;
right: -10px;
background-color: #d9534f;
top: 20px;
border-radius: 50%;
z-index: 1;
}

.timeline-item.left {
  left: 0;
  padding-right: 30px;
  text-align: right;
}

.timeline-item.left::after {
  right: -10px;
}

.timeline-item.right {
  left: 50%;
  padding-left: 30px;
}

.timeline-item.right::after {
  left: -10px;
}

.timeline-content {
  padding: 15px;
  position: relative;
  display: inline-block;
  border-radius: 6px;
  background-color: white;
  text-align: left;

}

.timeline-content img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  display: block;
  border-radius: 8px;
  
}

.timeline-content p {
    margin: 0;
    font-size: 15px;
    line-height: 1.4;
    font-weight: bold;
    color: #333;
}


</style>
