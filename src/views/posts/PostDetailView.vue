<template>
  <AppLoading v-if="loading" />
  <AppError v-else-if="error" :message="error.message" />
  <div v-else-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.contents }}</p>
    <p class="text-muted">
      {{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
    </p>
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
import { deletePost } from '@/api/posts';
import { useRoute, useRouter } from 'vue-router';
import { useAxios } from '@/composables/useAxios';

const props = defineProps({
  id: { type: [String, Number] },
});

const router = useRouter();
const route = useRoute();
const id = route.params.id || props.id;

/**
 * ref & reactive -> Variables는 ref, 배열이나 객체는 주로 reactive로 선언
 *
 * ref
 * 장) 객체 전체 할당 가능
 * 단) data.value.title, data.value.contents
 *
 * reactive
 * 장) data.title, data.contents
 * 단) 객체 전체 할당 불가능
 */

const {
  data: post,
  error,
  loading,
} = useAxios(`/posts/${id}`, { method: 'get' });

const goToList = () => {
  router.push({ name: 'PostList' });
};

const goToEdit = () => {
  router.push({ name: 'PostEdit', params: { id: route.params.id } });
};

const onClickDelete = async () => {
  try {
    const res = await deletePost(id);
    console.log(res);
    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
