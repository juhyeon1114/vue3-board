import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  { name: 'Home', path: '/', component: HomeView },
  { name: 'About', path: '/about', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
