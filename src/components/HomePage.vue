<script setup>
import { Icon } from '@iconify/vue'
</script>


<template>
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
      <div class="social-icons">
        <a href="#" target="_blank">
          <Icon icon="mdi:whatsapp" width="30" />
        </a>
        <a href="https://www.instagram.com/budispeed.id" target="_blank">
          <Icon icon="mdi:instagram" width="30" />
        </a>
        <a href="https://www.tiktok.com/@budispeed.id?_t=ZS-90G797x8ifa&_r=1" target="_blank">
          <Icon icon="simple-icons:tiktok" width="30" />
        </a>
        <a href="https://youtube.com/@danielbudianto28?si=fuCwg51jAwG2oZyq" target="_blank">
          <Icon icon="mdi:youtube" width="30" />
        </a>
      </div>
    </section>
  </main>
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
}
.hero h1 span {
  color: var(--primary-color);
  font-weight: bold;
}
.hero h2 {
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
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
  color: white;
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
  background-color: #cc0000;
  text-shadow: var(--text-shadow);
}
.btn-secondary:hover {
  background-color: #f0ecec;
  text-emphasis: var(--text-shadow);
}
.social-icons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.social-icons a {
  color: white;
  transition: color 0.3s;
  background-color: var(--primary-color);
  border-radius: 50%;
  padding: 8px;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  box-shadow: var(--shadow);
}
.social-icons a:hover {
  background-color: transparent;
  color: black;
  border: 1px solid black;
} 
</style>
