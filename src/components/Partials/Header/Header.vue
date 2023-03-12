<template>
  <div class="circle-container">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
    <div class="circle5"></div>
    <div class="circle6"></div>
    <div class="circle7"></div>
  </div>
  <div
    id="header"
    class="header-container"
    :class="{
      'navbar--hidden': !showNavbar && scroll > 100,
      'nav-min': scroll > 50,
    }"
  >
    <nav class="navs-container">
      <div class="nav-logo">
        <Router-link :to="{ name: 'Home' }">
          <h1>SB</h1>
        </Router-link>
      </div>

      <div class="nav-web">
        <div class="nav-ul">
          <Transition name="bounce" appear style="transition-delay: 0.1s">
            <li class="nav-li">
              <Router-link
                :to="{ name: 'Home' }"
                class="nav-item"
                :class="{ active: $route.name == 'Home' }"
              >
                <Icon>
                  <Home20Filled />
                </Icon>
                <span>Home</span>
              </Router-link>
            </li>
          </Transition>

          <Transition name="bounce" appear style="transition-delay: 0.2s">
            <li class="nav-li">
              <Router-link
                :to="{ name: 'Experience' }"
                class="nav-item"
                :class="{ active: $route.name == 'Experience' }"
              >
                <Icon>
                  <Briefcase20Filled />
                </Icon>
                <span>Experience</span>
              </Router-link>
            </li>
          </Transition>

          <Transition name="bounce" appear style="transition-delay: 0.3s">
            <li class="nav-li">
              <Router-link
                :to="{ name: 'Project' }"
                class="nav-item"
                :class="{ active: $route.name == 'Project' }"
              >
                <Icon>
                  <Code20Filled />
                </Icon>
                <span>Project</span>
              </Router-link>
            </li>
          </Transition>

          <Transition name="bounce" appear style="transition-delay: 0.4s">
            <li class="nav-li">
              <Router-link
                :to="{ name: 'Contact' }"
                class="nav-item"
                :class="{ active: $route.name == 'Contact' }"
              >
                <Icon>
                  <Mail20Filled />
                </Icon>
                <span>Contact Me</span>
              </Router-link>
            </li>
          </Transition>

          <Transition name="bounce" appear style="transition-delay: 0.5s">
            <li class="nav-li">
              <a
                href="https://drive.google.com/file/d/1o3PTJK4RMT8VzNcAA5RBDWOHLHIryIwG/view?fbclid=IwAR1aiMg4_N6_T1WC0tHTEpiqdv4PChxIQY1pARove87QUbi3SPEfkhMUAiM"
                target="_blank"
                rel="external"
                class="nav-item"
              >
                <Icon>
                  <WebAsset24Filled />
                </Icon>
                <span>Resume</span>
              </a>
            </li>
          </Transition>
        </div>

        <Transition name="bounce" appear style="transition-delay: 0.6s">
          <div>
            <ThemeChanger />
          </div>
        </Transition>
      </div>
      <div class="nav-mobile">
        <ol class="nav-mobile-ol">
          <li
            class="nav-mobile-li"
            v-scrollanimation
            style="transition-delay: 0.1s"
          >
            <div
              class="nav-mobile-link"
              @click="openSite('https://t.me/sambath_yun')"
            >
              <Icon size="2rem">
                <Telegram />
              </Icon>
              <span class="nav-icon-title">Telegram</span>
            </div>
          </li>
          <li
            class="nav-mobile-li"
            v-scrollanimation
            style="transition-delay: 0.2s"
          >
            <div
              class="nav-mobile-link"
              @click="openSite('https://web.facebook.com/?_rdc=1&_rdr')"
            >
              <Icon size="2rem">
                <Facebook />
              </Icon>
              <span class="nav-icon-title">Facebook</span>
            </div>
          </li>
          <li
            class="nav-mobile-li"
            v-scrollanimation
            style="transition-delay: 0.3s"
          >
            <div
              class="nav-mobile-link"
              @click="openSite('https://www.instagram.com/sampar__/')"
            >
              <Icon size="2rem">
                <Instagram />
              </Icon>
              <span class="nav-icon-title">Instagram</span>
            </div>
          </li>
          <li
            class="nav-mobile-li"
            v-scrollanimation
            style="transition-delay: 0.4s"
          >
            <div
              class="nav-mobile-link"
              @click="
                openSite('https://www.linkedin.com/in/sambath-yun-0a09a4209/')
              "
            >
              <Icon size="2rem">
                <Linkedin />
              </Icon>
              <span class="nav-icon-title">Linkedin</span>
            </div>
          </li>
          <li
            class="nav-mobile-li"
            v-scrollanimation
            style="transition-delay: 0.6s"
          >
            <div
              class="nav-mobile-link"
              @click="
                openSite(
                  'https://www.youtube.com/channel/UC8pVz6km2pGaoqtktS07fnw'
                )
              "
            >
              <Icon size="2rem">
                <Youtube />
              </Icon>
              <span class="nav-icon-title">Youtube</span>
            </div>
          </li>
          <li
            class="nav-mobile-li"
            v-scrollanimation
            style="transition-delay: 0.7s"
          >
            <div
              class="nav-mobile-link"
              @click="openSite('https://github.com/SambathYun')"
            >
              <Icon size="2rem">
                <Github />
              </Icon>
              <span class="nav-icon-title">Github</span>
            </div>
          </li>
        </ol>
      </div>
      <div
        class="nav-asideicon"
        @click="
          ($store.state.asideShow = true),
            ($store.state.asideBg = true),
            disableScrolling()
        "
      >
        <Icon size="2rem">
          <Navigation20Regular />
        </Icon>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { Icon } from "@vicons/utils";

import ThemeChanger from "@/components/Partials/ThemeChanger/ThemeChanger.vue";

import {
  Home20Filled,
  Briefcase20Filled,
  Code20Filled,
  Mail20Filled,
  WebAsset24Filled,
  Navigation20Regular,
} from "@vicons/fluent";
import {
  Telegram,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from "@vicons/fa";

import { disableScrolling, enableScrolling } from "@/helper/ScrollHidden";
import { store } from "@/store/store";

const scroll = ref(0);
const showNavbar = ref(true);
const lastScrollPosition = ref(0);

function handleScroll() {
  scroll.value = window.scrollY;
}

function onScroll() {
  // Get the current scroll position
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
  if (currentScrollPosition < 0) {
    return;
  }
  // Here we determine whether we need to show or hide the navbar
  // !!! set showNavbar.value = 'fasle' becuz currentScrollPosition === lastScrollPosition.value
  showNavbar.value = currentScrollPosition < lastScrollPosition.value;

  // Set the current scroll position as the last scroll position
  lastScrollPosition.value = currentScrollPosition;
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll); //#1 when it scroll : it's will work function handleScroll
  window.addEventListener("scroll", onScroll);
});
onBeforeMount(() => {
  window.removeEventListener("scroll", onScroll);
});
const openSite = (url) => {
  window.open(url, "_blank");
};
</script>





