import { createRouter, createWebHistory } from "vue-router";

import MyHome from "../view/MyHome";
import MyExperience from "../view/MyExperience";
import MyProject from "../view/MyProject";
import MyContact from "../view/MyContact";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MyHome,
  },
  {
    path: "/experience",
    name: "Experience",
    component: MyExperience,
  },
  {
    path: "/project",
    name: "Project",
    component: MyProject,
  },
  {
    path: "/contact",
    name: "Contact",
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

router.afterEach((to) => {
  document.title = `Sambath Yun | ${to.name}`;
});

export default router;
