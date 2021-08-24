<template>
  <div class="home">
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  name: 'Home',
  components: {
    TodoItem,
  },
};
</script>
