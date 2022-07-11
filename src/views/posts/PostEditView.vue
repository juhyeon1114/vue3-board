<template>
  <div>
    <h2>게시글 수정 {{ $route.params.id }}</h2>
    <hr class="my-4" />

    <form @submit.prevent="onSubmitForm">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" v-model="title" />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea
          class="form-control"
          id="contents"
          rows="3"
          v-model="contents"
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
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const title = reactive();
const contents = reactive();
const route = useRoute();
const router = useRouter();

const goToDetail = () => {
  router.push({ name: 'PostDetail', params: { id: route.params.id } });
};

const onSubmitForm = () => {
  console.log('submit', title, contents);
};
</script>

<style lang="scss" scoped></style>
