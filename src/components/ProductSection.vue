<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
        <div class="beberapa-produk-section">
    <div class="beberapa-produk-container">
      <h2 class="produk-title">Beberapa <span>produk kami!</span></h2>
      
      <div class="product-row product-row-reverse">
        <div class="product-text">
          <p class="product-description">Pengharum mobil ikonik dengan berbagai aroma segar yang tahan lama. Pilihan terbaik untuk menjaga kesegaran interior kendaraan Anda.</p>
        </div>
        <div class="product-image">
          <img src="../assets/Little-Trees1.png" alt="Little Trees" class="product-img">
        </div>
      </div>

      <div class="product-row">
        <div class="product-image">
          <img src="../assets/Microfiber2-Video.jpg" alt="Kain Lap Microfiber" class="product-img">
        </div>
        <div class="product-text">
          <p class="product-description">Kain lap premium dengan serat ultra halus yang aman untuk semua permukaan. Daya serap tinggi dan tidak meninggalkan goresan.</p>
        </div>
      </div>
</div>
</div>
</template>

<style>
.beberapa-produk-section {
  padding: 80px 40px;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  background-color: var(--primary-color, #c41e1e);
}

.beberapa-produk-container {
  max-width: 1200px;
  margin: 0 auto;
}

.produk-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.produk-title span {
  color: #ffffff;
  font-weight: 800;
}

.product-row {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;
  min-height: 400px;
}

.product-row-reverse {
  flex-direction: row-reverse;
}

.product-image {
  flex: 0 0 50%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  height: 450px;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.product-image:hover .product-img {
  transform: scale(1.05);
}

.product-text {
  flex: 1;
  color: #ffffff;
}

.product-description {
  font-size: 1.2rem;
  line-height: 1.9;
  color: #ffffff;
  text-align: justify;
  letter-spacing: 0.3px;
}

.produk-cta-section {
  text-align: center;
  margin-top: 80px;
  padding-top: 60px;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
}

.produk-cta-section h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 25px;
  margin-top: 0;
}

.cta-heading {
  font-size: 1.6rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-subheading {
  font-size: 1rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: 20px;
  font-style: italic;
}

.btn-lihat-produk {
  background-color: #ffffff;
  color: #c41e1e;
  border: none;
  padding: 16px 48px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-lihat-produk:hover {
  background-color: #000000;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-lihat-produk:active {
  transform: translateY(0);
}

</style>