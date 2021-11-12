import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateForm from "../views/CreateForm";
import UpdateForm from "../views/UpdateForm";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/create",
    component: CreateForm,
  },
  {
    path: "/update/:id",
    component: UpdateForm,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
