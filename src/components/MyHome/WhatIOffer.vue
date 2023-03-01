<template>
  <section class="offer-container w-full max-w-[1000px] mx-auto">
    <div class="offer-intro text-center mb-[var(--space-div)]">
      <div class="text-[color:var(--primary)] text-4xl font-bold mb-2">
        <h1>What I Can Offer</h1>
      </div>
      <div class="w-full max-w-[600px] mx-auto text-lg">
        <p>
          If you hire me, here are the things that I can do to help solve some
          of your company's problems, and help to reduce issues. I will also
          create and maintain web apps.
        </p>
      </div>
    </div>

    <div
      class="offer-wrapper flex flex-wrap text-center gap-4 mb-[var(--space-item)]"
    >
      <div
        class="offer-card flex flex-col justify-between shadow-md"
        v-for="myOffer in myOffers"
        :key="myOffer"
      >
        <div class="flex flex-col gap-2 p-2 items-center">
          <RenderIcon :icon="myOffer.icon" size="40"></RenderIcon>
          <div class="flex text-lg font-bold">
            <h2>{{ myOffer.title }}</h2>
          </div>
          <div>
            <span class="flex text-base">
              {{ myOffer.description }}
            </span>
          </div>
        </div>

        <div
          class="flex flex-row gap-1 mx-auto text-[color:var(--primary)] items-center"
        >
          <RenderIcon
            :icon="level"
            size="20"
            v-for="level in myOffer.levels"
            :key="level"
          ></RenderIcon>
        </div>
      </div>
    </div>
    <div class="offer-link flex w-100 justify-center">
      <Router-link :to="{ name: 'Contact' }">
        <button
          v-customizebtn
          class="customizeBtn py-2 px-4 text-base text-[color:var(--btn-fontColor)] font-medium rounded-md shadow-sm bg-[color:var(--primary)] transition ease-in-out opacity-90 hover:opacity-100 hover:-translate-y-1 hover:scale-110 hover:bg-[color:var(--primary)] duration-300 text-center flex items-center gap-2"
        >
          <RenderIcon :icon="Mail16Filled" size="20"></RenderIcon>
          <span>Get In Touch</span>
        </button>
      </Router-link>
    </div>
  </section>
</template>


<script setup>
import {
  WindowAd20Filled,
  Server24Regular,
  WindowDevTools20Filled,
  Star16Filled,
  Mail16Filled,
} from "@vicons/fluent";
import RenderIcon from "@/components/Partials/Rendericon.vue";

const myOffers = [
  {
    icon: WindowAd20Filled,
    title: "Front-End Development",
    levels: [Star16Filled, Star16Filled, Star16Filled, Star16Filled],
    description:
      "Converting data/designs to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
  },
  {
    icon: Server24Regular,
    title: "Back-End Development",
    levels: [Star16Filled, Star16Filled, Star16Filled],
    description:
      "Developing the server side responsible for storing and organizing data of an application and everything that communicates between the database and the browser/application.",
  },
  {
    icon: WindowDevTools20Filled,
    title: "Website Management",
    levels: [Star16Filled, Star16Filled],
    description:
      "Manage all of the activities included in the process of posting and maintaining a website on the World Wide Web. These include maintenance, Website optimization, SEO friendly, etc.",
  },
];
</script>

<style lang='scss'>
.offer-wrapper {
  & > * {
    flex: 1 1 300px;
    padding: 10px 0 15px 0;
    background-color: var(--lightBackground);
  }
}
</style>
