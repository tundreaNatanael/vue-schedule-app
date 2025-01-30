<script setup>
import Icon from "./Icon.vue";
import { defineProps } from "vue";

defineProps({
  icon: {
    type: String,
    default: "settings",
  },
  label: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <Icon :name="icon" :size="48" />
    <div class="text-[20px] font-bold">{{ label }} Services</div>
    <div>{{ content }}</div>
  </div>
</template>
