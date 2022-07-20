<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <PostItem
          :title="post.title"
          :contents="post.contents"
          :createdAt="post.createdAt"
          @click="onClickPostCard(post)"
        />
      </div>
    </div>

    <PostPagination
      :total="total"
      :perPage="LIMIT"
      :page="params._page"
      @change="fetchPosts"
    />

    <hr class="my-5" />

    <!-- <AppCard>
      <PostDetailView :id="1"></PostDetailView>
    </AppCard> -->
  </div>
</template>

<script setup>
// import PostDetailView from '@/views/posts/PostDetailView.vue';
// import AppCard from '@/components/AppCard.vue';
import PostPagination from '@/components/PostPagination.vue';
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const LIMIT = 6;
const total = ref([]);
const posts = ref([]);
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _limit: LIMIT,
  _page: 0,
});

const fetchPosts = async (newPage = 0) => {
  params.value._page = newPage;
  const { data, headers } = await getPosts(params.value);
  total.value = Number(headers['x-total-count'] || 0);
  posts.value = data || [];
};
fetchPosts();
// watchEffect(fetchPosts);

const onClickPostCard = post => {
  router.push({ name: 'PostDetail', params: { id: post.id } });
};
</script>

<style lang="scss" scoped></style>
