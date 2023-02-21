<template>
  <section
    class="
      aboutme-container
      w-full
      max-w-[43.75rem]
      mx-auto
      mb-[var(--space-section)]
      md:mt-[var(--nav-height)]
      mt-[70px]
    "
  >
    <div
      class="
        profile-container
        lg:flex lg:flex-row lg:text-right
        gap-5
        items-center
        mb-[var(--space-div)]
        relative
        flex flex-col-reverse
        text-center
      "
    >
      <div class="profile-welcome">
        <div class="flex flex-col mb-[var(--space-item)]">
          <h2 class="text-[var(--font-color)] text-xl font-semibold">
            Software Developer
          </h2>
          <h1 class="text-[var(--primary)] text-4xl font-bold">
            Hi ! I'm Sambath Yun
          </h1>
          <h3 class="text-[var(--font-color)] text-2xl font-bold">
            I Create App and Website
          </h3>
        </div>
        <div
          class="
            profile-link
            flex
            justify-center
            lg:justify-end
            text-center
            gap-4
          "
        >
          <Router-link :to="{ name: 'contact' }">
            <button
              v-customizebtn
              class="
                customizeBtn
                py-2
                px-4
                text-base
                text-[color:var(--btn-fontColor)]
                font-medium
                rounded-md
                shadow-sm
                bg-[color:var(--primary)]
                transition
                ease-in-out
                opacity-90
                hover:opacity-100
                hover:-translate-y-1
                hover:scale-110
                hover:bg-[color:var(--primary)]
                duration-300
                text-center
                flex
                items-center
                gap-2
              "
            >
              <RenderIcon :icon="Mail16Filled" size="20"></RenderIcon>
              <span>Get In Touch</span>
            </button>
          </Router-link>

          <Router-link :to="{ name: 'contact' }">
            <button
              v-customizebtn
              class="
                customizeBtn
                py-2
                px-4
                text-base
                text-[color:var(--btn-fontColor)]
                font-medium
                rounded-md
                shadow-sm
                bg-[color:var(--primary)]
                transition
                ease-in-out
                opacity-90
                hover:opacity-100
                hover:-translate-y-1
                hover:scale-110
                hover:bg-[color:var(--primary)]
                duration-300
                text-center
                flex
                items-center
                gap-2
              "
            >
              <RenderIcon :icon="Document16Regular" size="20"></RenderIcon>
              <span>Resume</span>
            </button>
          </Router-link>
        </div>
      </div>
      <div class="profile-wrapper relative truncate">
        <div class="profile-photo">
          <img src="@/assets/image/sambath.png" alt="_blank" />
        </div>
      </div>
    </div>

    <div class="aboutme-intro text-lg relative">
      <div>
        My name is Yun Sambath or call me Sampar. I’m a developer with a
        full-stack background and a keen eye for good design. I love to make
        complex things simple and joy to use. Currently, I focus on building web
        apps with VueJs(v2)(v3) and Laravel.<br />
        Over the past 5 years, I’ve gained experience across some aspects of the
        application lifecycle, including frontend, backend, and dev-ops. It
        allows me to take full ownership of a project from design to
        implementation and deployment
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeMount, ref } from "vue";
import { Mail16Filled, Document16Regular } from "@vicons/fluent";
import RenderIcon from "@/components/Partials/Rendericon.vue";

// const btnRef = ref(null);

// const xRef = ref(0);
// const yRef = ref(0);

// function rippleEffect(event) {
//   const rect = btnRef.value.getBoundingClientRect();
//   xRef.value = event.clientX - rect.left;
//   yRef.value = event.clientY - rect.top;
//   let ripples = document.createElement("p");
//   ripples.style.left = xRef.value + "px";
//   ripples.style.top = yRef.value + "px";
//   btnRef.value.appendChild(ripples);

//   setTimeout(() => {
//     ripples.remove();
//   }, 2000);
// }
</script>





