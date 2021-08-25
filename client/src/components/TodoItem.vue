<template>
  <div>
    <header class="flex flex-row">
      <div class="flex-1">
      <h1 class="flex font-bold text-3xl">{{ title }}</h1>
      </div>
      <div class="flex justify-end">
      <button @click="onRemoveTodo"
        class="w-6 my-1 rounded shadow bg-green-200 font-bold hover:bg-green-500">X</button>
      </div>
    </header>
    <section class="font-bold text-center">
      <p>{{ new Date(date).toLocaleDateString('se-SE', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } ) }}</p>
    </section>
    <section class="text-center m-4">
      <p class="break-words">{{ description }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['title', 'description', 'date', 'id'],
  emits: ['remove-todo'],
  methods: {
    onRemoveTodo() {
      this.$emit('remove-todo', this.id);
    },
  },
};
</script>

<style>

</style>
