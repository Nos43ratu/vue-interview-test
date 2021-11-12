<template>
  <div class="flex flex-col h-full w-full">
    <Header />
    <main class="flex-1"><slot /></main>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Layout",
  components: {
    Header,
  },
};
</script>

<style scoped></style>
