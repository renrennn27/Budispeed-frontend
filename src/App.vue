<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import HelloWorld from './components/HelloWorld.vue'
import HomeView from './views/HomeView.vue';
</script>

<template>
  <HomeView/>
  <RouterView />
</template>

