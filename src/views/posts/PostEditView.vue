<template>
  <AppLoading v-if="loading" />
  <AppError v-else-if="error" :message="error.message" />
  <div v-else>
    <h2>게시글 수정 {{ $route.params.id }}</h2>
    <hr class="my-4" />

    <PostForm
      @submit.prevent="onSubmitForm"
      v-model:title="post.title"
      v-model:contents="post.contents"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goToDetail"
        >
          취소
        </button>
        <button v-if="!editLoading" type="submit" class="btn btn-primary">
          저장
        </button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import PostForm from '@/components/posts/PostForm.vue';
import { useRoute, useRouter } from 'vue-router';
import { useAlert } from '@/composables/useAlert';
import { useAxios } from '@/composables/useAxios';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
let editLoading = null;

const {
  data: post,
  error,
  loading,
} = useAxios(`/posts/${id}`, { method: 'get' });

const { turnOnAlert, turnOnSuccess } = useAlert();

const goToDetail = () => {
  router.push({ name: 'PostDetail', params: { id: route.params.id } });
};

const onSubmitForm = async () => {
  const { instance, loading } = useAxios(`/posts/${id}`, {
    method: 'PUT',
    data: post.value,
  });
  editLoading = loading;
  try {
    await instance;
    turnOnSuccess(`수정 완료 ${new Date().valueOf()}`);
    router.push({ name: 'PostDetail', params: { id } });
  } catch (error) {
    turnOnAlert('오류');
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
