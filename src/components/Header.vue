<template>
  <header class="w-full bg-gray-800 px-5 py-5">
    <nav>
      <ul class="flex flex-row justify-between items-center">
        <li class="text-blue-500 text-2xl hover:text-blue-400 hover:underline">
          <a href="/">Home</a>
        </li>
        <li
          class="
            bg-green-600
            rounded-lg
            px-5
            py-2
            text-white
            hover:bg-green-700
          "
        >
          <a href="/create">Create form</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
