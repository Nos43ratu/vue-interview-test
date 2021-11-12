<template>
  <label class="flex flex-col w-full">
    {{ field.label }}
    <select :id="field.id" class="w-full rounded-md mb-3">
      <option v-for="(option, index) in field.options" :key="index">
        {{ option.value }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: "Select",
  props: ["field"],
};
</script>

<style scoped></style>
