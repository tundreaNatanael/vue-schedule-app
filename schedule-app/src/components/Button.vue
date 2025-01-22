<template>
  <button
    @click="onClick"
    :class="[
      'flex items-center justify-center gap-3 px-5 py-3 font-medium text-sm sm:text-base rounded-lg shadow-lg',
      className,
    ]"
    :disabled="disabled"
  >
    <Icon :name="icon" :size="24" :color="iconColor" />
    {{ label }}
  </button>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "Button",
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "white",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    label: {
      type: String,
    },
    className: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
