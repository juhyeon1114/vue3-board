<template>
  <div class="app-alert">
    <transition-group>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="alert"
        :class="typeStyle(item.type)"
      >
        {{ item.message }}
      </div>
    </transition-group>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});

const typeStyle = (type = 'error') => {
  return type === 'error' ? 'alert-danger' : 'alert-success';
};
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
  transform: translateX(-50px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
