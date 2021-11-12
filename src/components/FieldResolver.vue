<template>
  <div>
    <component v-bind:is="component" v-bind:field="field" />
  </div>
</template>

<script>
import Input from "./Feilds/Input";
import Select from "./Feilds/Select";
import DateRange from "./Feilds/DateRange";
export default {
  name: "FieldResolver",
  props: ["field"],
  components: {
    Input,
    Select,
    DateRange,
  },
  data() {
    return {
      component: "Input",
    };
  },
  beforeMount() {
    switch (this.field.type) {
      case "select":
        this.component = "Select";
        break;
      case "input":
        this.component = "Input";
        break;
      case "dataRange":
        this.component = "DateRange";
        break;
      default:
        this.component = "Input";
        break;
    }
  },
  beforeCreate() {},
};
</script>

<style scoped></style>
