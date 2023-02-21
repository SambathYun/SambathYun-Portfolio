<template>
  <Header />
  <AsideBar />
  <Social-media-link />
  <Main>
    <Router-view v-slot="{ Component, route }">
      <Transition :key="route.name" name="slide-up" mode="out-in" appear>
        <Component :is="Component" :key="route.name"></Component>
      </Transition>
    </Router-view>
  </Main>
  <Footer />
</template>

<script>
import Header from "@/components/Partials/Header/Header.vue";
import Footer from "@/components/Partials/Footer/Footer.vue";
import SocialMediaLink from "@/components/Partials/MySocialMedia/SocialMediaLink.vue";
import AsideBar from "@/components/Partials/Header/AsideBar.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    SocialMediaLink,
    AsideBar,
  },
};
</script>

<style lang='scss'>
Main {
  min-height: 80vh;
}

@media only screen and (max-width: 1280px) {
  Main {
    padding: 0 130px;
  }
}
@media only screen and (max-width: 1024px) {
  Main {
    padding: 0 100px;
  }
}
@media only screen and (max-width: 767px) {
  Main {
    padding: 0 30px;
  }
}
@media only screen and (max-width: 425px) {
  Main {
    padding: 0 20px;
  }
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>



