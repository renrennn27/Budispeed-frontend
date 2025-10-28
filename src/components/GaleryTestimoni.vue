<template>
    <h2 class="h2-gallery">Galeri Hasil <span class="tulisan-merah">Kerja & Testimoni</span></h2>
    <section class="gallery-container">
      <div class="timeline">
        <div class="timeline-item left">
          <div class="timeline-content">
            <img src="../assets/bodykit.png" alt="bodykit">
            <P class="p-right">Pemasangan Body Kit Venturer oleh <span class="tulisan-merah">Bos BudiSpeed</span></P>
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

</template>

<style scoped>
.gallery-container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

.h2-gallery {
  text-align: left;
  margin-left: 90px;
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
  display: flex;
  align-items: center;
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
transform: translateY(-50%);
z-index: 1;
}

.timeline-item.left {
  left: 0;
  justify-content: flex-end;
}

.timeline-item.left::after {
  right: -10px;
}

.timeline-item.right {
  left: 50%;
  justify-content: flex-start;

}

.timeline-item.right::after {
  left: -10px;
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
  width: 150px;
  height: auto;
  margin-bottom: 10px;
  display: block;
  border-radius: 8px;
  flex-shrink: 0;
  
}

.timeline-content p {
    margin: 0;
    font-size: 15px;
    line-height: 1.4;
    font-weight: bold;
    color: #333;
}

.p-right {
  margin-left: 150px;
}
</style>