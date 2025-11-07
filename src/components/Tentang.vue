<script setup>
// Gabungan dari kedua versi
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

// Impor gambar (seperti versi pertama)
import Littletrees from '../assets/Little-Trees1.png';
import SteerNapa from '../assets/SteerNapa.png';
import Zenix from '../assets/Bakleed2-Hitam.jpg'
import MicroFiber from '../assets/Microfiber2-Video.jpg'
import Stoplamp from '../assets/Stoplamp-New.jpg'
import Sustec from '../assets/Sustec.jpg'

// Logika slider dari versi pertama (HEAD) dipertahankan
const slides = ref([
  { id: 1, image: Littletrees, title: 'Littletrees', link: 'https://vt.tiktok.com/ZSymwtwEw/' },
  { id: 2, image: SteerNapa, title: 'Bekleed Steer Nappa', link: 'https://vt.tiktok.com/ZSymTctSg/' },
  { id: 3, image: Zenix, title: 'Zenix Dilapisi Semi', link: 'https://vt.tiktok.com/ZSymwghJF/' },
  { id: 5, image: MicroFiber, title: 'Kain Lap Microfiber', link: 'https://vt.tiktok.com/ZSymEfefD/' },
  { id: 6, image: Stoplamp, title: 'Pemasangan Stop Lamp', link: 'https://vt.tiktok.com/ZSyudvD4H/' },
  { id: 7, image: Sustec, title: 'Sustec Hood Damper', link: 'https://vt.tiktok.com/ZSyud3fNg/' },
]);

const currentIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const offset = ref(0);
const autoplayInterval = ref(null);
const transitionEnabled = ref(true);

const totalSlides = computed(() => slides.value.length);
const multiplier = 5;
const centerOffset = Math.floor(multiplier / 2) * slides.value.length;

const extendedSlides = computed(() => {
  const result = [];
  for (let i = 0; i < multiplier; i++) {
    result.push(...slides.value);
  }
  return result;
});

const normalizedIndex = computed(() => {
  return ((currentIndex.value % totalSlides.value) + totalSlides.value) % totalSlides.value;
});

currentIndex.value = centerOffset;

const getSlideStyle = (index) => {
  const diff = index - currentIndex.value;
  const absDiff = Math.abs(diff);

  if (absDiff > 2) {
    return { display: 'none' };
  }

  const translateX = diff * 180 + offset.value;
  let scale = 1 - (absDiff * 0.2);
  scale = Math.max(0.7, Math.min(1, scale));
  let opacity = 1 - (absDiff * 0.25);
  opacity = Math.max(0.5, Math.min(1, opacity));
  const zIndex = 100 - absDiff * 10;
  const rotateY = diff * -15;

  return {
    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
    opacity: opacity,
    zIndex: zIndex,
    transition: transitionEnabled.value ? 'all 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)' : 'none',
    display: 'block'
  };
};

const nextSlide = () => { if (!isDragging.value) currentIndex.value++; };
const prevSlide = () => { if (!isDragging.value) currentIndex.value--; };

watch(currentIndex, () => {
  if (currentIndex.value >= totalSlides.value * (multiplier - 1)) {
    setTimeout(() => {
      transitionEnabled.value = false;
      currentIndex.value = centerOffset + totalSlides.value;
      setTimeout(() => {
        transitionEnabled.value = true;
      }, 50);
    }, 600);
  }
  if (currentIndex.value < totalSlides.value) {
     setTimeout(() => {
      transitionEnabled.value = false;
      currentIndex.value = centerOffset - totalSlides.value;
      setTimeout(() => {
        transitionEnabled.value = true;
      }, 50);
    }, 600);
  }
});

const handleSlideClick = (index) => {
  const diff = index - currentIndex.value;
  if (diff === 0) {
    const targetSlide = slides.value[normalizedIndex.value];
    if (targetSlide && targetSlide.link && targetSlide.link !== '#') {
      window.open(targetSlide.link, '_blank');
    }
  } else {
    currentIndex.value = index;
  }
};

