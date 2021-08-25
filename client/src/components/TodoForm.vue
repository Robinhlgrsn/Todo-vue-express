<template>
  <section class="flex flex-col items-center mt-10">
    <h1 class="text-5xl font-bold my-4">Add new Todo</h1>
    <form @submit.prevent="submitTodo" class="flex flex-col w-2/3 rounded shadow-lg p-10 mx-10">
      <input v-model="title" class="my-4 border shadow py-2 px-3" placeholder="title" type="text">
      <input v-model="date" class="my-4 " type="date">
      <textarea
        v-model="description"
        class="box-border max-w-full my-4 border shadow py-2 px-3"
        placeholder="description"></textarea>
      <button class="border font-bold
        rounded bg-green-200 hover:bg-green-500 mx-5 py-1">Add Todo</button>
      <div class="flex justify-center" v-if="error.length > 0">
        <p class="text-red-500">
        {{error[0]}}
        </p>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      title: null,
      date: null,
      description: null,
      error: [],
    };
  },
  methods: {
    submitTodo() {
      this.error = [];
      if (!this.title) {
        console.log('titel saknas!');
        this.error.push('Please enter title');
        return;
      }
      if (!this.date) {
        console.log('date saknas!');
        this.error.push('Please enter date');
        return;
      }
      if (!this.description) {
        console.log('description saknas!');
        this.error.push('Please enter description');
        return;
      }
      this.$emit('submitNewTodo', {
        id: Math.floor(Math.random() * 10000000),
        title: this.title.trim(),
        date: this.date,
        description: this.description.trim(),
      });
    },
  },
};
</script>

<style>

</style>
