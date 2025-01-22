<template>
  <div
    class="bg-gray-100 w-full min-h-screen space-y-4 flex flex-col items-center"
  >
    <!-- Menu Component -->
    <Menu />

    <!-- Form Section -->
    <form
      @submit.prevent="handleSubmit"
      class="space-y-4 p-4 bg-white rounded-lg shadow-md"
    >
      <!-- Personal Settings Section -->
      <div class="text-lg font-semibold">Personal settings</div>

      <!-- Nickname Input -->
      <div class="flex items-center justify-right gap-8">
        <label for="editNickname">Edit nickname</label>
        <input
          id="editNickname"
          v-model="form.editNickname"
          type="text"
          class="border p-2"
        />
      </div>
      <p v-if="errors.editNickname" class="text-red-400">
        {{ errors.editNickname }}
      </p>

      <!-- Emoji Input -->
      <div class="flex items-center justify-right gap-8">
        <label for="editEmoji">Edit emoji</label>
        <input
          id="editEmoji"
          v-model="form.editEmoji"
          type="text"
          class="border p-2"
        />
      </div>
      <p v-if="errors.editEmoji" class="text-red-400">{{ errors.editEmoji }}</p>

      <!-- Admin Section -->
      <div v-if="me.role === 'admin'">
        <div class="text-lg font-semibold">For the whole platform</div>

        <!-- Max Daily Hours Input -->
        <div class="flex items-center justify-right gap-8">
          <label for="maxPlatformDailyHours"
            >Set max number of daily hours</label
          >
          <input
            id="maxPlatformDailyHours"
            v-model="form.maxPlatformDailyHours"
            type="number"
            class="border p-2"
          />
        </div>
        <p v-if="errors.maxPlatformDailyHours" class="text-red-400">
          {{ errors.maxPlatformDailyHours }}
        </p>

        <!-- Max Weekly Hours Input -->
        <div class="flex items-center justify-right gap-8">
          <label for="maxPlatformWeeklyHours"
            >Set max number of weekly hours</label
          >
          <input
            id="maxPlatformWeeklyHours"
            v-model="form.maxPlatformWeeklyHours"
            type="number"
            class="border p-2"
          />
        </div>
        <p v-if="errors.maxPlatformWeeklyHours" class="text-red-400">
          {{ errors.maxPlatformWeeklyHours }}
        </p>

        <!-- General User Settings -->
        <div class="text-lg font-semibold">General user setting</div>
        <div class="flex items-center justify-right gap-8">
          <label for="maxUserWeeklyHours">Set max number of weekly hours</label>
          <input
            id="maxUserWeeklyHours"
            v-model="form.maxUserWeeklyHours"
            type="number"
            class="border p-2"
          />
        </div>
        <p v-if="errors.maxUserWeeklyHours" class="text-red-400">
          {{ errors.maxUserWeeklyHours }}
        </p>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end">
        <Button label="Save" type="submit" class="bg-pink-600 text-white" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import * as Yup from "yup";
import Menu from "../components/Menu.vue"; // Adjust the path
import Button from "../components/Button.vue"; // Adjust the path
import { useMyUser, usePlatformData } from "../data/data"; // Adjust the path

export default {
  name: "SettingsPage",
  components: { Menu, Button },
  setup() {
    const me = useMyUser(); // Reactive user data
    const platformData = usePlatformData(); // Reactive platform data

    const form = reactive({
      editNickname: me.nickname || "",
      editEmoji: me.emoji || "",
      maxPlatformDailyHours: platformData.maxPlatformDailyHours || 14,
      maxPlatformWeeklyHours: platformData.maxPlatformWeeklyHours || 90,
      maxUserWeeklyHours: platformData.maxUserWeeklyHours || 3,
    });

    const errors = ref({});

    const validationSchema = Yup.object().shape({
      editNickname: Yup.string().required("Nickname is required"),
      editEmoji: Yup.string().required("Emoji is required"),
      maxPlatformDailyHours: Yup.number()
        .min(0, "Must be at least 0")
        .max(24, "Cannot be more than 24")
        .required("Max daily hours is required"),
      maxPlatformWeeklyHours: Yup.number()
        .min(0, "Must be at least 0")
        .max(168, "Cannot be more than 168")
        .required("Max weekly hours is required"),
      maxUserWeeklyHours: Yup.number()
        .min(0, "Must be at least 0")
        .max(168, "Cannot be more than 168")
        .required("Max user weekly hours is required"),
    });

    const handleSubmit = async () => {
      try {
        await validationSchema.validate(form, { abortEarly: false });
        console.log("Form values:", { ...form });
        errors.value = {}; // Clear errors on successful validation
      } catch (validationErrors) {
        // Collect validation errors
        errors.value = validationErrors.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
      }
    };

    return { form, errors, me, handleSubmit };
  },
};
</script>

<style scoped>
/* Add any additional scoped CSS here */
</style>
