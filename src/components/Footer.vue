<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
        <div class="footer-section">
            <div class="footer-header-bar">
                <h3 class="footer-title">Hubungi <span>Kami</span></h3>
                <div class="footer-social-info">
                    <p class="info-text">Ikuti kami untuk info produk, promo, dan konten terbaru.</p>
                    <div class="social-icons-inline">
                        <a href="https://www.instagram.com/budispeed.sby/" class="social-placeholder" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://youtube.com/@budispeedid?si=DzkVxSaihvq24dYr" class="social-placeholder" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a href="https://www.tiktok.com/@budispeed.id?_t=ZS-90G797x8ifa&_r=1" class="social-placeholder" target="_blank"><i class="fab fa-tiktok"></i></a>
                        <a href="https://wa.me/6285100166858" class="social-placeholder" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    </div>
                    
                </div>
            </div>
            
            <div class="footer-content">
                <div class="footer-column about-us">
                    <h4>Budi Speed</h4>
                    <p>Kami selalu siap membantu. Baik untuk bertanya tentang produk, konsultasi, atau mampir langsung ke bengkel kami. Silahkan, jangan ragu untuk menghubungi kami.</p>
                </div>
                
                <div class="footer-column menu-links">
                    <h4>Menu</h4>
                    <ul>
                        <li><a href="#">Tentang Kami</a></li>
                        <li><a href="#">Produk</a></li>
                        <li><a href="#">Galeri & Testimoni</a></li>
                    </ul>
                </div>
                
                <div class="footer-column contact-info">
                    <h4>Kontak</h4>
                    <div class="contact-detail">
                        <Icon class="icon" icon="mdi:location" width="25" />
                        <p> Manyar Kertoadi VI No.6, Manyar Sabrangan, <br> Kec. Mulyorejo, Surabaya, Jawa Timur 60116
                        </p>
                    </div>
                    <div class="contact-detail">
                        <Icon class="icon" icon="mdi:telephone" width="25" />
                        <p>+62 812-5678-8493</p>
                    </div>
                    </div>
                    <div class="footer-column contact-info">
                    <h4>Lokasi Kami</h4>
                    <div class="map-container">
                        <iframe class="map-frame" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4986.288697070992!2d112.77892322041916!3d-7.284011497895683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa3f42173e2d%3A0x4ee162c8567b9643!2sBUDI%20SPEED!5e0!3m2!1sid!2sid!4v1760294317785!5m2!1sid!2sid" width="400" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                    </div>
            </div>

                <div class="footer-note">
                © 2025 Budispeed.id All Rights Reserved.
                </div>
        </div>
</template>

<style>

.footer-section {
    background-color: #2c2c2c;
    color: #cccccc;
    font-family: Arial, sans-serif;
    padding: 50px 20px 10px 20px;
}

