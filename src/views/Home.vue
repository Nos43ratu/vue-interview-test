<template>
  <div class="max-w-[700px] mx-auto flex flex-col py-5">
    <div v-for="form in forms" :key="form.id">
      <FormResolver v-bind:form="form" />
      <button
        @click="updateForm(form.id)"
        class="mb-5 bg-green-600 rounded-lg px-5 py-2 text-white ml-auto"
      >
        update
      </button>
    </div>
  </div>
</template>

<script>
import FormResolver from "../components/FormResolver";

export default {
  name: "Home",
  components: { FormResolver },
  data() {
    return {
      forms: [],
    };
  },
  methods: {
    updateForm(id) {
      this.$router.push("/update/" + id);
    },
  },
  beforeMount() {
    const savedForms = JSON.parse(localStorage.getItem("forms"));
    const defaultForms = {
      forms: [
        {
          id: 0,
          status: 0,
          fields: [
            {
              id: 0,
              label: "Default form select",
              type: "select",
              options: [
                {
                  id: 1,
                  value: "Option 1",
                },
                {
                  id: 2,
                  value: "Option 2",
                },
                {
                  id: 3,
                  value: "Option 3",
                },
              ],
            },
            {
              id: 1,
              label: "Default form date range",
              type: "dataRange",
              options: {
                format: "DD/MM/YYYY",
                from: null,
                to: null,
              },
            },
            {
              id: 2,
              label: "Default form name",
              type: "input",
            },
            {
              id: 3,
              label: "Default form description",
              type: "input",
            },
          ],
        },
      ],
    };
    if (savedForms) {
      return (this.forms = savedForms.forms);
    }
    this.forms = defaultForms.forms;
    localStorage.setItem("forms", JSON.stringify(defaultForms));
  },
};
</script>

<style scoped></style>
