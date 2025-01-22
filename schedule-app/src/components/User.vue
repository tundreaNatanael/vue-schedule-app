<template>
  <div class="mt-4 p-4">
    <p class="text-xl font-semibold">
      {{ user.firstname }} {{ user.lastname }}
    </p>

    <p class="mt-2"><strong>Email:</strong> {{ user.email }}</p>

    <p class="mt-2"><strong>Role:</strong> {{ user.role }}</p>

    <p class="flex items-center mt-2 gap-3">
      <strong>Number of washes left:</strong>
      <span
        :class="[
          'rounded-lg shadow-lg p-2',
          user.hoursConsumed >= user.perWeekHours
            ? 'bg-pink-600 text-white'
            : 'bg-green-600 text-white',
        ]"
      >
        {{ user.hoursConsumed }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
