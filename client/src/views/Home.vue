<template>
  <main class="container mx-auto">
    <section class="flex flex-col items-center mt-10">
      <h1 class="text-5xl mb-5">TodosPage</h1>
      <!-- TODO LIST -->
      <TodoItem />
    </section>
  </main>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'Home',
  components: {
    TodoItem,
  },
};
</script>
