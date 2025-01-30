<script setup>
import Number from "../components/Number.vue";

const numberValues = [
  {
    id: 1,
    number: 50,
    afterNumber: "k",
    label: "Customers",
  },
  {
    id: 2,
    number: 30,
    afterNumber: "+",
    label: "Experience",
  },
  {
    id: 3,
    number: 70,
    afterNumber: "k",
    label: "Project Done",
  },
];
</script>

<template>
  <div class="flex justify-between px-4 py-4 gap-4">
    <img src="../data/pic.png" alt="image" />
    <div class="px-4 py-4 gap-10">
      <h1 class="text-[25px] font-bold">BUSINESS AGENCY SOLUTIONS</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Suspendisse ex neque, sollicitudin in velit eu, luctus
        gravida nunc.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <div class="flex justify-between px-4 py-4 gap-4">
        <Number
          v-for="numberValue in numberValues"
          :key="numberValue.id"
          :number="numberValue.number"
          :afterNumber="numberValue.afterNumber"
          :label="numberValue.label"
          @update-counter="handleCounter"
        />
      </div>
    </div>
  </div>
</template>
