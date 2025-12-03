<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import apiClient from '../services/api'; 

const email = ref(''); 
const password = ref('');
const errorMessage = ref('');
const router = useRouter(); 

// 2. Buat fungsi login
async function handleLogin() {
  errorMessage.value = ''; 
  try {
  
    const response = await apiClient.post('/login', {
      email: email.value,
      password: password.value,
    });

    localStorage.setItem('admin_token', response.data.access_token);

    router.push('/dashboard');

  } catch (error) {
    console.error('Login gagal:', error);
    if (error.response && error.response.status === 401) {
      errorMessage.value = 'Email atau Password salah.';
    } else {
      errorMessage.value = 'Terjadi kesalahan. Coba lagi nanti.';
    }
  }
}
</script>

<template>
<div class="container1">

<router-link to="/" class="back-arrow"><Icon icon="mdi:arrow-left"/></router-link>

    <div class="login-wrapper">
        
        <div class="left-panel">
            <img src="../assets/Logo.png" alt="Logo Budi Speed" class="logo">
        </div>

        <div class="right-panel">
            <h1>Halo <span class="highlight">Admin!</span></h1>
            <p>Silahkan masuk untuk mengelola toko Anda!</p>

            <form @submit.prevent="handleLogin">
                <div class="input-group">
                    <input type="email" placeholder="Email" v-model="email" required>
                    <Icon icon="mdi:envelope" class="icon" />
                </div>
                <div class="input-group">
                    <input type="password" placeholder="Kata Sandi" v-model="password" required>
                    <Icon icon="mdi:lock" class="icon" />
                </div>
                <button type="submit">Masuk</button>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
        </div>
    </div>

</div>

</template>

<style scoped>

.container1 {
    font-family: 'Poppins', sans-serif; 
    background-color: var(--background-color); 
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
    right: 10px;
    top: 20px;
    transform: translateY(-50%);
    color: #999;
    font-size: 1.5em;
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

.error {
  color: red;
}

/* ===== RESPONSIVE STYLES ===== */

@media (max-width: 768px) {
    .container1 {
        padding: 15px;
    }

    .back-arrow {
        top: 20px;
        left: 20px;
        font-size: 24px;
    }

    .login-wrapper {
        flex-direction: column;
        width: 95%;
        max-width: 500px;
    }

    .left-panel {
        padding: 20px;
        width: 100%;
    }

    .left-panel .logo {
        max-width: 180px;
    }

    .right-panel {
        padding: 30px 35px;
        width: 100%;
    }

    h1 {
        font-size: 2em;
        margin-bottom: 8px;
    }

    .right-panel > p {
        font-size: 1em;
        margin-bottom: 25px;
    }

    .input-group {
        margin-bottom: 20px;
    }

    .input-group input {
        padding: 12px 40px 12px 18px;
        font-size: 0.95em;
    }

    .input-group .icon {
        right: 18px;
        font-size: 1em;
    }

    button {
        padding: 13px;
        font-size: 1em;
        margin-top: 12px;
    }

    .signup-link {
        margin-top: 25px;
        font-size: 0.9em;
    }
}

@media (max-width: 480px) {
    .container1 {
        padding: 12px;
    }

    .back-arrow {
        top: 15px;
        left: 15px;
        font-size: 22px;
    }

    .login-wrapper {
        width: 100%;
        max-width: 100%;
    }

    .left-panel {
        padding: 15px;
    }

    .left-panel .logo {
        max-width: 150px;
    }

    .right-panel {
        padding: 25px 25px;
    }

    h1 {
        font-size: 1.8em;
        margin-bottom: 6px;
    }

    .right-panel > p {
        font-size: 0.95em;
        margin-bottom: 20px;
    }

    .input-group {
        margin-bottom: 18px;
    }

    .input-group input {
        padding: 11px 38px 11px 16px;
        font-size: 0.9em;
    }

    .input-group .icon {
        right: 16px;
        font-size: 0.95em;
    }

    button {
        padding: 12px;
        font-size: 0.95em;
        margin-top: 10px;
    }

    .signup-link {
        margin-top: 20px;
        font-size: 0.85em;
    }
}

@media (max-width: 360px) {
    .container1 {
        padding: 10px;
    }

    .back-arrow {
        top: 12px;
        left: 12px;
        font-size: 20px;
    }

    .left-panel {
        padding: 12px;
    }

    .left-panel .logo {
        max-width: 130px;
    }

    .right-panel {
        padding: 20px 20px;
    }

    h1 {
        font-size: 1.6em;
        margin-bottom: 5px;
    }

    .right-panel > p {
        font-size: 0.9em;
        margin-bottom: 18px;
    }

    .input-group {
        margin-bottom: 16px;
    }

    .input-group input {
        padding: 10px 36px 10px 14px;
        font-size: 0.85em;
    }

    .input-group .icon {
        right: 14px;
        font-size: 0.9em;
    }

    button {
        padding: 11px;
        font-size: 0.9em;
        margin-top: 8px;
    }

    .signup-link {
        margin-top: 18px;
        font-size: 0.8em;
    }
}
</style>