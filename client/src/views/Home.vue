<template>
  <div>
    <AppHeader @onToggleForm="toggleTodoForm" :toggleForm="toggleForm" />
    <main class="container mx-auto" v-if="!toggleForm">
        <TodoList :error="error" @remove-todo="removeTodo" :todos="todos" />
    </main>
    <section class="container mx-auto" v-else>
      <TodoForm @submitNewTodo="postNewTodo" />
    </section>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import TodoForm from '@/components/TodoForm.vue';
import AppHeader from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    TodoList,
    TodoForm,
    AppHeader,
  },
  emits: ['remove-todo', 'onToggleForm', 'submitNewTodo'],
  data() {
    return {
      todos: [],
      error: false,
      toggleForm: false,
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:8000/todos');
      const data = await response.json();
      this.todos = data;
    } catch (err) {
      this.error = true;
    }
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
        this.error = true;
      }
    },
    async postNewTodo(formObject) {
      try {
        const response = await fetch('http://localhost:8000/todos', {
          method: 'POST',
          body: JSON.stringify(formObject),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log(data);
        this.todos.push(data);
        this.toggleForm = false;
      } catch (err) {
        this.error = true;
      }
    },
    toggleTodoForm() {
      this.toggleForm = !this.toggleForm;
    },
    sortTodos() {
      const sortering = this.todos.sort((a, b) => new Date(a.date) - new Date(b.date));
      console.log(sortering);
    },
  },
};
</script>
