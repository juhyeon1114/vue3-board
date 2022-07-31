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
import MyPage from '@/views/MyPage.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomeView,
    beforeEnter: (to, from) => {
      console.log('Before router enter', to, from);
    },
  },
  { name: 'About', path: '/about', component: AboutView },
  { name: 'PostList', path: '/posts', component: PostListView },
  { name: 'PostCreate', path: '/posts/create', component: PostCreateView },
  { name: 'PostEdit', path: '/posts/:id/edit', component: PostEditView },
  {
    name: 'PostDetail',
    path: '/posts/:id/detail',
    component: PostDetailView,
    // props: true,
    props: route => ({ id: Number(route.params.id) }),
  },
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
  {
    name: 'MyPage',
    path: '/my',
    component: MyPage,
    meta: { auth: true },
  },
  { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log('Before each', to, from);

  if (to?.meta?.auth) {
    return '/';
  }
});

export default router;
