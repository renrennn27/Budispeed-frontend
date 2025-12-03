<template>
<main class="all">
    <div class="container">
        
        <section id="testimonials">
            <h2 class="section-title">Apa Kata <span class="red-line">Pelanggan Kami</span></h2>

            <div class="scroll-wrapper">
                <div class="testimonial-container">
                    
                    <div class="testimonial-card">
                        <div class="card-header">
                            <div class="author-info">
                                <img src="@/assets/Testimoni1.png" alt="Avatar d**6" class="avatar">
                                <p class="author">d**6</p>
                            </div>
                            <div class="rating">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                        </div>
                        <p class="quote">Murah ndone budi timbang ng indomaret. Cocok di pasang mobil carry josjis koko mbut</p>
                        <div class="product-info">
                            <img src="../assets/Littletrees.png" alt="Produk" class="product-image">
                            <div class="product-details">
                                <p class="product-name">Produk: Little trees</p>
                                <p class="product-variation">Varian: Black Ice</p>
                            </div>
                        </div>
                    </div>

                    <div class="testimonial-card">
                        <div class="card-header">
                            <div class="author-info">
                                <img src="../assets/E icons.png" alt="Avatar E**" class="avatar">
                                <p class="author">E**</p>
                            </div>
                            <div class="rating">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                        </div>
                        <p class="quote">Kain nya sangat lembut dan menyerap, bisa buat handukan ayam</p>
                        <div class="product-info">
                            <div class="product-image">
                                <img src="../assets/Ayam.png" alt="Produk" class="product-image">
                            </div>
                            <div class="product-details">
                                <p class="product-name">Produk: Microfiber</p>
                                <p class="product-variation">Varian: EDGELESS Giorgio Grey</p>
                            </div>
                        </div>
                    </div>

                    <div class="testimonial-card">
                        <div class="card-header">
                            <div class="author-info">
                                <img src="../assets/PP wa depresi.jpg" alt="Avatar O**o" class="avatar">
                                <p class="author">O**o</p>
                            </div>
                            <div class="rating">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                        </div>
                        <p class="quote">Josjis koh mbud kasur hamsternya</p>
                        <div class="product-info">
                            <img src="../assets/Spongetesti.png" alt="Produk" class="product-image">
                            <div class="product-details">
                                <p class="product-name">Produk: Smart Sponge Cuci Mobil... </p>
                                <p class="product-variation">Varian: Default</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
   <section class="order-banner">
<div class="banner-inner">
<h1 class="title"><span class="thin">PESAN</span> <span class="bold">SEKARANG</span></h1>
<p class="subtitle">Kunjungi toko resmi kami di marketplace favorit Anda. Dapatkan jaminan produk original, promo eksklusif, dan layanan pengiriman ke seluruh Indonesia.</p>
<div class="actions">
<a href="https://shopee.co.id/budispeed.id" target="_blank" class="btn btn-primary">Pesan Sekarang</a>
<a href="/product" class="btn btn-outline">Lihat Produk</a>
</div>
</div>
</section>
</main>
</template>

<style scoped>

.all {
    font-family: 'Poppins', sans-serif;
    background-color: white; 
    color: #F4F4F4;
    line-height: 1.6;
    margin: 0;
    padding: 20px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px; 
    align-items: center;
}

.section-title {
    font-size: 24px; 
    font-weight: bold;
    color: #2c2c2c;
    margin-bottom: 24px;
    margin-top: 40px;
}


.scroll-wrapper {
    overflow-x: auto; 
    padding-bottom: 20px; 
}

.scroll-wrapper::-webkit-scrollbar {
    height: 8px;
}
.scroll-wrapper::-webkit-scrollbar-track {
    background: #2D2D2D;
    border-radius: 10px;
}
.scroll-wrapper::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
}
.scroll-wrapper::-webkit-scrollbar-thumb:hover {
    background: #777;
}

.testimonial-container {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
}

.testimonial-card {
    flex: 0 0 340px; 
    background-color: #2c2c2c;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.author-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.author-info .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
}

.author-info .author {
    font-size: 0.95rem;
    font-weight: 600;
    color: white;
    margin: 0;
}

.rating {
    font-size: 0.9rem;
    color: #facc15; 
}

.rating span:last-child {
    color: #4A4A4A;
}


.testimonial-card .quote {
    font-size: 0.95rem;
    color: white;
    margin: 0 0 16px 0;
    line-height: 1.5;
}


