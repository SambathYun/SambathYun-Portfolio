import { createStore } from "vuex";
export const store = createStore({
  state() {
    return {
      //aside
      asideShow: false,
      asideBg: false,
      showThemesList: false,

      //theme changer
      selectedTheme: localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : "goldLight",
    };
  },
});
