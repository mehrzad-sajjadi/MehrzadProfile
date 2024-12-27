<template>
  <section class="text-white mt-18" id="about">
    <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex flex-start">
      <div
        class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"
      ></div>
    </div>
    <div
      class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1"
    >
      <div data-aos="flip-right">
        <h2 class="text-4xl font-bold text-white text-left mb-8">
          My Education
        </h2>
        <div class="space-y-8 py-8">
          <div
            v-for="(element, index) in education"
            :key="index"
            class="flex item-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border-[#1f1641]"
          >
            <div class="w-1/3">
              <img src="@/assets/img/graduation-cap--v1.png" alt="" />
            </div>
            <div class="w-3/4 pl-4">
              <h3
                class="text-2xl font-semibold bg-clip-text uppercase text-transparent bg-gradient-to-r from-primary to-secondary lg:text-xl"
              >
                {{ element.university }}
              </h3>
              <p class="text-white">
                {{ element.program }}
              </p>
              <p class="text-white">
                {{ element.year }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-4 md:mt-0 text-left flex flex-col z-10 w-full"
        data-aos="flip-right"
      >
        <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">
          More
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >Aboute</span
          >
          Me
        </h2>
        <p class="text-base lg:text-lg mt-8 py-8 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          praesentium, quibusdam distinctio quam tempora officiis ad suscipit,
          tenetur in at fugiat repellat voluptate laboriosam eaque eius quasi
          consectetur doloremque provident!
        </p>

        <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              +200
            </h3>
            <p class="text-sm sm:text-base text-gray-300">Happy Client</p>
          </div>

          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              +300
            </h3>
            <p class="text-sm sm:text-base text-gray-300">Project</p>
          </div>

          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              +5
            </h3>
            <p class="text-sm sm:text-base text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { AcademicCapIcon } from "@heroicons/vue/24/solid";

const education = ref([
  {
    id: 1,
    university: "Montazeri Technical College",
    program: "Bachelor of Science in Software Engineering",
    year: "2022-09-23",
  },
]);
</script>
