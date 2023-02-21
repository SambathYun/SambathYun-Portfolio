<template>
  <div
    v-click-outside="clickOutSide()"
    class="theme-changer-container"
    :class="{ 'open-dropdown': showDropdown }"
  >
    <div class="theme-icon" @mouseover="showDropdown = true">
      <RenderIcon :icon="PaintBucket20Filled" size="30"></RenderIcon>
    </div>
    <div
      class="theme-dropdown-wrapper"
      @mouseover="showDropdown = true"
      @mouseout="showDropdown = false"
    >
      <div class="theme-dropdown-content">
        <div
          class="theme-dropdown-items"
          :class="{ active: $store.state.selectedTheme == theme.name }"
          v-for="theme in themes"
          :key="theme.name"
          @click="changeTheme(theme)"
        >
          <div class="colors-selection">
            <div
              class="color-item"
              :style="`background-color: ${theme.color1};`"
            ></div>
            <div
              class="color-item"
              :style="`background-color:${theme.color2}`"
            ></div>
            <div
              class="color-item"
              :style="`background-color:${theme.color3}`"
            ></div>
          </div>
          <span class="theme-name text-sm">{{ theme.name }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="theme-dropdown-content md:hidden">
    <div
      class="theme-dropdown-items"
      :class="{ active: $store.state.selectedTheme == theme.name }"
      v-for="theme in themes"
      :key="theme.name"
      @click="changeTheme(theme)"
    >
      <div class="colors-selection">
        <div
          class="color-item"
          :style="`background-color: ${theme.color1};`"
        ></div>
        <div
          class="color-item"
          :style="`background-color:${theme.color2}`"
        ></div>
        <div
          class="color-item"
          :style="`background-color:${theme.color3}`"
        ></div>
      </div>
      <span class="theme-name text-sm">{{ theme.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RenderIcon from "@/components/Partials/Rendericon.vue";
import { PaintBucket20Filled } from "@vicons/fluent";
import { themes } from "@/components/Partials/ThemeChanger/Themes";
import { store } from "@/store/store";

//#1 check selected theme if not selected set theme to default in $store
document.documentElement.setAttribute("theme", store.state.selectedTheme);

const showDropdown = ref(false);

const clickOutSide = () => (el) => {
  if (el) {
    showDropdown.value = false;
  } else {
    showDropdown.value = true;
  }
};

//#2
function changeTheme(theme) {
  localStorage.setItem("theme", theme.name);
  store.state.selectedTheme = theme.name;
  document.documentElement.setAttribute("theme", theme.name);
}
</script>

<style lang='scss'>
.theme-changer-container {
  .theme-icon {
    padding: 0 15px 0 15px;
    cursor: pointer;
    color: var(--primary);
  }

  .theme-dropdown-wrapper {
    position: absolute;
    width: 180px;
    height: auto;
    right: 20px;
    top: 40px;
    cursor: pointer;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.2s;
    visibility: hidden;
  }
  &.open-dropdown,
  &.focus {
    .theme-icon {
      color: var(--primary);
    }
    .theme-dropdown-wrapper {
      transform: translateY(0px);
      opacity: 1;
      visibility: visible;
    }
  }
}

.theme-dropdown-content {
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  background: var(--lightBackground);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius-lg);

  .theme-dropdown-items {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
    align-items: center;
    border-radius: var(--border-radius-sm);

    .colors-selection {
      display: flex;
      flex-direction: row;
      .color-item {
        height: 15px;
        width: 15px;
        border-radius: 100%;
        transition: 0.2s;
      }
    }
    &.active,
    &:hover {
      color: var(--primary);
      background: var(--background);
      .color-item {
        border-radius: 0%;
      }
    }
  }
}

//theme content

@media only screen and (max-width: 767px) {
  .theme-changer-container {
    display: none;
  }
  .theme-dropdown-content {
    padding: 0 10px 10px 10px;
    background: none;
    box-shadow: none;
  }
}
</style>