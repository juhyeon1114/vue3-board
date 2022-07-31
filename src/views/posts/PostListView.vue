<template>
  <div>
    <h2>게시글 목록</h2>

    <hr class="my-4" />

    <AppLoading v-if="loading" />
    <AppError v-else-if="error" :message="error.message" />
    <template v-else>
      <form @submit.prevent>
        <div class="row g-3">
          <div class="col">
            <input
              type="text"
              class="form-control"
              v-model="params.title_like"
            />
          </div>
          <div class="col">
            <select v-model="params._limit" class="form-select">
              <option value="3">3개씩</option>
              <option value="6">6개씩</option>
              <option value="9">9개씩</option>
            </select>
          </div>
        </div>
      </form>

      <hr class="my-4" />

      <div class="row g-3">
        <div class="col-4" v-for="post in posts" :key="post.id">
          <PostItem
            :title="post.title"
            :contents="post.contents"
            :createdAt="post.createdAt"
            @click="onClickPostCard(post)"
            @modal="openModal(post)"
          />
        </div>
      </div>

      <PostPagination
        :total="total"
        :perPage="params._limit"
        :page="params._page"
        @change="v => (params._page = v)"
      />

      <PostModal v-model="show" :post="modalItem"></PostModal>
    </template>
  </div>
</template>

<script setup>
import AppError from '@/components/app/AppError.vue';
import AppLoading from '@/components/app/AppLoading.vue';
import PostPagination from '@/components/posts/PostPagination.vue';
import PostItem from '@/components/posts/PostItem.vue';
// import { getPosts } from '@/api/posts';
// import { ref, watchEffect } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostModal from '@/components/posts/PostModal.vue';
import { useAxios } from '@/composables/useAxios';

const router = useRouter();
// const total = ref([]);
// const posts = ref([]);
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _limit: 3,
  _page: 1,
  title_like: '',
});
const show = ref(false);
const modalItem = ref(null);
// const error = ref(null);
// const loading = ref(false);
const {
  data: posts,
  error,
  loading,
  total,
} = useAxios('/posts', { method: 'get', params });

// const fetchPosts = async () => {
//   try {
//     loading.value = true;
//     const { data, headers } = await getPosts(params.value);
//     total.value = Number(headers['x-total-count'] || 0);
//     posts.value = data || [];
//     error.value = false;
//   } catch (err) {
//     console.error(err);
//     total.value = 0;
//     posts.value = [];
//     error.value = err;
//   } finally {
//     loading.value = false;
//   }
// };

const onClickPostCard = post => {
  router.push({ name: 'PostDetail', params: { id: post.id } });
};

const openModal = post => {
  show.value = true;
  modalItem.value = post;
};

// const closeModal = () => {
//   show.value = false;
//   modalItem.value = null;
// };

// fetchPosts();

/**
 * watchEffect(func)
 * @description func안에서 사용되는 반응형 값들이 변경되면 자동적으로 func를 재실행
 */
// watchEffect(fetchPosts);
</script>

<style lang="scss" scoped></style>
