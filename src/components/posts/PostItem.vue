<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ contents }}
    </p>
    <small href="#">{{ createdAt }}</small>
  </AppCard>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';

defineProps({
  title: { type: String, required: true },
  contents: { type: String, required: true },
  createdAt: { type: [String, Date, Number], required: true },
});
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
