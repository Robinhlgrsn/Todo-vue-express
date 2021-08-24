<template>
  <div>
    <header class="flex flex-row">
      <div class="flex-1">
      <h1 class="flex text-3xl">{{ title }}</h1>
      </div>
      <div class="flex justify-end">
      <button class="w-6 rounded shadow bg-green-200">X</button>
      </div>
    </header>
    <section class="font-bold text-center">
      <p>{{ date }}</p>
    </section>
    <section class="text-center m-4">
      <p>{{ description }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['title', 'description', 'date'],
};
</script>

<style>

</style>
