<template>
  <section
    class="
      project-container
      max-w-[56.25rem]
      mx-auto
      mb-[var(--space-section)]
      md:mt-[var(--nav-height)]
      mt-[70px]
    "
  >
    <div class="project-intro mb-[var(--space-div)]">
      <h1 class="text-[color:var(--primary)] text-4xl font-bold mb-2">
        Project I Made
      </h1>
      <h2 class="text-lg">
        Showing are personal projects that I made during my spare/free time. I
        don't add projects from my Work/Jobs, only if allowed.
      </h2>
    </div>
    <div class="project-wrapper">
      <template v-for="(work, i) in getProject.projects" :key="i">
        <div
          v-scrollnimationviewfull
          class="project-content mb-[var(--space-section)]"
        >
          <!-- #1 -->
          <div
            class="project-details"
            :class="i % 2 == 0 ? 'left-details' : 'right-details'"
          >
            <div
              class="work-type text-[var(--primary)] mb-0 text-sm leading-none"
            >
              <p v-html="work.type"></p>
            </div>
            <div class="work-title text-2xl font-bold md:mb-5 mb-1">
              <h3>{{ work.title }}</h3>
            </div>
            <div
              class="
                work-des
                md:mb-5
                mb-1
                p-3
                text-base
                bg-[var(--lightBackground)]
                relative
                z-10
              "
            >
              <p v-html="work.des"></p>
            </div>
            <ul
              class="work-techs md:mb-4 mb-1"
              :class="i % 2 == 0 ? '' : 'work-techs-right'"
            >
              <li v-for="tech in work.techs" :key="tech">
                {{ tech }}
              </li>
            </ul>
            <div
              class="work-links"
              :class="i % 2 == 0 ? '' : 'work-links-right'"
            >
              <div
                v-for="link in work.links"
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
                <RenderIcon :icon="link.icon" />
              </div>
            </div>
          </div>
          <!-- #2 -->
          <div
            class="project-image"
            :class="i % 2 == 0 ? 'right-image' : 'left-image'"
          >
            <div class="image-link rounded-sm">
              <div class="image-wrapping" @click="openSite(work.imageLink)">
                <div class="front-image"></div>
                <img
                  loading="lazy"
                  :src="work.img"
                  :alt="`${work.title} - Photo`"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import getProject from "./Project";
import RenderIcon from "@/components/Partials/Rendericon.vue";

function openSite(url) {
  window.open(url, "_blank");
}
</script>

<style lang='scss'>
.project-content {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;

  &.a-viewfull-before-enter {
    opacity: 0;
    transform: translateY(20px);
    transition: 0.2s ease-in-out 100ms;
  }
  &.a-viewfull-enter {
    opacity: 1;
    transform: translateY(0px);
  }
  .left-details {
    position: relative;

    // grid-area: 1/2/1/7;
    grid-row-start: 1;
    grid-column-start: 2;
    grid-row-end: -1;
    grid-column-end: 7;
  }
  .right-details {
    position: relative;
    text-align: right;

    // grid-area: 1/7/-1/-2;
    grid-row-start: 1;
    grid-column-start: 7;
    grid-row-end: -1;
    grid-column-end: -2;
  }
  .left-image {
    position: relative;
    grid-area: 1/1/-1/8;
  }
  .right-image {
    position: relative;
    grid-area: 1/6/-1/-1;
  }

  .project-details {
    position: relative;

    .work-techs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;

      &.work-techs-right {
        justify-content: flex-end !important;
      }
    }
    .work-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      text-align: start;
      &.work-links-right {
        justify-content: flex-end !important;
      }
    }
  }
  .project-image {
    position: relative;

    .image-link {
      position: relative;
      overflow: hidden;
      background-color: var(
        --lightPrimary
      ); //#2  in Container(image) using background-color to mix color with the mix-mode-blend(#1)
      transition: 0.25s !important;
      .image-wrapping {
        mix-blend-mode: multiply; //#1  mix-blend-mode on image
        filter: grayscale(100%) contrast(1) brightness(90%); //remove image color

        .front-image {
          padding-bottom: 61%;
        }
        img {
          position: absolute;
          top: 0;
          height: 100%;
          object-fit: cover;
        }
      }
      &:hover {
        background-color: transparent;
        .image-wrapping {
          filter: grayscale(0%) contrast(1) brightness(90%);
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .project-content {
    .left-details {
      grid-column: 1 / -1;
      padding: 0px 40px 40px 40px;
      z-index: 5;
    }
    .right-image {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    .right-details {
      grid-column: 1 / -1;
      padding: 0px 40px 40px 40px;
      z-index: 5;
    }
    .left-image {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
  }
}
</style>