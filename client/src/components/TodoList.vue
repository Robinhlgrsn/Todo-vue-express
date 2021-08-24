<template>
<section class="flex flex-col items-center mt-10">
  <h1 class="text-6xl font-bold">Todos!</h1>
    <section v-for="todo in todos" :key="todo.id"
      class="flex flex-col w-2/3 border-1 rounded my-4 shadow-xl p-4">
      <TodoItem
        :id="todo.id"
        :title="todo.title"
        :description="todo.description"
        :date="todo.date" />
    </section>
</section>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem,
  },
};
</script>

<style>

</style>
