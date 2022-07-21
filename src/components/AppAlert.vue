<template>
  <transition>
    <div
      v-if="show"
      class="app-alert alert alert-primary"
      :class="classes"
      role="alert"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  show: { type: Boolean, default: false },
  message: { type: String, required: true },
  type: {
    type: String,
    default: 'error',
    validator: v => ['success', 'error'].includes(v),
  },
});

const classes = computed(() => {
  return props.type === 'error' ? 'alert-danger' : 'alert-success';
});
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}

/** Built in transition classes */
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
