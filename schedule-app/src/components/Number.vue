<script setup>
import { defineProps, ref, onMounted, watch } from "vue";

const props = defineProps({
  number: {
    type: Number,
    default: 30,
  },
  afterNumber: {
    type: String,
    default: "k",
  },
  label: {
    type: String,
    default: "",
  },
});

const increasingNumber = ref(0);
const numberColorClass = ref("text-[30px] font-bold text-red-500");

onMounted(() => {
  setInterval(() => {
    if (increasingNumber.value < props.number) {
      increasingNumber.value += 10;
    }
  }, 700);
});

watch(increasingNumber, (newNumber) => {
  console.log(numberColorClass.value);
  if (10 <= newNumber && newNumber < 20)
    numberColorClass.value = "text-[30px] font-bold text-blue-500";
  else if (20 <= newNumber)
    numberColorClass.value = "text-[30px] font-bold text-yellow-500";
  else numberColorClass.value = "text-[30px] font-bold text-red-500";
});
</script>

<template>
  <div>
    <div :class="numberColorClass">
      {{ increasingNumber }} {{ afterNumber }}
    </div>
    <div>{{ label }}</div>
  </div>
</template>
