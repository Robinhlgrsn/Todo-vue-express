<template>
  <section class="flex flex-col items-center mt-10">
    <h1 class="text-6xl font-bold my-4">Add new Todo!</h1>
    <form @submit.prevent="submitTodo" class="flex flex-col rounded shadow m4 p-10">
      <input v-model="title" class="m-4 border shadow py-2 px-3" placeholder="title" type="text">
      <input v-model="date" class="m-4" type="date">
      <input
        v-model="description"
        class="m-4 border shadow py-2 px-3"
        placeholder="description" type="text">
      <button class="border rounded bg-green-200 hover:bg-green-500 py-1">Add Todo</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      title: '',
      date: '',
      description: '',
    };
  },
  methods: {
    submitTodo() {
      this.$emit('submitNewTodo', {
        id: Math.floor(Math.random() * 10000000),
        title: this.title,
        date: this.date,
        description: this.description,
      });
    },
  },
};
</script>

<style>

</style>
