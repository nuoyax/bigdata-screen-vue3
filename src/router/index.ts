import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      redirect: { name: "dashbord" },
      children: [
        {
          path: "dashbord",
          name: "dashbord",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("@/views/DashBoard.vue"),
        },
        {
          path: "incomeDetail",
          name: "incomeDetail",
          component: () => import("@/views/IncomeDetail.vue"),
        },
        {
          path: "DurationDetail",
          name: "DurationDetail",
          component: () => import("@/views/DurationDetail.vue"),
        },
        {
          path: "PassengerCapcityDetail",
          name: "PassengerCapcityDetail",
          component: () => import("@/views/PassengerCapcityDetail.vue"),
        },
        {
          path: "ShipDetail",
          name: "ShipDetail",
          component: () => import("@/views/ShipDetail.vue"),
        },
        {
          path: "ShipOperationDetail",
          name: "ShipOperationDetail",
          component: () => import("@/views/ShipOperationDetail.vue"),
        },
      ],
    },
  ],
});

export default router;
