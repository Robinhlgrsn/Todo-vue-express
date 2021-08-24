<template>
  <div class="flex flex-col w-2/3 border-1 rounded shadow-xl p-4">
    <header class="flex flex-row">
      <div class="flex-1">
      <h1 class="flex text-3xl">Titel todo</h1>
      </div>
      <div class="flex justify-end">
      <button class="w-6 rounded shadow bg-green-200">X</button>
      </div>
    </header>
    <section class="text-center">
      <p>28 Augusti 2021 12:00</p>
    </section>
    <section class="text-center m-4">
      <p>Det är kul att lära sig express!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
};
</script>

<style>

</style>
