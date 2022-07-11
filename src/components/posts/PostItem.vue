<template>
  <div class="card">
    <div class="card-header">Featured</div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>
      <small href="#">{{ createdAt }}</small>
    </div>
  </div>
</template>

<script setup>
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
