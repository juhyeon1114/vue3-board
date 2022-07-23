<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ contents }}
    </p>
    <small href="#">{{ createdDate }}</small>

    <template #footer>
      <div style="text-align: right">
        <button class="btn p-0" @click.stop="$emit('modal')">
          <i class="bi bi-emoji-sunglasses"></i>
        </button>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  contents: { type: String, required: true },
  createdAt: { type: [String, Date, Number], required: true },
});
const dayjs = inject('dayjs');
const createdDate = computed(() =>
  dayjs(props.createdAt).format('YYYY. MM. DD HH:mm:ss'),
);
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
