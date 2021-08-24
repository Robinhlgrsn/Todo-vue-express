<template>
  <main class="container mx-auto">
      <TodoList :todos="todos" />
  </main>
</template>

<script>
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'Home',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Learn blabla',
          date: new Date().toLocaleDateString('se-SE', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          }),
          description: 'Det är bra att lära sig blabla',
        },
        {
          id: 2,
          title: 'Learn balbla',
          date: new Date().toLocaleDateString('se-SE', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          }),
          description: 'Det är bra att lära sig blabla',
        },
        {
          id: 3,
          title: 'Learn blabaala',
          date: new Date().toLocaleDateString('se-SE', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          }),
          description: 'Det är bra att lära sig blabla',
        },
      ],
    };
  },
};
</script>
