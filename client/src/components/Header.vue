<template>
  <header class="flex justify-center py-5 bg-green-200">
    <section class="flex container mx-auto">
      <nav class="flex font-bold w-2/3 space-x-3">
        <button @click.prevent="onToggleForm"  v-if="!toggleForm">Add Todo</button>
        <button @click.prevent="onToggleForm" v-else>Todos</button>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['toggleForm'],
  methods: {
    onToggleForm() {
      this.$emit('onToggleForm');
    },
  },
};
</script>

<style>

</style>
