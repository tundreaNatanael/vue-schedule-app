<template>
  <div
    class="bg-gray-100 flex items-center justify-center min-h-screen flex-col gap-7"
  >
    <Icon name="calendar" :size="148" color="black" />

    <h1 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
      Welcome to Schedule App
    </h1>

    <router-link to="/home">
      <Button
        icon="google"
        label="Login with Google"
        class="mx-auto mb-4 sm:mb-6 bg-red-400 text-white bg-gradient-to-r from-red-500 to-red-400 hover:from-red-600 hover:to-red-500 focus:ring-4 focus:ring-red-300 focus:outline-none transition duration-300 ease-in-out"
      />
    </router-link>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Icon from "../components/Icon.vue";
import Button from "../components/Button.vue";

export default {
  name: "LoginPage",
  components: {
    Icon,
    Button,
  },
  setup() {
    const router = useRouter();

    const navigateTo = (path) => {
      router.push(path);
    };

    return {
      navigateTo,
    };
  },
};
</script>

<style scoped>
/* Add any specific scoped CSS if needed */
</style>
