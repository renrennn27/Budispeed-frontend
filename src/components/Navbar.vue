<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
    menuOpen.value = false
}
</script>

<template>
    <header class="navbar">
        <div class="navbar-container">
            <RouterLink to="/" class="logo">
                <img src="../assets/Logo budispeed.png" alt="Budi Speed Logo" width="150" height="50" />
            </RouterLink>
            
            <button class="hamburger" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-links" :class="{ active: menuOpen }">
                <RouterLink :to="{ path: '/', hash: '#tentang-kami' }" @click="closeMenu">Tentang Kami</RouterLink>
                <RouterLink :to="{ path: '/', hash: '#produk' }" @click="closeMenu">Produk</RouterLink>
                <RouterLink :to="{ path: '/', hash: '#galeri' }" @click="closeMenu">Galeri</RouterLink>
                <RouterLink :to="{ path: '/', hash: '#hubungi-kami' }" @click="closeMenu">Hubungi Kami</RouterLink>
                
                <RouterLink to="/product" class="cart-icon" @click="closeMenu">
                    <img src="../assets/cart.png" alt="Cart" />
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.navbar {
    width: 100%;
    background-color: transparent;
    padding: 15px 0;
    position: fixed; /* Pastikan navbar fixed agar terlihat saat scroll */
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9);
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
    font-family: 'Montserrat', sans-serif;
}
.nav-links a {
    text-decoration: none;
    color: #000000;
    font-weight: 500;
    transition: color 0.3s;
}
.cart-icon img {
    height: 28px;
}
.nav-links a:hover {
    color: var(--primary-color);
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    z-index: 1001;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background-color: #000000;
    transition: all 0.3s ease;
    border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* ===== RESPONSIVE STYLES ===== */

@media (max-width: 768px) {
    .navbar {
        padding: 12px 0;
    }

    .navbar-container {
        padding: 0 16px;
    }

    .logo img {
        height: 50px;
    }

    .hamburger {
        display: flex;
    }

    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 70%;
        max-width: 300px;
        background-color: #ffffff;
        flex-direction: column;
        gap: 0;
        padding: 80px 30px 30px;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        transition: right 0.3s ease;
        z-index: 1000;
    }

    .nav-links.active {
        right: 0;
    }

    .nav-links a {
        padding: 15px 0;
        border-bottom: 1px solid #f0f0f0;
        font-size: 16px;
    }

    .cart-icon {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 2px solid #f0f0f0;
    }

    .cart-icon img {
        height: 26px;
    }
}

@media (max-width: 480px) {
    .navbar {
        padding: 10px 0;
    }

    .navbar-container {
        padding: 0 12px;
    }

    .logo img {
        height: 45px;
    }

    .hamburger span {
        width: 22px;
        height: 2.5px;
    }

    .nav-links {
        width: 75%;
        padding: 70px 25px 25px;
    }

    .nav-links a {
        padding: 12px 0;
        font-size: 15px;
    }

    .cart-icon {
        margin-top: 16px;
        padding-top: 16px;
    }

    .cart-icon img {
        height: 24px;
    }
}

@media (max-width: 360px) {
    .navbar-container {
        padding: 0 10px;
    }

    .logo img {
        height: 40px;
    }

    .hamburger span {
        width: 20px;
        height: 2px;
    }

    .nav-links {
        width: 80%;
        padding: 60px 20px 20px;
    }

    .nav-links a {
        padding: 10px 0;
        font-size: 14px;
    }

    .cart-icon img {
        height: 22px;
    }
}

@media (max-width: 768px) {
    .nav-links.active::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }
}
</style>