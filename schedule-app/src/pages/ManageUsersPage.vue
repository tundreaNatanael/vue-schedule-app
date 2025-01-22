<template>
  <div
    class="bg-gray-100 w-full min-h-screen space-y-6 flex flex-col items-center"
  >
    <Menu />

    <div class="w-full max-w-3xl px-4">
      <input
        type="text"
        placeholder="Search users..."
        v-model="searchQuery"
        class="w-full px-4 py-3 rounded-lg shadow-md border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none text-gray-700"
      />
    </div>

    <div
      class="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-4"
    >
      <UserSettings
        v-for="user in filteredUsers"
        :key="user.id"
        :user="user"
      />
      <p
        v-if="filteredUsers.length === 0"
        class="text-gray-500 col-span-full text-center"
      >
        No users found matching "{{ searchQuery }}"
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Menu from "../components/Menu.vue";
import UserSettings from "../components/UserSettings.vue";
import { useUsers } from "../data/data";

export default {
  name: "ManageUsersPage",
  components: {
    Menu,
    UserSettings,
  },
  setup() {
    const users = useUsers();
    const searchQuery = ref("");

    const filteredUsers = computed(() =>
      users.filter(
        (user) =>
          user.firstname
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase()) ||
          user.lastname.toLowerCase().includes(searchQuery.value.toLowerCase()),
      ),
    );

    return {
      searchQuery,
      filteredUsers,
    };
  },
};
</script>

<style scoped>
/* Add any specific scoped CSS if needed */
</style>
