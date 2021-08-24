<template>
  <header class="flex justify-center py-5 bg-green-200">
    <section class="flex container mx-auto">
      <nav class="flex font-bold w-2/3 space-x-3">
        <router-link :to="{name: 'Home' }">Todo</router-link>
        <router-link to="/addTodo">Add new Todo</router-link>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>

</style>
