<template>
  <div class="flex justify-between px-4 py-4 gap-4 max-w-[500px] md:gap-6">
    <div class="flex flex-col items-center">
      <router-link to="/home">
        <Button
          icon="calendar"
          iconColor="black"
          class="flex flex-col items-center"
        />
      </router-link>
      <div v-if="isActive('/home')" class="w-full h-1 bg-gray-400 mt-1"></div>
    </div>

    <div v-if="me.role === 'admin'" class="flex flex-col items-center">
      <router-link to="/manage-users">
        <Button
          icon="manageUsers"
          iconColor="black"
          class="flex flex-col items-center"
        />
      </router-link>
      <div
        v-if="isActive('/manage-users')"
        class="w-full h-1 bg-gray-400 mt-1"
      ></div>
    </div>
    <div class="flex flex-col items-center">
      <router-link to="/settings">
        <Button
          icon="settings"
          iconColor="black"
          class="flex flex-col items-center"
        />
      </router-link>
      <div
        v-if="isActive('/settings')"
        class="w-full h-1 bg-gray-400 mt-1"
      ></div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useMyUser } from "../data/data.js";
import Button from "./Button.vue";

export default {
  name: "Menu",
  components: {
    Button,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const me = useMyUser();

    const isActive = (path) => route.path === path;

    return {
      isActive,
      me,
    };
  },
};
</script>
