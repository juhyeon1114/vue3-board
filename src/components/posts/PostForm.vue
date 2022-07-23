<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        v-focus
        v-color="'blue'"
        type="text"
        class="form-control"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
      />
    </div>
    <div class="mb-3">
      <label for="contents" class="form-label">내용</label>
      <textarea
        class="form-control"
        rows="3"
        :value="contents"
        @input="$emit('update:contents', $event.target.value)"
      ></textarea>
    </div>

    <div class="d-flex gap-2 mt-4">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script setup>
// const vFocus = {
//   mounted: el => {
//     el.focus();
//   },
// };

defineProps({
  title: String,
  contents: String,
});
defineEmits('update:title', 'update:contents');
</script>
