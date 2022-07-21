<template>
  <div>
    <h2>게시글 등록 {{ $route.params.id }}</h2>
    <hr class="my-4" />
    <PostForm
      @submit.prevent="onSubmitForm"
      v-model:title="form.title"
      v-model:contents="form.contents"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-dark me-2">목록</button>
        <button type="submit" class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import PostForm from '@/components/posts/PostForm.vue';
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
