import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AddTodo from '@/views/AddTodo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/addtodo',
    name: 'AddTodo',
    component: AddTodo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-gray-500 underline',
});

export default router;
