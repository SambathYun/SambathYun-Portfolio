<template>
  <div class="social-media-container">
    <transition name="slide-right" appear>
      <div class="media-wrapper media-orientation media-placement">
        <ul class="media-ul">
          <li class="media-li">
            <div
              class="media-link"
              @click="openSite('https://t.me/sambath_yun')"
            >
              <RenderIcon :icon="Telegram" size="35"></RenderIcon>
              <span class="media-icon-title">Telegram</span>
            </div>
          </li>
          <li class="media-li">
            <div
              class="media-link"
              @click="openSite('https://web.facebook.com/?_rdc=1&_rdr')"
            >
              <RenderIcon :icon="Facebook" size="35"></RenderIcon>

              <span class="media-icon-title">Facebook</span>
            </div>
          </li>

          <li class="media-li">
            <div
              class="media-link"
              @click="openSite('https://www.instagram.com/sampar__/')"
            >
              <RenderIcon :icon="Instagram" size="35"></RenderIcon>

              <span class="media-icon-title">Instagram</span>
            </div>
          </li>
          <li class="media-li">
            <div
              class="media-link"
              @click="
                openSite('https://www.linkedin.com/in/sambath-yun-0a09a4209/')
              "
            >
              <RenderIcon :icon="Linkedin" size="35"></RenderIcon>

              <span class="media-icon-title">Linkedin</span>
            </div>
          </li>
          <li class="media-li">
            <div
              class="media-link"
              @click="
                openSite(
                  'https://www.youtube.com/channel/UC8pVz6km2pGaoqtktS07fnw'
                )
              "
            >
              <RenderIcon :icon="Youtube" size="35"></RenderIcon>

              <span class="media-icon-title">Youtube</span>
            </div>
          </li>
          <li class="media-li">
            <div
              class="media-link"
              @click="openSite('https://github.com/SambathYun')"
            >
              <RenderIcon :icon="Github" size="35"></RenderIcon>
              <span class="media-icon-title">Github</span>
            </div>
          </li>
        </ul>
      </div>
    </transition>

    <Transition name="slide-left" appear>
      <div class="email-wrapper media-orientation media-placement">
        <div class="email-li">
          <div class="email-link" @click="$router.push('/Contact')">
            yunsambath21@gmail.com
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import {
  Telegram,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from "@vicons/fa";
import RenderIcon from "@/components/Partials/Rendericon.vue";

const openSite = (url) => {
  window.open(url, "_blank");
};
</script>
