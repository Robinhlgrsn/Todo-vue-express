<template>
  <header class="flex justify-center py-5 bg-green-200">
    <section class="flex container mx-auto">
      <nav class="flex font-bold w-2/3 space-x-3" v-if="toggleForm">
        <button @click.prevent="toggleForm">Add Todo</button>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleForm() {
      this.$emit('toggle-form');
    },
  },
};
</script>

<style>

</style>
