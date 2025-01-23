<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from './components/Footer.vue';
</script>

<template>

  <div>
    <RouterView />
    <Footer />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
