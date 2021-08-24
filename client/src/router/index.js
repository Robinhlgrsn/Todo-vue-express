import { createRouter, createWebHistory } from 'vue-router';
import TodoItem from '@/components/TodoItem.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TodoItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
