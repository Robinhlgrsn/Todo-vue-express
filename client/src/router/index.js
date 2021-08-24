import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  { path: '/', component: Home, alias: '/home' },
  {
    path: '/todos',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-gray-500 underline',
});

export default router;
