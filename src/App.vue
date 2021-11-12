<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
export default {
  name: "App",
  components: { Layout },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}
</style>
