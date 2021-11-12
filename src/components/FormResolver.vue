<template>
  <div class="flex flex-col">
    <div class="flex flex-row justify-between mb-3">
      <span>form id: {{ form.id }}</span>
      <span>status: {{ form.status }}%</span>
    </div>
    <form class="flex flex-col">
      <FieldResolver
        v-for="field in form.fields"
        :key="field.id"
        v-bind:field="field"
      />
    </form>
  </div>
</template>

<script>
import FieldResolver from "./FieldResolver";
export default {
  name: "FormResolver",
  components: { FieldResolver },
  props: ["form"],
};
</script>

<style scoped></style>
