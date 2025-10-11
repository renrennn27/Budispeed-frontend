<template>
    <header class="navbar">
        <div class="navbar-container">
            <a href="#" class="logo">
                <img src="../assets/Logo budispeed.png" alt="Budi Speed Logo" width="150" height="50" />
            </a>
            <nav class="nav-links">
                <a href="#">Tentang Kami</a>
                <a href="#">Produk</a>
                <a href="#">Galeri</a>
                <a href="#">Hubungi Kami</a>
            </nav>
            <div class="cart-icon">
                <img src="../assets/cart.png" alt="Cart" />
            </div>
        </div>
    </header>
</template>

<style scoped>
.navbar {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 15px 0;
}
.navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
.logo img {
    height: 60px;
    width: auto; 
}
.nav-links {
    display: flex;
    gap: 30px;
}
.nav-links a {
    text-decoration: none;
    color: #000000;
    font-weight: 500;
    transition: color 0.3s;
}
.cart-icon img {
    height: 24px;
}
.nav-links a:hover {
    color: var(--primary-color);
}
</style>