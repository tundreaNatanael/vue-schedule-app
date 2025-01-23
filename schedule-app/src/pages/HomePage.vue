<template>
  <div
    class="bg-gray-100 w-full min-h-screen space-y-4 flex flex-col items-center"
  >
    <div
      :class="[
        'flex items-center justify-center gap-4 text-2xl font-bold rounded-lg shadow-lg px-5 py-3 bg-white',
        me.role === 'admin'
          ? ''
          : me.perWeekHours - me.hoursConsumed > 0
            ? 'bg-green-200'
            : 'bg-pink-200',
      ]"
    >
      <span>
        {{
          me.role === "admin" ? "Your hours this week" : "Hours left this week"
        }}
      </span>
      <Icon name="arrowRight" :size="48" color="gray" />
      <span>{{
        me.role === "admin"
          ? me.hoursConsumed
          : me.perWeekHours - me.hoursConsumed
      }}</span>
    </div>

    <Calendar />

    <Button label="Schedule" icon="addBox" class="bg-blue-600 text-white" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Menu from "../components/Menu.vue";
import Button from "../components/Button.vue";
import Icon from "../components/Icon.vue";
import Calendar from "../components/Calendar.vue";
import { useMyUser } from "../data/data";

export default {
  name: "HomePage",
  components: {
    Menu,
    Button,
    Icon,
    Calendar,
  },
  setup() {
    const me = useMyUser();

    return {
      me,
    };
  },
};
</script>

<style scoped>
/* Add any specific scoped CSS if needed */
</style>
