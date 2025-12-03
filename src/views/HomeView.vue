<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

// Import komponen-komponen
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import HomePage from '../components/HomePage.vue'
import GaleryTestimoni from '../components/GaleryTestimoni.vue'
import Testimoni from '../components/Testimoni.vue'
import Tentang from '@/components/Tentang.vue'
import ProductSection from '@/components/ProductSection.vue'

const route = useRoute()

// Fungsi untuk melakukan scroll halus
const scrollToSection = () => {
  // Tunggu sebentar agar halaman benar-benar siap (100ms)
  setTimeout(() => {
    const hash = route.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        const headerOffset = 80 // Sesuaikan dengan tinggi Navbar Anda
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // Jika tidak ada hash (misal klik Home), scroll ke paling atas
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, 100) 
}

// 1. Jalankan saat halaman pertama kali dibuka
onMounted(() => {
  scrollToSection()
})

// 2. Jalankan setiap kali URL berubah (misal klik navbar saat sudah di Home)
watch(
  () => route.hash,
  () => {
    scrollToSection()
  }
)
</script>

<template>
  <Navbar />

  <div id="home">
    <HomePage />
  </div>

  <div id="tentang-kami">
    <Tentang />
  </div>

  <div id="produk">
    <ProductSection />
  </div>

  <div id="galeri">
    <GaleryTestimoni />
    <Testimoni />
  </div>

  <div id="hubungi-kami">
    <Footer />
  </div>
</template>

<style scoped>
</style>
