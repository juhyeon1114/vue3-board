<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ contents }}</p>
    <p class="text-muted">{{ createdAt }}</p>
    <hr class="my-4" />
    <div class="row">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-success" @click="goToList">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goToEdit">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="onClickDelete">
          삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const goToList = () => {
  router.push({ name: 'PostList' });
};

const goToEdit = () => {
  router.push({ name: 'PostEdit', params: { id: route.params.id } });
};

const onClickDelete = () => {
  console.log('hi');
};
</script>

<style lang="scss" scoped></style>
