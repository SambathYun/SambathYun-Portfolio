<template>
  <div class="aside-container md:hidden">
    <div
      class="aside-wrapper"
      :class="{ 'aside-bg': $store.state.asideBg }"
      @click.self="closeAside()"
    >
      <div
        class="aside-content"
        :class="{ 'show-aside': $store.state.asideShow }"
      >
        <ul class="aside-ul">
          <li
            class="aside-li"
            :class="{ active: $route.name == 'home' }"
            @click="closeAside()"
          >
            <Router-link :to="{ name: 'home' }" class="aside-item">
              <RenderIcon :icon="Home20Filled" size="20"> </RenderIcon>
              <span class="text-lg">Home</span>
            </Router-link>
          </li>
          <li
            class="aside-li"
            :class="{ active: $route.name == 'experience' }"
            @click="closeAside()"
          >
            <Router-link :to="{ name: 'experience' }" class="aside-item">
              <RenderIcon :icon="Briefcase20Filled" size="20"> </RenderIcon>
              <span class="text-lg">Experience</span>
            </Router-link>
          </li>
          <li
            class="aside-li"
            :class="{ active: $route.name == 'project' }"
            @click="closeAside()"
          >
            <Router-link :to="{ name: 'project' }" class="aside-item">
              <RenderIcon :icon="Code20Filled" size="20"> </RenderIcon>
              <span class="text-lg">Project</span>
            </Router-link>
          </li>
          <li
            class="aside-li"
            :class="{ active: $route.name == 'contact' }"
            @click="closeAside()"
          >
            <Router-link :to="{ name: 'contact' }" class="aside-item">
              <RenderIcon :icon="Mail20Filled" size="20"> </RenderIcon>
              <span class="text-lg">Contact Me</span>
            </Router-link>
          </li>
          <li class="aside-li">
            <a
              href="https://web.facebook.com/profile.php?id=100009897875000"
              target="_blank"
              rel="external"
              class="aside-item"
            >
              <RenderIcon :icon="WebAsset24Filled" size="20"> </RenderIcon>
              <span class="text-lg">Resume</span>
            </a>
          </li>

          <li
            @click="toggleThemes()"
            class="aside-li"
            :class="{ 'active-theme-list': store.state.showThemesList }"
          >
            <div class="aside-item justify-between">
              <div class="flex gap-[10px] items-center">
                <RenderIcon :icon="PaintBucket24Filled" size="20"> </RenderIcon>
                <span class="text-lg">Themes</span>
              </div>
              <div
                class="arrow flex items-center"
                :class="{ active: store.state.showThemesList }"
              >
                <RenderIcon :icon="ChevronDown16Regular" size="20">
                </RenderIcon>
              </div>
            </div>

            <Transition name="fade-in">
              <div
                v-show="store.state.showThemesList"
                @click="store.state.showThemesList = false"
              >
                <ThemeChanger />
              </div>
            </Transition>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeMount, ref } from "vue";
import { store } from "@/store/store";
import RenderIcon from "@/components/Partials/Rendericon.vue";
import { enableScrolling } from "@/helper/ScrollHidden";
import ThemeChanger from "@/components/Partials/ThemeChanger/ThemeChanger.vue";

import {
  Home20Filled,
  Briefcase20Filled,
  Code20Filled,
  Mail20Filled,
  WebAsset24Filled,
  Navigation20Regular,
  PaintBucket24Filled,
  ChevronDown16Regular,
  ChevronUp16Regular,
} from "@vicons/fluent";

const width = ref(0);

function openSite(url) {
  window.open(url, "_blank");
}

function toggleThemes() {
  store.state.showThemesList = !store.state.showThemesList;
}

function closeAside() {
  store.state.asideShow = false;
  store.state.asideBg = false;
  store.state.showThemesList = false;
  enableScrolling();
}

function handleWidth() {
  width.value = window.innerWidth;
  if (
    store.state.asideShow == true &&
    store.state.asideBg == true &&
    width.value >= 767
  ) {
    closeAside();
  }
}

onMounted(() => {
  window.addEventListener("resize", handleWidth);
});

onBeforeMount(() => {
  window.removeEventListener("resize", handleWidth);
});
</script>
<style lang='scss'>
.aside-container {
  .aside-wrapper {
    position: fixed;
    width: 0%;
    height: 0%;
    background-color: rgba(0, 0, 0, 0.8);
    inset: 0 0 0 0;
    z-index: 80;
    &.aside-bg {
      width: 100% !important;
      height: 100% !important;
    }
    .aside-content {
      position: fixed;
      width: 250px; //#1 width 250px
      height: 100%;
      background: var(--background);
      right: 0; //#2 aside start from right
      margin-right: -250px; //#3 but m-r push aside to right out of screen
      top: 0;
      z-index: 90;
      padding: 10px 0 0 10px;
      transition: all 0.3s;

      &.show-aside {
        margin-right: 0px; //#4 add class show-aside with mr-0 back to see in screen
      }
      .aside-ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .aside-li {
          list-style: none;
          cursor: pointer;
          margin: 0;
          border-radius: var(--border-radius-lg);
          transition: all 0.1s ease;

          .aside-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--main-color);
            padding: 10px;

            .arrow {
              transition: all 0.5s;
              &.active {
                transform: rotate(-180deg);
              }
            }
          }

          &.active {
            color: var(--primary);
            background-color: var(--lightBackground);
          }
          &.active-theme-list,
          &:hover {
            background-color: var(--lightBackground);
          }
        }
      }
    }
  }
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.5s ease;
}
.fade-in-enter-to,
.fade-in-leave-from {
  opacity: 1;
}
</style>