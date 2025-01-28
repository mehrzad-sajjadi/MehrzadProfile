<template>
  <section class="text-white mt-18 bg-[#111827]" id="skills">
    <div class="right-0 top-[110rem] h-full w-full justify-end">
      <div class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
        <span
          class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] mt-14 blur-2xl"
        ></span>
      </div>
      <div
        class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16"
      >
        <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
          <h2 class="text-4xl font-bold text-white text-left mb-4">
            My
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              >Skills
            </span>
          </h2>
          <div class="mt-8" v-for="skill in skills" :key="skill.id">
            <div class="flex flex-end justify-between" data-aos="fade-right">
              <h4 class="font-semibold uppercase">
                {{ skill.name }}
              </h4>
              <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
            </div>
            <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
              <div
                class="h-1 rounded-full bg-primary"
                :style="`width:${skill.width}`"
              ></div>
            </div>
          </div>
        </div>
        <div data-aos="flip-left">
          <h2
            class="text-4xl font-bold text-white text-left mb-4 md:text-center md:mt-0 mt-8"
          >
            My Experience
          </h2>
          <div class="space-y-8 py-8" data-aos="fade-left">
            <div
              v-for="experience in experiences"
              :key="experience.id"
              class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]"
            >
              <div class="w-1/4">
                <img src="../assets/img/lawyer.png" alt="lawyer" />
              </div>
              <div class="w-3/4 pl-4">
                <h3
                  class="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                >
                  {{ experience.role }}
                </h3>
                <p class="text-white">{{ experience.company }}</p>
                <p class="text-white">{{ experience.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const skills = ref([
  {
    id: 1,
    name: "laravel",
    width: "65%",
  },
  {
    id: 2,
    name: "Vue.js",
    width: "50%",
  },
  {
    id: 3,
    name: "Tailwindcss",
    width: "87%",
  },
]);

const experiences = ref([
  {
    id: 3,
    role: "Front-End developer",
    company: "Eghamat24",
    date: "1403/10/9 - present",
  },

  {
    id: 1,
    role: "Full-Stack developer",
    company: "Salayan",
    date: "1403/2/1 - 1403/9/22",
  },
  {
    id: 2,
    role: "wordpress developer Intern",
    company: "Green web",
    date: "1402/6/1 - 1403/8/1",
  },
]);
</script>
