<template>
  <fieldset class="flex flex-col mb-3 w-full">
    <legend>{{ field.label }}</legend>
    <span class="w-full flex flex-row justify-between items-center">
      <label>from: <input type="date" class="rounded-md" /></label>
      <label>to: <input type="date" class="rounded-md" /></label>
    </span>
  </fieldset>
</template>

<script>
export default {
  name: "DateRange",
  props: ["field"],
};
</script>

<style scoped></style>