const handleDragStart = (e) => {
  isDragging.value = true;
  transitionEnabled.value = false;
  startX.value = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
  stopAutoplay();
};

const handleDragMove = (e) => {
  if (!isDragging.value) return;
  const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
  const diff = currentX - startX.value;
  offset.value = diff;
};

const handleDragEnd = () => {
  if (!isDragging.value) return;
  isDragging.value = false;
  transitionEnabled.value = true;
  if (Math.abs(offset.value) > 80) {
    if (offset.value > 0) prevSlide();
    else nextSlide();
  }
  offset.value = 0;
  startAutoplay();
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
};

const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval.value = setInterval(() => {
    nextSlide();
  }, 3000);
};

onMounted(() => { startAutoplay(); });
onUnmounted(() => { stopAutoplay(); });
</script>

<template>
  <div class="main-container">
    <div class="container">
      
      <div class="coverflow-section">
        <div class="coverflow-container">
          <div class="coverflow-wrapper" @mousedown="handleDragStart" @mousemove="handleDragMove" @mouseup="handleDragEnd" @mouseleave="handleDragEnd" @touchstart="handleDragStart" @touchmove="handleDragMove" @touchend="handleDragEnd">
            <div class="coverflow-track">
              <div v-for="(slide, index) in extendedSlides" :key="`${slide.id}-${index}`" class="coverflow-slide" :style="getSlideStyle(index)" @click="handleSlideClick(index)">
                <img :src="slide.image" :alt="slide.title">
                <div class="slide-overlay">
                  <h3>{{ slide.title }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="header">
        <h1>TENTANG <span>KAMI</span></h1>
      </div>

      <div class="card">
        <div class="content-wrapper">
          <div class="image-container">
            <img src="../assets/Mobil.png" alt="Budi Speed Car">
          </div>
          <div class="text-container">
            <h2>SEJARAH <span>KAMI</span></h2>
            <p>Perjalanan Budispeed dimulai sejak tahun 1998, dirintis oleh ayah dari pemilik saat ini melalui sebuah bengkel rumahan bernama Budi Jaya. Berkat keahliannya dalam memperbaiki speedometer mobil, lahirlah julukan "Budi Speedo" yang kemudian dikenal luas sebagai Budispeed.</p>
          </div>
        </div>
      </div>

      <div class="section-siapa-kami">
        <div class="siapa-kami-container">
          <div class="content-wrapper-second">
            <div class="text-container-second">
              <h2><span>Siapa Kami</span> Saat Ini</h2>
              <p>Kini, Budispeed adalah pusat aksesori dan komponen mobil di Surabaya yang menyediakan beragam kebutuhan kendaraan. Kami dikenal luas melalui TikTok (@budispeed.id) berkat gaya promosi kami yang jujur, ceplas-ceplos, dan menghibur.</p>
              <p class="question">Penasaran? kunjungi sosial media kami!</p>
              <button class="btn-visit">Kunjungi sekarang</button>
            </div>
            <div class="image-container-second">
              <img src="../assets/Logotempat.png" alt="Logo">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="Kenapa-Memilih-bduispeed-section">
      <div class="Kenapa-Memilih-bduispeed-container">
        <h2 class="title">
          <span class="title-black">Kenapa Memilih </span>
          <span class="title-red">Budispeed?</span>
        </h2>
        <p class="subtitle">
          Kami memiliki keunggulan yang terpercaya untuk para pelanggan
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="icon-wrapper">
              <img src="../assets/logokmb3.png" alt="Pengalaman Terpercaya">
            </div>
            <h3 class="feature-title">Pengalaman Terpercaya</h3>
            <p class="feature-description">Berdiri lebih dari dua dekade sejak 1998, kami memiliki pengalaman untuk memberikan produk dan layanan terbaik.</p>
          </div>
          <div class="feature-card">
            <div class="icon-wrapper">
              <img src="../assets/logokmb2.png" alt="Kualitas Terjamin">
            </div>
            <h3 class="feature-title">Kualitas Terjamin</h3>
            <p class="feature-description">Kami menyediakan beragam aksesoris dan produk perawatan mobil pilihan untuk meningkatkan kenyamanan dan tampilan kendaraan Anda.</p>
          </div>
          <div class="feature-card">
            <div class="icon-wrapper">
              <img src="../assets/logokmb1.png" alt="Viral & Otentik">
            </div>
            <h3 class="feature-title">Viral & Otentik</h3>
            <p class="feature-description">Disukai ribuan audiens, gaya kami yang jujur dan apa adanya adalah jaminan pelayanan yang transparan dan anti baper.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Semua style dari kedua versi digabungkan */
.main-container {
  background-color: var(--primary-color, #c41e1e);
  padding: 60px 0 0 0;
  border-radius: 60px 0px 0px 60px;
  margin-top: 300px;
  max-width: 1200px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.header {
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 40px;
}
.header h1 {
  font-size: 24px;
  font-weight: bold;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-style: italic;
}
.header h1 span {
  color: #ffffff;
  font-weight: bold;
  font-style: italic;
}
.card {
  background-color: #ffffff;
  border-radius: 0 10px 10px 0;
  padding: 40px 50px 40px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 85%;
  margin-bottom: 60px;
}
.content-wrapper {
  display: flex;
  align-items: center;
  gap: 40px;
  min-height: 300px;
}
.image-container {
  flex: 0 0 35%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: -78px;
}
.image-container img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
}
.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
}
.text-container h2 {
  font-size: 24px;
  font-weight: bold;
  color: #1a1a1a;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-style: italic;
}
.text-container h2 span {
  color: #c41e1e;
  font-weight: bold;
  font-style: italic;
}
.text-container p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  text-align: right;
}
.coverflow-section {
  padding: 0 40px 80px 40px;
  overflow: hidden;
  margin-top: -360px;
}
.coverflow-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.coverflow-wrapper {
  width: 100%;
  height: 500px;
  position: relative;
  perspective: 1200px;
  overflow: hidden;
  cursor: grab;
  user-select: none;
}
.coverflow-wrapper:active {
  cursor: grabbing;
}
.coverflow-track {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  pointer-events: none;
  align-items: center;
  justify-content: center;
}
.coverflow-slide {
  position: absolute;
  pointer-events: auto;
  width: 280px;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transform-style: preserve-3d;
}
.coverflow-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
.coverflow-slide:hover .slide-overlay {
  transform: translateY(0);
}
.slide-overlay h3 {
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}
.section-siapa-kami { 
  padding: 50px 40px; 
}
.siapa-kami-container { 
  max-width: 1200px; 
  margin: 0 auto; 
}
.content-wrapper-second { 
  display: flex; 
  align-items: flex-start; 
  gap: 50px; 
}
.text-container-second { 
  flex: 1; color: #ffffff; 
  font-size: 24px; 
  font-weight: bold; 
  font-style: italic; 
}
.text-container-second h2 { 
  font-size: 24px; 
  font-weight: bold; 
  color: black; 
  margin-bottom: 25px; 
  margin-top: 80px; 
  font-style: italic; 
}
.text-container-second h2 span { 
  font-style: italic; 
  font-weight: bold; 
  color: #ffffff; 
  font-size: 24px; 
}
.text-container-second p { 
  font-size: 1.1rem; 
  line-height: 1.8; 
  color: #ffffff; 
  margin-bottom: 15px; 
}
.text-container-second .question { 
  margin-top: 25px; 
  margin-bottom: 20px; 
}
.btn-visit { 
  background-color: transparent; 
  color: #ffffff; 
  border: 2px solid #ffffff; 
  padding: 12px 30px; 
  border-radius: 25px; 
  font-size: 14px; 
  cursor: pointer; 
  font-weight: bold; 
  transition: all 0.3s ease; 
  text-transform: none; 
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}
.btn-visit:hover { 
  background-color: #ffffff; 
  color: #c41e1e; 
}
.image-container-second { 
  flex: 0 0 35%; 
  margin-top: 80px; 
}
.image-container-second img { 
  width: 100%; 
  height: auto; 
  border-radius: 10px; 
}

