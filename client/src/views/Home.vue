<template>
  <main class="container mx-auto">
      <TodoList @remove-todo="removeTodo" :todos="todos" />
  </main>
</template>

<script>
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'Home',
  components: {
    TodoList,
  },
  emits: ['remove-todo'],
  data() {
    return {
      todos: [],
    };
  },
  async created() {
    const response = await fetch('http://localhost:8000/todos');
    const data = await response.json();
    this.todos = data;
  },
  methods: {
    async removeTodo(id) {
      try {
        const response = await fetch(`http://localhost:8000/todos/${id}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        this.todos = this.todos.filter((todo) => todo.id !== data.id);
      } catch (err) {
        console.log(err, 'i error');
      }
    },
  },
};
</script>
