import { createApp, onUnmounted, ref } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/_main.scss"; // import in main.js for public
import { store } from "@/store/store";
import "./registerServiceWorker";
import SvgDecoration from "./components/Partials/SvgDecoration/SvgDecoration.vue";

import {
  scrollAnimation,
  scrollAnimationViewfull,
} from "@/directive/ScrollAnimation.js";

createApp(App)
  .directive("scrollanimation", scrollAnimation)
  .directive("scrollnimationviewfull", scrollAnimationViewfull)
  .directive("click-outside", {
    beforeMount(el, binding) {
      el.clickOutsideEvent = (event) => {
        if (!(el === event.target || event.composedPath().includes(el))) {
          binding.value(event, el);
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el) {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  })
  .directive("customizebtn", {
    beforeMount(el) {
      const xRef = ref(0);
      const yRef = ref(0);
      el.mouseEnter = (event) => {
        const rect = el.getBoundingClientRect();
        xRef.value = event.clientX - rect.left;
        yRef.value = event.clientY - rect.top;
        let ripples = document.createElement("p");

        ripples.style.left = xRef.value + "px";
        ripples.style.top = yRef.value + "px";
        el.appendChild(ripples);

        setTimeout(() => {
          ripples.remove();
        }, 2000);
      };
      el.addEventListener("mouseenter", el.mouseEnter);
      el.addEventListener("click", el.mouseEnter);
    },
    unmounted(el) {
      el.removeEventListener("mouseenter", el.mouseEnter);
      el.addEventListener("click", el.mouseEnter);
    },
  })
  .component("SvgDecoration", SvgDecoration)
  .use(store)
  .use(router)
  .mount("#app");
