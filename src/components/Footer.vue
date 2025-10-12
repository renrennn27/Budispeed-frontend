<template>
    <footer class="main-footer">

    <div class="footer-header-container">
      <div class="footer-header-left">
        <h2>Hubungi Kami</h2>
      </div>
      <div class="footer-header-right">
        <p>Ikuti kami untuk info produk, promo, dan konten terbaru</p>
        <div class="social-icons-inline">
          <div class="social-placeholder"></div>
          <div class="social-placeholder"></div>
          <div class="social-placeholder"></div>
        </div>
      </div>
    </div>

    <div class="footer-container">
      
      <div class="footer-col about-us">
        <h3>Budi Speed</h3>
        <p>Kami selalu siap membantu. Baik untuk bertanya tentang produk, konsultasi, atau mampir langsung ke bengkel kami di Surabaya, jangan ragu untuk menghubungi kami.</p>
      </div>

      <div class="footer-col menu-links">
        <h3>Menu</h3>
          <ul>
          <li><a href="#">Tentang Kami</a></li>
          <li><a href="#">Produk</a></li>
          <li><a href="#">Galeri & Testimoni</a></li>
        </ul>
      </div>

      <div class="footer-col contact-info">
        <h3>Kontak</h3>
        <p>
          <span class="icon">📍</span> Jl. Manyar Kerto Adi VI No.6, Manyar Sabrangan, Kec. Mulyorejo, Surabaya, Jawa Timur 60116
        </p>
        <p>
          <span class="icon">📞</span> ‪+62 812-5678-8493‬
        </p>
      </div>
      
    </div>
    
    <div class="footer-copyright">
        <p class="copyright-text">
          ©2025 Budi Speed. All Right Reserved.
        </p>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background-color: #f7f7f7; 
  padding: 40px 20px;
}

.footer-container, .footer-header-container, .footer-copyright {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-header-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
}

.footer-header-left h2 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.footer-header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-header-right p {
font-size: 12px;
color: #888;
margin: 0;
padding-bottom: 3px; 
}

.social-icons-inline {
  display: flex;
  gap: 5px;
}

.social-placeholder {
  width: 25px;
  height: 25px;
  background-color: #e30613;
  border-radius: 50%;
}

.footer-container {
  display: flex; 
  justify-content: space-between; 
  gap: 30px; 
  flex-wrap: wrap; 
}

.footer-col {
  flex: 1; 
  min-width: 200px; 
}

.footer-col h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.footer-col p {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
}

.about-us {
  flex: 1.5; 
  min-width: 250px;
}

.menu-links ul {
  list-style: none; 
  padding: 0;
  margin: 0;
}

.menu-links li a {
  text-decoration: none;
  color: #555;
  font-size: 14px;
  display: block; 
  padding: 5px 0;
}

.menu-links li a:hover {
  color: #e30613; 
}

.contact-info {
  flex: 1.2;
}
.contact-info p .icon {
  margin-right: 5px;
}

.footer-copyright {
    padding-top: 30px;
    text-align: left;
}

.copyright-text {
font-size: 12px;
color: #888;
margin: 0;
} 


</style>