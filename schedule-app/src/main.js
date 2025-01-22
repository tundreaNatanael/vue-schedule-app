import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

const routes = [
  { path: "/", component: () => import("./pages/LoginPage.vue") },
  { path: "/home", component: () => import("./pages/HomePage.vue") },
  {
    path: "/manage-users",
    component: () => import("./pages/ManageUsersPage.vue"),
  },
  { path: "/settings", component: () => import("./pages/SettingsPage.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
