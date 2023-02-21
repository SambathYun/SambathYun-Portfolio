<template>
  <section
    class="
      technical-container
      w-full
      max-w-[900px]
      mx-auto
      mb-[var(--space-section)]
      relative
      z-15
    "
  >
    <div class="modal-container">
      <Transition
        name="modal-animation-bg"
        v-show="showModal"
        @click.self="closeModal()"
      >
        <div class="modal-wrapper">
          <Transition name="modal-animation-content" v-show="showModal">
            <div class="modal-content p-3">
              <h3 class="flex flex-col items-center text-center mb-2">
                <div class="flex min-w-[4rem] min-h-[4rem] p-1">
                  <SvgDecoration :name="getContent.icon"></SvgDecoration>
                </div>
                <div class="text-xl font-bold text-[var(--primary)]">
                  <h3 v-html="getContent.title"></h3>
                </div>
              </h3>
              <div class="w-100 text-center">
                <p v-html="getContent.docs"></p>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </div>

    <div class="skill-intro mb-[var(--space-div)]">
      <div class="text-[color:var(--primary)] text-4xl font-bold mb-2">
        <h1>Technical Skill</h1>
      </div>
      <div class="text-lg">
        I am continuously learning to keep up with the latest technologies and
        be able to pick the best tech for the job.
      </div>
    </div>
    <div class="skill-wrapper flex flex-wrap gap-[2rem] w-100">
      <div
        class="skill-card flex flex-col justify-between"
        v-for="mySkill in mySkills"
        :key="mySkill.tech"
      >
        <div class="block">
          <div class="flex flex-row text-lg font-bold gap-2">
            <RenderIcon :icon="mySkill.icon" :size="30" />
            <h2>{{ mySkill.tech }}</h2>
            <span class="skill-year">{{ mySkill.yearStarted }}</span>
          </div>
          <div class="flex text-base py-3 m-auto">
            {{ mySkill.des }}
          </div>
        </div>

        <div class="flex flex-row gap-2 items-center">
          <div
            v-for="tool in mySkill.tools"
            :key="tool"
            @click="openModal(tool)"
            class="
              flex
              rounded-md
              cursor-pointer
              items-center
              max-w-[2.25rem]
              hover:max-w-[12.5rem]
              duration-300
              truncate
              hover:bg-[var(--lightBackground)]
              shadow-md
            "
          >
            <div class="flex min-w-[2.25rem] min-h-[2.25rem] p-1">
              <SvgDecoration :name="tool.icon"></SvgDecoration>
            </div>
            <div class="flex p-1 text-base">
              <span>{{ tool.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import mySkills from "./TechnicalSkill";
import RenderIcon from "@/components/Partials/Rendericon.vue";
import { disableScrolling, enableScrolling } from "@/helper/ScrollHidden";

const showModal = ref(false);
const getContent = reactive({
  icon: "",
  title: "",
  docs: "",
});

function openModal(skill) {
  (getContent.icon = skill.icon),
    (getContent.title = skill.title),
    (getContent.docs = skill.docs);

  showModal.value = true;
  disableScrolling();
}

function closeModal() {
  showModal.value = false;
  enableScrolling();
}
</script>

<style lang="scss">
.skill-wrapper {
  & > * {
    flex: 1 1 300px;
  }
}

.skill-year::before {
  content: "\2740";
  color: #a0aec0;
  margin-right: 0.5rem;
  font-weight: var(--font-weight);
}

.modal-animation-content-enter-active,
.modal-animation-content-leave-active {
  transition: 0.3s;
}
.modal-animation-content-enter-from,
.modal-animation-content-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(100px) rotate(0.5turn);
}

.modal-animation-bg-active,
.modal-animation-bg-leave-active {
  transition: 0.3s;
}
.modal-animation-bg-from,
.modal-animation-bg-leave-to {
  opacity: 0;
  transform: scale(1) translateY(0px) rotate(0turn);
}

.modal-container {
  .modal-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    inset: 0 0 0 0;
    z-index: 99;
    .modal-content {
      margin: 0 auto;
      width: 250px;
      height: auto;
      border-radius: var(--border-radius-lg);
      backdrop-filter: blur(2px); //blur bg
      background-color: var(--background);
      margin-top: 20vh;
    }
  }
}
</style>