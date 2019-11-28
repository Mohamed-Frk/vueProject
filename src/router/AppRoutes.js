import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);




export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/components/Accueil/Accueil")
    },
    {
      path: "/todos",
      component: () => import("@/components/Todos/Todos")
    },
    {
      path:"/carousel",
      component: () => import ("@/components/Carousel/Carousel"),
    },
    {
      path:"/rangepicker",
      component: () => import ("@/components/Rangepicker/Rangepicker")
    }

  ]
})
