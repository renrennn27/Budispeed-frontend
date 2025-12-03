<template>
    <section class="gallery-container">
      <h2 class="h2-gallery" data-aos="fade-up" data-aos-offset="150">Galeri Hasil <span class="tulisan-merah">Kerja & Testimoni</span></h2>
      
      <div class="timeline">
        
        <div class="timeline-item left" data-aos="fade-up" data-aos-offset="150">
          <div class="timeline-content">
            <img src="../assets/bodykit.png" alt="bodykit">
            <P class="p-right">Pemasangan Body Kit Venturer oleh <span class="tulisan-merah">Bos BudiSpeed</span></P>
          </div>
        </div>

        <div class="timeline-item right" data-aos="fade-up" data-aos-offset="150">
          <div class="timeline-content">
            <img src="../assets/Stoplamp.png" alt="stoplamp">
            <P>Stoplamp V2+ dengan <span class="tulisan-merah">Welcome Light Smoke</span></P>
          </div>
        </div>

        <div class="timeline-item left" data-aos="fade-up" data-aos-offset="150">
          <div class="timeline-content">
            <img src="../assets/bekleed.png" alt="bekleed">
            <P>Restorasi Bekleed Jok Fortuner VRZ dan <span class="tulisan-merah">Tambah Full Spons</span></P>
          </div>
        </div>

        <div class="timeline-item right" data-aos="fade-up" data-aos-offset="150">
          <div class="timeline-content">
            <img src="../assets/Littletrees.png" alt="littletrees">
            <P><br>Pema<br>sangan</br> Little Trees yang Benar <span class="tulisan-merah">Varian Gold</span></P>
          </div>
        </div>

        <div class="timeline-item left" data-aos="fade-up" data-aos-offset="150">
          <div class="timeline-content">
            <img src="../assets/Microfiber.png" alt="microfiber">
            <P>Edgeless Microfiber Satu Sisi Buat Lap Satu Sisi Lagi Buat Moles <span class="tulisan-merah">Anti Baret</span></P>
          </div>
        </div>

        <div class="timeline-item right" data-aos="fade-up" data-aos-offset="150">
          <div class="timeline-content">
            <img src="../assets/Hooddomper.png" alt="hooddomper">
            <P>Hood Damper untuk innova Reborn dari<span class="tulisan-merah"> Sustec Warna Hitam</span></P>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>

.gallery-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.h2-gallery {
  text-align: left;
  margin-left: 0;
  margin-top: 24px;
  margin-bottom: 24px;
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
  width: 2px;
  background-color: #000000;
  bottom: 15px;
  transform: translateX(-50%);
  top: 15px;
  left: 50%; 
}

.timeline-item {
  width: 50%;
  position: relative;
  margin: 60px 0;
  display: flex;
  justify-content: center;
}

.timeline-item p {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  color: #333;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #d9534f;
  top: 15px;
  border-radius: 50%;
  transform: translateY(0);
  z-index: 1;
}

.timeline-item.left {
  left: 0;
  justify-content: flex-end;
  padding-right: 30px;
}

.timeline-item.left::after {
  right: -12px;
}

.timeline-item.right {
  left: 50%;
  justify-content: flex-start;
  padding-left: 30px;
}

.timeline-item.right::after {
  left: -12px;
}

.timeline-content {
  padding: 15px;
  position: relative;
  display: flex;
  border-radius: 6px;
  background-color: white;
  text-align: left;
  align-items: center;
  gap: 15px;
}

.timeline-content img {
  width: 400px;
  height: auto;
  margin-bottom: 10px;
  display: block;
  border-radius: 8px;
  flex-shrink: 0;
}

.timeline-content p {
    margin: 0;
    font-size: 2.3rem;
    line-height: 1.4;
    font-weight: bold;
    color: #333;
}

.p-right {
  margin-left: 150px;
}

.timeline-item.left p {
  left: calc(100% + 80px);
  text-align: left;
}

.timeline-item.right p {
  right: calc(100% + 80px);
  text-align: right;
}

.timeline-item:first-child::after {
  top: 15px;
  transform: translateY(0);
}

.timeline-item:last-child::after {
  top: auto;
  bottom: 15px;
  transform: translateY(0);
}

/* ===== RESPONSIVE STYLES ===== */

@media (max-width: 992px) {
  .h2-gallery {
    margin-left: 60px;
    font-size: 22px;
  }

  .timeline-content img {
    width: 300px;
  }

  .timeline-content p {
    font-size: 1.8rem;
  }

  .timeline-item p {
    width: 180px;
    font-size: 18px;
  }

  .timeline-item.left p {
    left: calc(100% + 60px);
  }

  .timeline-item.right p {
    right: calc(100% + 60px);
  }

  .p-right {
    margin-left: 100px;
  }
}

@media (max-width: 768px) {
  .h2-gallery {
    margin-left: 40px;
    font-size: 20px;
  }

  .gallery-container {
    max-width: 100%;
    padding: 0 20px;
  }

  .timeline {
    max-width: 600px;
  }

  .timeline::after {
    left: 30px;
  }

  .timeline-item {
    width: 100%;
    left: 0 !important;
    padding-left: 60px !important;
    padding-right: 0 !important;
    justify-content: flex-start !important;
    margin: 40px 0;
  }

  .timeline-item::after {
    left: 18px !important;
    right: auto !important;
  }

  .timeline-content {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .timeline-content img {
    width: 100%;
    max-width: 350px;
    margin-bottom: 15px;
  }

  .timeline-item p {
    position: static;
    transform: none;
    width: 100%;
    font-size: 16px;
    text-align: left !important;
  }

  .timeline-content p {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .p-right {
    margin-left: 0;
  }

  .timeline-item.left p,
  .timeline-item.right p {
    left: auto;
    right: auto;
  }
}

@media (max-width: 480px) {
  .h2-gallery {
    margin-left: 20px;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .gallery-container {
    padding: 0 16px;
  }

  .timeline {
    max-width: 100%;
  }

  .timeline::after {
    left: 20px;
  }

  .timeline-item {
    padding-left: 50px !important;
    margin: 30px 0;
  }

  .timeline-item::after {
    width: 20px;
    height: 20px;
    left: 10px !important;
  }

  .timeline-content {
    padding: 16px;
  }

  .timeline-content img {
    max-width: 100%;
    margin-bottom: 12px;
  }

  .timeline-item p {
    font-size: 14px;
    line-height: 1.4;
  }

  .timeline-content p {
    font-size: 0.95rem;
    line-height: 1.4;
  }
}

@media (max-width: 360px) {
  .h2-gallery {
    margin-left: 16px;
    font-size: 16px;
  }

  .gallery-container {
    padding: 0 12px;
  }

  .timeline::after {
    left: 16px;
  }

  .timeline-item {
    padding-left: 40px !important;
    margin: 24px 0;
  }

  .timeline-item::after {
    width: 16px;
    height: 16px;
    left: 8px !important;
  }

  .timeline-content {
    padding: 12px;
  }

  .timeline-content img {
    margin-bottom: 10px;
  }

  .timeline-item p {
    font-size: 13px;
  }

  .timeline-content p {
    font-size: 0.9rem;
    line-height: 1.3;
  }
}
</style>