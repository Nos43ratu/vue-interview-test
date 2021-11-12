<template>
  <label class="w-full flex flex-col mb-3">
    {{ field.label }}
    <input class="w-full rounded-md" type="text" :id="field.id" />
  </label>
</template>

<script>
export default {
  name: "Input",
  props: ["field"],
};
</script>

<style scoped></style>
