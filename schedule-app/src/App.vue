<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full">
    <Menu class="w-full" />
    <RouterView class="w-full" />
    <Footer class="w-full" />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
