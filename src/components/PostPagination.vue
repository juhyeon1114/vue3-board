<template>
  <nav class="mt-5">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" @click="onClickPage(1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="len in pages"
        :key="`page-${len}`"
        class="page-item"
        :class="[page === len ? 'active' : '']"
        @click="onClickPage(len)"
      >
        <a class="page-link">{{ len }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="onClickPage(pages)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['change']);
const props = defineProps({
  total: { type: Number, required: true },
  page: { type: Number, required: true },
  perPage: { type: Number, default: 9 },
});

const pages = computed(() => {
  return Math.ceil(props.total / props.perPage);
});

const onClickPage = page => {
  const newPage = page;
  if (props.page === newPage) return;
  emit('change', newPage);
};
</script>

<style scoped>
.page-item {
  cursor: pointer;
  user-select: none;
}
</style>