/* Style untuk Section "Kenapa Memilih Budispeed" dari versi kedua */
.Kenapa-Memilih-bduispeed-section {
  background-color: #ffffff;
  padding: 64px 40px;
  border-radius: 0 0 60px 60px; 
}
.Kenapa-Memilih-bduispeed-container {
  max-width: 1200px;
  margin: 0 auto;
}
.title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 16px;
  line-height: 1.2;
}
.title-black {
  color: #000000;
  font-weight: 800;
}
.title-red {
  color: #dc2626;
  font-weight: 800;
}
.subtitle {
  text-align: center;
  color: #374151;
  font-size: 1.390rem;
  margin-bottom: 48px;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.feature-card {
  border: 2px solid #000000;
  padding: 32px;
  transition: box-shadow 0.3s ease;
  background-color: #ffffff;
}
.feature-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.icon-wrapper {
  margin-bottom: 24px;
}
.icon-wrapper img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}
.feature-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 16px;
}
.feature-description {
  color: #374151;
  line-height: 1.8;
  text-align: justify;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}

        .header h1 {
            font-size: 24px;
            font-weight: bold;
            color: #1a1a1a;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-style: italic;
        }

        .header h1 span {
            color: #ffffff;
            font-weight: bold;
            font-style: italic;
        }

        .card {
            background-color: #ffffff;
            border-radius: 0 10px 10px 0;
            padding: 40px 50px 40px 0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            max-width: 85%;
            margin-bottom: 60px;
        }

        .content-wrapper {
            display: flex;
            align-items: center;
            gap: 40px;
            min-height: 300px;
        }

        .image-container {
            flex: 0 0 35%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-left: -50px;
        }

        .image-container img {
            width: 100%;
            height: auto;
            display: block;
        }

        .text-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            text-align: right;
        }

        .text-container h2 {
            font-size: 24px;
            font-weight: bold;
            color: #1a1a1a;
            text-transform: uppercase;
            margin-bottom: 20px;
            letter-spacing: 1px;
            align-self: flex-end;
            font-style: italic;
        }

        .text-container h2 span {
            color: #c41e1e;
            font-weight: bold;
            font-style: italic;
        }

        .text-container p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #333;
            text-align: right;
        }

        .section-siapa-kami {
            padding: 50px 40px;
        }

        .siapa-kami-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .content-wrapper-second {
            display: flex;
            align-items: flex-start;
            gap: 50px;
        }

        .text-container-second {
            flex: 1;
            color: #ffffff;
            font-size: 24px;
            font-weight: bold;
            font-style: italic;
        }

        .text-container-second h2 {
            font-size: 24px;
            font-weight: bold;
            color: black;
            margin-bottom: 25px;
            margin-top: 80px;
            font-style: italic;
        }

        .text-container-second h2 span {
            font-style: italic;
            font-weight: bold;
            color: #ffffff;
            font-size: 24px;
        }

        .text-container-second p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #ffffff;
            margin-bottom: 15px;
        }

        .text-container-second .question {
            margin-top: 25px;
            margin-bottom: 20px;
        }

        .btn-visit {
            background-color: transparent;
            color: #ffffff;
            border: 2px solid #ffffff;
            padding: 12px 30px;
            border-radius: 25px;
            font-size: 14px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
            text-transform: none;
            font-family: 'Montserrat', sans-serif;
        }

        .btn-visit:hover {
            background-color: #ffffff;
            color: #c41e1e;
        }

        .image-container-second {
            flex: 0 0 35%;
            margin-top: 80px;
        }

        .image-container-second img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }


