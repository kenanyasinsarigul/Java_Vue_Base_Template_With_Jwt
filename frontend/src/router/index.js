import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Register from "@/views/Register";
import Login from "@/views/Login";
import AccountProfile from "@/components/AccountProfile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "AccountProfile",
    component: AccountProfile,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
});

export default router;
