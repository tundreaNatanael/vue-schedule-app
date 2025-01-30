<template>
  <div class="flex justify-between px-4 py-4 gap-4">
    <Service
      v-for="service in services"
      :key="service.id"
      :icon="service.icon"
      :label="service.label"
      :content="service.content"
    />
  </div>
  <Solutions />
</template>

<script setup>
import Service from "../components/Service.vue";
import Solutions from "../components/Solutions.vue";

const services = [
  {
    id: 1,
    icon: "settings",
    label: "Business",
    content:
      "Duis eleifend molestie leo, at mollis eros rutrum sit amet. Nam venenatis enim at magna euismod congue.",
  },
  {
    id: 2,
    icon: "settings",
    label: "Corporate",
    content:
      "Fusce semper malesuada purus, vulpu tate interdum nunc tincidunt ut. Nulla imperdiet ut exat volutpat.",
  },
  {
    id: 3,
    icon: "settings",
    label: "Industrial",
    content:
      "Nulla imperdiet ut ex at volutpat. Nullam malesuada libero at gravida vehicula. libero atgravida vehicula.",
  },
];
</script>

<style scoped>
/* Add any specific scoped CSS if needed */
</style>
