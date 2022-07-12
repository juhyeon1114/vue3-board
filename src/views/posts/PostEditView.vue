<template>
  <div>
    <h2>게시글 수정 {{ $route.params.id }}</h2>
    <hr class="my-4" />

    <form @submit.prevent="onSubmitForm">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="post.title"
        />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea
          class="form-control"
          id="contents"
          rows="3"
          v-model="post.contents"
        ></textarea>
      </div>

      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goToDetail"
        >
          취소
        </button>
        <button type="submit" class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const post = ref({});
const id = route.params.id;

const fetchPost = async () => {
  post.value = {};
  try {
    const data = await getPostById(id);
    post.value = { ...data };
  } catch (error) {
    console.error(error);
  }
};

const goToDetail = () => {
  router.push({ name: 'PostDetail', params: { id: route.params.id } });
};

const onSubmitForm = async () => {
  try {
    await updatePost(id, post.value);
    router.push({ name: 'PostDetail', params: { id } });
  } catch (error) {
    console.error(error);
  }
};

fetchPost();
</script>

<style lang="scss" scoped></style>