.footer-header-bar, .footer-content, .footer-note {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-header-bar {
    display: flex; 
    justify-content: space-between; 
    align-items: flex-end; 
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-title {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    margin: 0;
}
.footer-title span {
    color: #e30613;
    font-weight: bolder; 
    font-size: 24px;
}

.footer-social-info {
    flex-direction: column;
    align-items: flex-end;
    padding-top: 10px;
    display: flex;
    gap: 10px;
}

.map-container {
    width: 100%;
    margin-top: 15px;
    height: 180px;
}

.map-frame {
  border: none;
  width: 100%;
  height: 100%;
}

.footer-social-info {
    font-size: 1  14px;
    color: #888;
    margin: 0 0 5px 0;
    line-height: 1.4;
}

.info-text {
  font-size: 14px;
}

.social-icons-inline {
    display: flex;
    justify-content: flex-end; 
    gap: 8px;
    font-size: 10px;
}

.social-placeholder {
    width: 35px;
    height: 35px;
    background-color: #e30613; 
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 35px;
    font-size: 18px;
    transition: background-color 0.3s;
}
.social-placeholder:hover {
    background-color: transparent;
    border: 1px solid #fff;
}

.footer-content {
    display: flex; 
    gap: 40px; 
    padding-bottom: 30px;
    justify-content: flex-start;
}

.about-us {
    flex: 0 1 350px;
    min-width: 350px;
}

.footer-column {
    flex: 0 1 auto; 
    min-width: 150px; 
}

.about-us {
    flex: 0 1 350px;
    min-width: 350px;

}

.footer-column h4 {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 15px;
    color: #ffffff;
}

.footer-column p {
    font-size: 14px;
    line-height: 1.6;
    color: #cccccc;
    margin-bottom: 10px;
}

.footer-column ul {
    list-style: none; 
    padding: 0;
    margin: 0;
}

.footer-column li a {
    text-decoration: none;
    color: #cccccc;
    font-size: 14px;
    display: block; 
    padding: 5px 0;
    transition: color 0.3s;
}

.footer-column li a:hover {
    color: #e30613; 
}

.contact-detail {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
}

.icon {
    margin-right: 10px;
    color: #e30613;
    margin-top: 3px; 
    min-width: 15px;
}

.contact-detail p {
    text-align: left;
    margin: 0;
    font-size: 14px;
    line-height: 1.6;
    white-space: normal;
}

.footer-note {
    padding: 15px 0;
    font-size: 0.8em;
    color: #888;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: left;
}

/* ===== RESPONSIVE STYLES ===== */

@media (max-width: 992px) {
    .footer-section {
        padding: 40px 20px 10px 20px;
    }

    .footer-content {
        gap: 30px;
        flex-wrap: wrap;
    }

    .about-us {
        flex: 0 1 100%;
        min-width: 100%;
    }

    .footer-column {
        flex: 0 1 calc(50% - 15px);
        min-width: calc(50% - 15px);
    }

    .map-container {
        height: 200px;
    }
}

@media (max-width: 768px) {
    .footer-section {
        padding: 30px 16px 10px 16px;
    }

    .footer-header-bar {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        padding-bottom: 15px;
    }

    .footer-title {
        font-size: 20px;
    }

    .footer-title span {
        font-size: 20px;
    }

    .footer-social-info {
        align-items: flex-start;
        width: 100%;
    }

    .info-text {
        font-size: 13px;
    }

    .social-icons-inline {
        justify-content: flex-start;
    }

    .social-placeholder {
        width: 32px;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
    }

    .footer-content {
        flex-direction: column;
        gap: 25px;
    }

    .about-us {
        flex: 0 1 100%;
        min-width: 100%;
    }

    .footer-column {
        flex: 0 1 100%;
        min-width: 100%;
    }

    .footer-column h4 {
        font-size: 1em;
        margin-bottom: 12px;
    }

    .footer-column p {
        font-size: 13px;
    }

    .footer-column li a {
        font-size: 13px;
    }

    .contact-detail p {
        font-size: 13px;
    }

    .map-container {
        height: 220px;
    }

    .footer-note {
        font-size: 0.75em;
        padding: 12px 0;
    }
}

@media (max-width: 480px) {
    .footer-section {
        padding: 24px 12px 8px 12px;
    }

    .footer-header-bar {
        gap: 12px;
        padding-bottom: 12px;
        margin-bottom: 15px;
    }

    .footer-title {
        font-size: 18px;
    }

    .footer-title span {
        font-size: 18px;
    }

    .info-text {
        font-size: 12px;
    }

    .social-icons-inline {
        gap: 6px;
    }

    .social-placeholder {
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
    }

    .footer-content {
        gap: 20px;
        padding-bottom: 20px;
    }

    .footer-column h4 {
        font-size: 0.95em;
        margin-bottom: 10px;
    }

    .footer-column p {
        font-size: 12px;
        line-height: 1.5;
    }

    .footer-column li a {
        font-size: 12px;
        padding: 4px 0;
    }

    .contact-detail {
        margin-bottom: 12px;
    }

    .icon {
        margin-right: 8px;
    }

    .contact-detail p {
        font-size: 12px;
        line-height: 1.5;
    }

    .map-container {
        height: 200px;
        margin-top: 12px;
    }

    .footer-note {
        font-size: 0.7em;
        padding: 10px 0;
    }
}

@media (max-width: 360px) {
    .footer-section {
        padding: 20px 10px 8px 10px;
    }

    .footer-header-bar {
        gap: 10px;
        padding-bottom: 10px;
        margin-bottom: 12px;
    }

    .footer-title {
        font-size: 16px;
    }

    .footer-title span {
        font-size: 16px;
    }

    .info-text {
        font-size: 11px;
    }

    .social-placeholder {
        width: 28px;
        height: 28px;
        line-height: 28px;
        font-size: 14px;
    }

    .footer-content {
        gap: 16px;
        padding-bottom: 16px;
    }

    .footer-column h4 {
        font-size: 0.9em;
        margin-bottom: 8px;
    }

    .footer-column p {
        font-size: 11px;
    }

    .footer-column li a {
        font-size: 11px;
    }

    .contact-detail p {
        font-size: 11px;
    }

    .map-container {
        height: 180px;
    }

    .footer-note {
        font-size: 0.65em;
    }
}
</style>