<template>
  <div class="max-w-[750px] mx-auto">
    <div class="flex flex-col max-w-[750px]">
      <FieldResolver
        v-for="field in form.fields"
        :key="field.id"
        v-bind:field="field"
      />
      <button
        class="bg-green-600 rounded-lg px-5 py-2 text-white mt-5"
        @click="showCreateFeildModal = true"
      >
        Add field
      </button>
      <button
        class="bg-green-600 rounded-lg px-5 py-2 text-white mt-5"
        @click="createForm"
      >
        Create form
      </button>
    </div>
    <div
      v-if="showCreateFeildModal"
      class="
        rounded-md
        shadow
        p-5
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        w-[500px]
        bg-gray-200
        flex flex-col
        items-center
      "
    >
      <button
        class="bg-red-300 rounded-lg px-5 py-2 text-white"
        @click="closeModal"
      >
        close
      </button>
      <form @submit="createField">
        <label class="flex flex-col w-full">
          select type
          <select v-model="newFieldData.type" id="type" required>
            <option value="select">select</option>
            <option value="input">input</option>
            <option value="dataRange">dateRange</option>
          </select>
          <div v-if="newFieldData.type === 'select'" class="flex flex-col">
            <span v-for="option in newFieldOptions" :key="option.id">{{
              option.value
            }}</span>
            <input type="text" v-model="newFieldOptionValue" />
            <button
              @click="addOption"
              type="button"
              class="bg-green-600 rounded-lg px-5 py-2 text-white"
            >
              add option
            </button>
          </div>
        </label>
        <label class="flex flex-col w-full">
          label
          <input v-model="newFieldData.label" id="name" type="text" required />
        </label>
        <button
          class="bg-green-600 rounded-lg px-5 py-2 text-white"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import FieldResolver from "../components/FieldResolver.vue";
export default {
  name: "CreateForm",
  components: { FieldResolver },
  data() {
    return {
      showCreateFeildModal: false,
      form: {
        id: new Date().getTime(),
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
            type: "DateRange",
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
      newFieldData: {},
      newFieldOptions: [],
      newFieldOptionValue: null,
    };
  },
  methods: {
    closeModal() {
      this.showCreateFeildModal = false;
    },
    createField(e) {
      e.preventDefault();
      if (this.newFieldData.type === "select") {
        this.newFieldData.options = this.newFieldOptions;
      }
      this.form.fields.push(this.newFieldData);
      this.newFieldData = {};
      this.closeModal();
    },
    createForm() {
      let forms = JSON.parse(localStorage.getItem("forms"));
      if (!forms) {
        forms = {
          forms: [],
        };
      }
      forms.forms.push(this.form);
      localStorage.setItem("forms", JSON.stringify(forms));
      console.log(forms);
      this.$router.push("/");
    },
    addOption() {
      this.newFieldOptions.push({
        id: new Date().getTime(),
        value: this.newFieldOptionValue,
      });
      this.newFieldOptionValue = null;
    },
  },
};
</script>

<style scoped></style>
