<template>
  <section class="flex flex-col items-center mt-10">
    <h1 class="text-6xl font-bold my-4">Add new Todo!</h1>
    <form class="flex flex-col rounded shadow m4 p-10">
      <input class="m-4 border shadow py-2 px-3" placeholder="title" type="text">
      <input class="m-4" type="date">
      <input class="m-4 border shadow py-2 px-3" placeholder="description" type="text">
      <button class="border rounded bg-green-200 hover:bg-green-500  py-1">Add Todo</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'TodoForm',
};
</script>

<style>

</style>
