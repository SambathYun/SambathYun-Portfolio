<template>
  <section
    class="
      exp-container
      max-w-[56.25rem]
      mx-auto
      mb-[var(--space-section)]
      md:mt-[var(--nav-height)]
      mt-[70px]
    "
  >
    <div class="exp-intro mb-[var(--space-div)]">
      <h1 class="text-[color:var(--primary)] text-4xl font-bold mb-2">
        My Work Experience
      </h1>
      <h2 class="text-lg">
        This are companies that I have worked for. I have learned and enjoyed
        working on this companies.
      </h2>
    </div>
    <div class="exp-wrapper">
      <ul class="timeline">
        <li class="timeline-li" v-for="myExp in Experiences" :key="myExp.id">
          <!-- #1 icon -->
          <label class="timeline-icon"></label>
          <!-- #2 content -->
          <div
            class="timeline-detail"
            v-for="job in myExp.jobDetails"
            :key="job.company"
          >
            <div class="mb-2">
              <p
                class="timeline-year"
                v-html="job.workStart + ' - ' + job.workUtil"
              ></p>
            </div>

            <h3 class="text-2xl mb-2">
              <span class="font-bold">{{ job.position }}</span>
              <span
                class="
                  text-[var(--primary)]
                  font-semibold
                  opacity-70
                  hover:opacity-100
                  duration-100
                "
              >
                <a :href="job.url" rel="noopener" target="_blank">
                  @ {{ job.company }}
                </a>
              </span>
            </h3>
            <div class="mb-3">
              <a
                class="
                  border
                  border-[var(--primary)]
                  rounded-md
                  px-[10px]
                  py-[2px]
                  text-[var(--primary)]
                  hover:bg-[var(--primary)] hover:text-[var(--btn-fontColor)]
                  duration-300
                "
                v-if="job.certificate"
                :href="job.certificate.link"
                rel="external"
                target="_blank"
              >
                {{ job.certificate.label }}</a
              >
            </div>
            <div class="mb-5">
              <p v-html="job.des"></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import Experiences from "./Experience";
</script>