@media (max-width: 768px) {
    .main-container {
        padding: 40px 0;
        border-radius: 40px;
    }

    .header {
        margin-bottom: 30px;
        padding: 0 20px;
    }

    .header h1 {
        font-size: 20px;
        letter-spacing: 1.5px;
    }

    .card {
        padding: 30px 30px 30px 0;
        max-width: 90%;
        margin-bottom: 40px;
    }

    .content-wrapper {
        flex-direction: column;
        gap: 25px;
        min-height: auto;
    }

    .image-container {
        flex: 0 0 auto;
        width: 100%;
        margin-left: 0;
        justify-content: center;
    }

    .image-container img {
        max-width: 80%;
    }

    .text-container {
        align-items: center;
        text-align: center;
        padding: 0 20px;
    }

    .text-container h2 {
        font-size: 20px;
        margin-bottom: 15px;
        align-self: center;
    }

    .text-container p {
        font-size: 1rem;
        line-height: 1.6;
        text-align: center;
    }

    .section-siapa-kami {
        padding: 40px 20px;
    }

    .content-wrapper-second {
        flex-direction: column;
        gap: 30px;
    }

    .text-container-second h2 {
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 20px;
    }

    .text-container-second h2 span {
        font-size: 20px;
    }

    .text-container-second p {
        font-size: 1rem;
        line-height: 1.6;
    }

    .btn-visit {
        padding: 10px 25px;
        font-size: 13px;
    }

    .image-container-second {
        flex: 0 0 auto;
        width: 100%;
        margin-top: 20px;
    }

    .image-container-second img {
        max-width: 70%;
        margin: 0 auto;
        display: block;
    }
}

