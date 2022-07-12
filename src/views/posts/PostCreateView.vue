<template>
  <div>
    <h2>게시글 등록 {{ $route.params.id }}</h2>
    <hr class="my-4" />

    <form @submit.prevent="onSubmitForm">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="form.title"
        />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea
          class="form-control"
          id="contents"
          rows="3"
          v-model="form.contents"
        ></textarea>
      </div>

      <div class="pt-4">
        <button type="button" class="btn btn-outline-dark me-2">목록</button>
        <button type="submit" class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { createPost } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
  title: '',
  contents: '',
});
const router = useRouter();

const onSubmitForm = async () => {
  const data = { ...form.value, createdAt: Date.now() };
  try {
    const res = await createPost(data);
    console.log('submit', res);
    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
