<template>
<section class="flex flex-col items-center mt-10">
  <h1 class="text-5xl font-bold" v-if="todos.length > 0">Todos</h1>
  <h1 class="text-red-500 text-3xl font-bold" v-else-if="error">Could not fetch todos!</h1>
  <h1 class="text-3xl font-bold" v-else>No todos remaining</h1>
    <section v-for="todo in todos" :key="todo.id"
      class="flex flex-col w-2/3 border-1 rounded my-4 shadow-xl p-4">
      <TodoItem
        @remove-todo="removeTodo"
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
  props: ['todos', 'error'],
  emits: ['remove-todo'],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id);
    },
  },
};
</script>

<style>

</style>
