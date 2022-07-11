import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedHome from '@/views/nested/NestedHome.vue';
import NestedOne from '@/views/nested/NestedOne.vue';
import NestedTwo from '@/views/nested/NestedTwo.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { name: 'Home', path: '/', component: HomeView },
  { name: 'About', path: '/about', component: AboutView },
  { name: 'PostList', path: '/posts', component: PostListView },
  { name: 'PostCreate', path: '/posts/create', component: PostCreateView },
  { name: 'PostEdit', path: '/posts/:id/edit', component: PostEditView },
  { name: 'PostDetail', path: '/posts/:id/detail', component: PostDetailView },
  {
    name: 'NestedView',
    path: '/nested',
    component: NestedView,
    children: [
      { name: 'NestedHome', path: '', component: NestedHome },
      { name: 'NestedOne', path: 'one', component: NestedOne },
      { name: 'NestedTwo', path: 'two', component: NestedTwo },
    ],
  },
  { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
