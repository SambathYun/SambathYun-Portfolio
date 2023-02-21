<template>
  <div>
    <AboutMeSection />
    <TechnicalSkill />
    <WhatIOffer />
  </div>
</template>

<script>
import AboutMeSection from "@/components/MyHome/AboutMeSection.vue";
import TechnicalSkill from "@/components/MyHome/TechnicalSkill.vue";
import WhatIOffer from "@/components/MyHome/WhatIOffer.vue";

export default {
  components: { AboutMeSection, TechnicalSkill, WhatIOffer },
};
</script>
