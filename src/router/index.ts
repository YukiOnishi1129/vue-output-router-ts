import { createRouter, createWebHistory } from "vue-router";
import { NAVIGATION_LIST } from "../constants/navigation";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: `${NAVIGATION_LIST.TOP}`,
      name: "home",
      component: () => import("../pages/TodoListPage.vue"),
    },
    {
      path: `${NAVIGATION_LIST.CREATE}`,
      name: "create",
      component: () => import("../pages/TodoCreatePage.vue"),
    },
    {
      path: `${NAVIGATION_LIST.EDIT}`,
      name: "edit",
      component: () => import("../pages/TodoEditPage.vue"),
    },
    {
      path: `${NAVIGATION_LIST.DETAIL}`,
      name: "detail",
      component: () => import("../pages/TodoDetailPage.vue"),
    },
  ],
});

export default router;