@media (max-width: 480px) {
    .main-container {
        padding: 30px 0;
        border-radius: 30px;
    }

    .header {
        margin-bottom: 20px;
        padding: 0 16px;
    }

    .header h1 {
        font-size: 18px;
        letter-spacing: 1px;
    }

    .card {
        padding: 20px 20px 20px 0;
        max-width: 95%;
        margin-bottom: 30px;
        border-radius: 0 8px 8px 0;
    }

    .content-wrapper {
        gap: 20px;
    }

    .image-container img {
        max-width: 90%;
    }

    .text-container {
        padding: 0 16px;
    }

    .text-container h2 {
        font-size: 18px;
        margin-bottom: 12px;
        letter-spacing: 0.5px;
    }

    .text-container p {
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .section-siapa-kami {
        padding: 30px 16px;
    }

    .content-wrapper-second {
        gap: 25px;
    }

    .text-container-second h2 {
        font-size: 18px;
        margin-bottom: 16px;
    }

    .text-container-second h2 span {
        font-size: 18px;
    }

    .text-container-second p {
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 12px;
    }

    .text-container-second .question {
        margin-top: 20px;
        margin-bottom: 16px;
    }

    .btn-visit {
        padding: 10px 20px;
        font-size: 12px;
        border-radius: 20px;
    }

    .image-container-second img {
        max-width: 80%;
    }
}

@media (max-width: 360px) {
    .main-container {
        padding: 20px 0;
        border-radius: 20px;
    }

    .header {
        margin-bottom: 16px;
        padding: 0 12px;
    }

    .header h1 {
        font-size: 16px;
    }

    .card {
        padding: 16px 16px 16px 0;
        max-width: 98%;
        margin-bottom: 24px;
    }

    .text-container {
        padding: 0 12px;
    }

    .text-container h2 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .text-container p {
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .section-siapa-kami {
        padding: 24px 12px;
    }

    .text-container-second h2 {
        font-size: 16px;
        margin-bottom: 12px;
    }

    .text-container-second h2 span {
        font-size: 16px;
    }

    .text-container-second p {
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: 10px;
    }

    .text-container-second .question {
        margin-top: 16px;
        margin-bottom: 12px;
    }

    .btn-visit {
        padding: 8px 18px;
        font-size: 11px;
    }

    .image-container-second img {
        max-width: 90%;
    }
  }

@media (max-width: 768px) {
  .coverflow-slide { width: 280px; height: 450px; }
  .coverflow-wrapper { height: 500px; }
  .content-wrapper, .content-wrapper-second { flex-direction: column; }
  .card { max-width: 95%; }
  .features-grid {
    grid-template-columns: 1fr;
  }
  .title {
    font-size: 2rem;
  }
}
</style>