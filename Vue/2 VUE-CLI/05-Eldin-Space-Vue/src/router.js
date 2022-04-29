import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Meta from 'vue-meta'

Vue.use(Router);
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Contact.vue")
    },
    {
      path: "/resume",
      name: "resume",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Resume.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Blog.vue")
    },
    {
      path: "/blog/:id",
      name: "blogPost",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/BlogPost.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Services.vue")
    },
    {
      path: "/anna",
      name: "anna",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Anna.vue")
    },
    {
      path: "*",
      name: "Error",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Error.vue")
    }
  ]
});
