<template>
  <div class="max-w-[700px] mx-auto flex flex-col">
    <FormResolver v-bind:form="form" :key="form.id" />
    <div class="flex flex-row items-center justify-between">
      <label class="flex flex-col">
        status
        <input type="number" v-model.number.trim="status" min="0" max="100" />
      </label>
      <button
        class="bg-green-600 rounded-lg px-5 py-2 text-white"
        @click="setStatus"
      >
        set status
      </button>
    </div>
  </div>
</template>

<script>
import FormResolver from "../components/FormResolver";
export default {
  name: "UpdateForm",
  data() {
    return {
      form: {},
      status: 0,
    };
  },
  components: {
    FormResolver,
  },
  methods: {
    setStatus() {
      if (this.status > 100) {
        this.status = 100;
      }
      this.form.status = this.status;
      let forms = JSON.parse(localStorage.getItem("forms"));
      let form = forms.forms.filter((e) => e.id == this.$route.params.id)[0];
      form.status = this.status;
      let _forms = forms.forms.map((e) => {
        if (e.id == this.$route.params.id) {
          return form;
        }
        return e;
      });
      localStorage.setItem("forms", JSON.stringify({ forms: _forms }));

      this.$router.push("/");
    },
  },
  beforeMount() {
    const forms = JSON.parse(localStorage.getItem("forms"));
    this.form = forms.forms.filter((e) => e.id == this.$route.params.id)[0];
  },
};
</script>

<style scoped></style>
