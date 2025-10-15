<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import HomePage from '../components/HomePage.vue'
import GaleryTestimoni from '../components/GaleryTestimoni.vue'
</script>

<template>
  <Navbar />
  <HomePage />
  <GaleryTestimoni />
  <Footer />
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 80px 20px;
}
.hero h1 {
  font-size: 3rem;
  font-style: italic;
  font-weight: bold;
  text-shadow: var(--text-shadow);
}
.hero h1 span {
  color: var(--primary-color);
  font-weight: bold;
}
.hero h2 {
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  text-shadow: var(--text-shadow);
}
.hero p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 30px auto;
}
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.btn-primary {
  background-color: var(--primary-color);
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: var(--text-shadow);
  box-shadow: var(--shadow);
  cursor: pointer;
}
.btn-secondary {
  background-color: transparent;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: var(--text-shadow);
  box-shadow: var(--shadow);
  cursor: pointer;
}
.btn-primary:hover {
  background-color: transparent;
}
.btn-secondary:hover {
  background-color: var(--primary-color);
  color: white;
}



</style>
