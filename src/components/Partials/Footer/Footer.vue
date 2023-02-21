<template>
  <div class="footer-container">
    <div v-scrollanimation class="footer-wrapper">
      <div
        class="footer-text"
        @click="openSite('https://github.com/SambathYun')"
      >
        <div class="copy-right">
          {{ new Date().getFullYear() }}

          <RenderIcon :icon="CopyrightRegular" size="15px"></RenderIcon>
          <span> Yun SAMBATH</span>
        </div>
        <q>First, solve the problem. Then, write the code.</q>
      </div>
    </div>
  </div>
</template>

<script setup>
import RenderIcon from "@/components/Partials/Rendericon.vue";
import { CopyrightRegular } from "@vicons/fa";

const openSite = (url) => {
  window.open(url, "_blank");
};
</script>


