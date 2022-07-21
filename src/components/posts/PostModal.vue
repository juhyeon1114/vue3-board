<template>
  <AppModal v-model="show" title="게시글">
    <div class="row g-3">
      <div class="col-3 text-muted">제목</div>
      <div class="col-9">{{ post.title }}</div>
      <div class="col-3 text-muted">내용</div>
      <div class="col-9">{{ post.contents }}</div>
      <div class="col-3 text-muted">등록일</div>
      <div class="col-9">{{ post.createdAt }}</div>
    </div>

    <template #actions>
      <button
        type="button"
        class="btn btn-secondary"
        @click="$emit('update:modelValue', false)"
      >
        닫기
      </button>
    </template>
  </AppModal>
</template>

<script setup>
import AppModal from '@/components/AppModal.vue';
import { computed } from 'vue';

const props = defineProps({
  post: { default: {} },
  modelValue: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue']);

const show = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emit('update:modelValue', v);
  },
});
</script>

<style lang="scss" scoped></style>
