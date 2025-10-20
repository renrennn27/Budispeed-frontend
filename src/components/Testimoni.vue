<template>
<main class="all">
    <div class="container">
        
        <section id="testimonials">
            <h2 class="section-title">Apa Kata Pelanggan Kami</h2>

            <div class="scroll-wrapper">
                <div class="testimonial-container">
                    
                    <div class="testimonial-card">
                        <div class="card-header">
                            <div class="author-info">
                                <img src="@/assets/Testimoni1.png" alt="Avatar Budi" class="avatar">
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
                                <p class="product-variation">Varian: Mangga</p>
                            </div>
                        </div>
                    </div>

                    <div class="testimonial-card">
                        <div class="card-header">
                            <div class="author-info">
                                <img src="../assets/E icons.png" alt="Avatar Siti" class="avatar">
                                <p class="author">E**</p>
                            </div>
                            <div class="rating">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                        </div>
                        <p class="quote">Kain nya sangat lembut dan menyerap, bisa buat handukan ayam</p>
                        <div class="product-info">
                            <div class="product-image video-thumb">
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
    margin-right: 30px;
}

.section-title {
    font-size: 2.25rem; 
    font-weight: 600;
    color: #FFFFFF;
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
    background-color: white;
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
    color: black;
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
    color: black;
    margin: 0 0 16px 0;
    line-height: 1.5;
}


.product-info {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: white; 
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
    color: black;
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

.video-thumb .thumb-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.video-thumb .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding-left: 2px; 
    pointer-events: none; 
}
</style>