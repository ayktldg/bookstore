import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add-new-book",
    name: "AddNewBook",
    component: () =>
      import(/* webpackChunkName: "add-new-book" */ "../views/AddNewBook.vue")
  },
  {
    path: "/set-to-user",
    name: "SetToUser",
    component: () =>
      import(/* webpackChunkName: "set-to-user" */ "../views/SetToUser.vue")
  },
  {
    path: "/book-list",
    name: "BookList",
    component: () =>
      import(/* webpackChunkName: "book-list" */ "../views/BookList.vue")
  },
  {
    path: "/get-user",
    name: "GetUser",
    component: () =>
      import(/* webpackChunkName: "get-user" */ "../views/GetUser.vue")
  },
  {
    path: "*",
    redirect: "/"
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
