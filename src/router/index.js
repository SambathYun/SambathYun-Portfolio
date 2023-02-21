import { createRouter, createWebHistory } from "vue-router";

import MyHome from "../view/MyHome";
import MyExperience from "../view/MyExperience";
import MyProject from "../view/MyProject";
import MyContact from "../view/MyContact";

const routes = [
  {
    path: "/",
    name: "home",
    component: MyHome,
  },
  {
    path: "/experience",
    name: "experience",
    component: MyExperience,
  },
  {
    path: "/project",
    name: "project",
    component: MyProject,
  },
  {
    path: "/contact",
    name: "contact",
    component: MyContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // when navigation to new route always load to top 0
    if (!savedPosition) {
      return { left: 0, top: 0 };
    } else {
      return savedPosition;
    }
  },
});

export default router;
