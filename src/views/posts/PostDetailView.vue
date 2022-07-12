<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.contents }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
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
import { getPostById } from '@/api/posts';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  id: { type: [String, Number] },
});

const router = useRouter();
const route = useRoute();
const id = route.params.id || props.id;
const post = ref({});
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

const fetchPost = () => {
  const data = getPostById(id);
  post.value = { ...data };
};

const goToList = () => {
  router.push({ name: 'PostList' });
};

const goToEdit = () => {
  router.push({ name: 'PostEdit', params: { id: route.params.id } });
};

const onClickDelete = () => {
  console.log('hi');
};

fetchPost();
</script>

<style lang="scss" scoped></style>
