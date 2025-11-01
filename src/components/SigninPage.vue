<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="container1">

    <router-link to="/" class="back-arrow"><Icon icon="mdi:arrow-left"/></router-link>

    <div class="login-wrapper">
        
        <div class="left-panel">
            <img src="@/assets/Logo.png" alt="Logo Budi Speed" class="logo">
        </div>

        <div class="right-panel">
            <h1>Halo <span class="highlight">Admin!</span></h1>
            <p>Silahkan daftar untuk mengelola toko Anda!</p>

            <form>
                <div class="input-group">
                    <input type="email" placeholder="Email" required>
                    <Icon icon="mdi:envelope" class="icon"/>
                </div>
                <div class="input-group">
                    <input type="password" placeholder="Kata Sandi" required>
                    <Icon icon="mdi:lock" class="icon"/>
                </div>
                <button type="submit">Daftar</button>
            </form>

            <p class="signup-link">
                Sudah memiliki akun? <router-link to="/admin/login">Masuk!</router-link>
            </p>
        </div>
    </div>

</div>

</template>

<style scoped>

.container1 {
    font-family: 'Poppins', sans-serif; 
    background-color: #f0f2f5; 
    display: flex;
    justify-content: center; 
    align-items: center; 
    min-height: 100vh; 
    position: relative; 
    padding: 20px;
}

.back-arrow {
    position: absolute;
    top: 30px;
    left: 40px;
    font-size: 28px; 
    color: #333; 
    text-decoration: none;
}

.login-wrapper {
    display: flex;
    align-items: center; 
    max-width: 900px; 
    width: 90%; 
}

.left-panel {
    flex: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
}

.left-panel .logo {
    max-width: 250px; 
    height: auto;
}

.right-panel {
    flex: 1.2; 
    padding: 40px 50px;
    text-align: center; 
}

h1 {
    font-size: 2.5em; 
    color: #333;
    margin-bottom: 10px;
    font-weight: bold;
}

h1 .highlight {
    color: #c9302c; 
    font-weight: bold;
}
.right-panel > p {
    color: #666;
    margin-bottom: 30px;
    font-size: 1.1em;
}

.input-group {
    position: relative;
    margin-bottom: 25px;
}

.input-group input {
    width: 100%;
    padding: 14px 45px 14px 20px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1em;
    outline: none;
    transition: border-color 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.input-group input:focus {
    border-color: #c9302c;
}

.input-group .icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 1.1em;
}

button {
    width: 100%;
    padding: 15px;
    background-color: #c9302c; 
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
    margin-top: 15px;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 10px rgba(201, 48, 44, 0.3); 
}

button:hover {
    background-color: #a52825; 
}

.signup-link {
    margin-top: 30px;
    font-size: 0.95em;
    color: #777;
    text-align: center; 
}

.signup-link a {
    color: #007bff; 
    text-decoration: none;
    font-weight: 600;
}
</style>