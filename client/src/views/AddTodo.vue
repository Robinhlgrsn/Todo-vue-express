<template>
  <main class="container mx-auto">
    <TodoForm />
  </main>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue';

export default {
  name: 'AddTodo',
  components: {
    TodoForm,
  },
};
</script>

<style>

</style>