.product-info {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: #2c2c2c; 
    border-radius: 8px;
    padding: 12px;
    margin-top: auto; 
}

.product-details {
    overflow: hidden; 
}

.product-details .product-name {
    font-size: 0.9rem;
    font-weight: 500;
    color: white;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
}

.product-details .product-variation {
    font-size: 0.8rem;
    color: #AAAAAA;
    margin: 4px 0 0 0;
}


.product-info .product-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 6px;
    flex-shrink: 0;
}


.video-thumb {
    position: relative;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 6px;
    overflow: hidden;
}


.red-line {
    font-size: 24px;
    font-weight: bold;
    color: #e30613;
}


@media (max-width: 768px) {
    .container {
        padding: 0 16px;
        margin-right: 16px;
    }

    .section-title {
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 30px;
    }

    .red-line {
        font-size: 20px;
    }

    .testimonial-card {
        flex: 0 0 280px;
        padding: 16px;
    }

    .testimonial-container {
        gap: 16px;
    }

    .card-header {
        margin-bottom: 12px;
    }

    .author-info .avatar {
        width: 32px;
        height: 32px;
    }

    .author-info .author {
        font-size: 0.9rem;
    }

    .rating {
        font-size: 0.85rem;
    }

    .testimonial-card .quote {
        font-size: 0.9rem;
        margin-bottom: 12px;
    }

    .product-info {
        padding: 10px;
        gap: 10px;
    }

    .product-info .product-image {
        width: 45px;
        height: 45px;
    }

    .product-details .product-name {
        font-size: 0.85rem;
    }

    .product-details .product-variation {
        font-size: 0.75rem;
    }
}

@media (max-width: 480px) {
    .all {
        padding: 16px 0;
    }

    .container {
        padding: 0 12px;
        margin-right: 12px;
    }

    .section-title {
        font-size: 18px;
        margin-bottom: 16px;
        margin-top: 24px;
    }

    .red-line {
        font-size: 18px;
    }

    .testimonial-card {
        flex: 0 0 260px;
        padding: 14px;
    }

    .testimonial-container {
        gap: 12px;
    }

    .card-header {
        margin-bottom: 10px;
    }

    .author-info {
        gap: 8px;
    }

    .author-info .avatar {
        width: 28px;
        height: 28px;
    }

    .author-info .author {
        font-size: 0.85rem;
    }

    .rating {
        font-size: 0.8rem;
    }

    .testimonial-card .quote {
        font-size: 0.85rem;
        margin-bottom: 10px;
        line-height: 1.4;
    }

    .product-info {
        padding: 8px;
        gap: 8px;
    }

    .product-info .product-image {
        width: 40px;
        height: 40px;
    }

    .product-details .product-name {
        font-size: 0.8rem;
    }

    .product-details .product-variation {
        font-size: 0.7rem;
    }

    .scroll-wrapper::-webkit-scrollbar {
        height: 6px;
    }
}

@media (max-width: 360px) {
    .testimonial-card {
        flex: 0 0 240px;
        padding: 12px;
    }

    .section-title {
        font-size: 16px;
    }

    .red-line {
        font-size: 16px;
    }
}

.order-banner {
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(180deg, #bd1212ff, #bd1212ff);
border-radius: 50px 50px 0 0;
box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
color: #020000ff;
width: 100%;
padding: 50px 16px;
position: relative;
margin: 0;
margin-bottom: -40px; 
}

.banner-inner {
  text-align: center;
  max-width: 700px;
  padding: 70px 20px;
}


.title {
  font-size: 25px;  
   margin-top: -70px;
  margin-bottom: 8px;
  color: black;
}
.title .thin {
  font-weight: 800;
  opacity: 0.95;
}
.title .bold {
  font-weight: 700;
  color: #fff;
}


.subtitle {
  font-size: 15px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 18px;
}


.actions {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.btn {
  padding: 8px 30px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  border: none;
  min-width: 120px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
  transition: all 0.3s ease;
}

.btn-primary {
  background: #fff;
  color: #000000ff;
  text-decoration: none;
  font-weight: 600;
}

.btn-outline {
  background: transparent;
  color: #fff;
  text-decoration: none;
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  font-weight: 600;
}

.btn-primary:hover {
  background: #f5f5f5;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 520px) {
  .title {
    font-size: 24px;
  }
  .subtitle {
    font-size: 12px;
  }
  .btn {
    min-width: 100px;
    padding: 8px 12px;
  }
}
</style>