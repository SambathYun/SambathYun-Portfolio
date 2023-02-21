<template>
  <section
    class="
      contact-container
      max-w-[56.25rem]
      mx-auto
      mb-[var(--space-section)]
      md:mt-[var(--nav-height)]
      mt-[70px]
    "
  >
    <div class="contact-intro mb-[var(--space-div)]">
      <h1 class="text-[color:var(--primary)] text-4xl font-bold mb-2">
        Contact Me
      </h1>
      <h2 class="text-lg">
        I am currently not looking for Job. However, if you have other request
        or questions, don't hesitate to contact me using the form bellow.
      </h2>
    </div>
    <div
      class="
        contact-wrapper
        max-w-[650px]
        mx-auto
        w-full
        grid
        place-items-center
      "
    >
      <ContactForm />
    </div>
  </section>
</template>

<script>
import ContactForm from "./ContactForm.vue";
export default {
  components: { ContactForm },
};
</script>

<style>
</style>