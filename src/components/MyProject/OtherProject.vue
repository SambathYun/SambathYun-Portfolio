<template>
  <section
    class="
      otherpro-container
      max-w-[940px]
      my-0
      mx-auto
      mb-[var(--space-section)]
    "
  >
    <div class="otherpro mb-[var(--space-div)]">
      <h1 class="text-[color:var(--primary)] text-4xl font-bold mb-2">
        Other Projects
      </h1>
      <h2 class="text-lg">
        This projects are for learning Purposes Only. You can check and see how
        I made them, you might learn from it too.
      </h2>
    </div>
    <div class="otherpro-wrapper">
      <template v-for="(other, i) in getOthers.other" :key="other + i">
        <div
          v-scrollanimation
          :style="'transition-delay:' + i * 100 + 'ms'"
          class="otherpro-content"
        >
          <div
            class="
              otherpro-items
              grid grid-flow-rows
              justify-between
              rounded-lg
            "
          >
            <!-- 1 -->
            <header class="other-top-details mb-[var(--space-section)]">
              <div
                class="
                  other-icon
                  grid grid-flow-col
                  justify-between
                  items-center
                  mb-2
                "
              >
                <RenderIcon
                  :icon="other.headIcon"
                  size="45"
                  class="text-[var(--primary)]"
                ></RenderIcon>

                <div class="other-links grid grid-flow-col gap-2">
                  <div
                    v-for="link in other.links"
                    :key="link"
                    @click="openSite(link.link)"
                    class="
                      flex flex-row
                      items-center
                      cursor-pointer
                      hover:text-[var(--primary)]
                      customTooltip
                    "
                    :gloss="link.tooltip"
                  >
                    <RenderIcon :icon="link.icon" size="25"></RenderIcon>
                  </div>
                </div>
              </div>
              <div
                class="
                  other-title
                  text-2xl
                  font-bold
                  text-[var(--primary)]
                  mb-2
                "
              >
                <h3>{{ other.title }}</h3>
              </div>
              <div class="other-des text-base">
                <p v-html="other.des"></p>
              </div>
            </header>
            <!-- 2 -->
            <footer class="other-bottom-details flex flex-wrap-reverse gap-3">
              <div
                class="tech-wrapping grid grid-flow-col gap-1 items-center"
                v-for="tech in other.techs"
                :key="tech"
              >
                <RenderIcon :icon="tech.icon" size="15"></RenderIcon>
                <span class="text-base">{{ tech.name }}</span>
              </div>
            </footer>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import RenderIcon from "@/components/Partials/Rendericon.vue";
import getOthers from "./Other";

function openSite(url) {
  window.open(url, "_blank");
}
</script>

<style lang="scss">
.otherpro-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;

  .otherpro-content {
    &.a-before-enter {
      opacity: 0;
      transform: translateY(20px);
      transition: 0.2s ease-in-out;
    }
    &.a-enter {
      opacity: 1;
      transform: translateY(0px);
    }

    .otherpro-items {
      height: 100%;
      box-shadow: 0 10px 30px -15px var(--nav-shadow);
      transition: 0.2s;
      background-color: var(--lightBackground);
      padding: 25px;
      &:hover {
        transform: translate(0px, -5px);
        box-shadow: var(--black-shadow);
      }
    }
  }
}
</style>