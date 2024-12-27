<template>
  <section class="text-white mt-20" id="projects">
    <div class="px-4 lx:pl-16">
      <div class="mb-4 md:flex md:justify-between xl:pr-16">
        <div class="text-4xl font-bold text-white">My latest projects</div>
      </div>
      <ul
        class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
        data-aos="fade-right"
      >
        <div v-for="project in Projects" :key="project.id">
          <div
            class="h-52 md:h-[24rem] rounded-t-xl relative group"
            :style="{
              backgroundImage: 'url(' + project.image + ')',
              backgroundSize: 'cover',
            }"
          ></div>
          <div
            class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4"
          >
            <h3 class="text-lg font-semibold uppercase lg:text-xl">
              {{ project.title }}
            </h3>
            <p class="text-[#ADB7BE]">{{ project.description }}</p>
            <div class="flex flex-wrap p-2.5">
              <div
                v-for="technology in project.technologies"
                :key="technology"
                class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                style="
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  border: 1px solid #111827;
                  backdrop-filter: blur(9px);
                  -webkit-backdrop-filter: blur(9px);
                "
              >
                <p class="px-1 py-2">{{ technology }}</p>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const Projects = ref([
  {
    id: 1,
    category: "web development",
    image: "src/assets/img/project.png",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur quasi ipsam labore sapiente, accusamus necessitatibus laboriosam non voluptas inventore deserunt dolore modi ex, praesentium at provident nihil magni ratione!",
    technologies: ["vue.js 3", "laravel", "Tailwindcss"],
  },
  {
    id: 2,
    category: "Mobile App",
    image: "src/assets/img/MobileUi.png",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur quasi ipsam labore sapiente, accusamus necessitatibus laboriosam non voluptas inventore deserunt dolore modi ex, praesentium at provident nihil magni ratione!",
    technologies: ["flutter"],
  },
  {
    id: 3,
    category: "web development",
    image: "src/assets/img/project.png",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur quasi ipsam labore sapiente, accusamus necessitatibus laboriosam non voluptas inventore deserunt dolore modi ex, praesentium at provident nihil magni ratione!",
    technologies: ["vue.js 3", "laravel", "Tailwindcss"],
  },
  {
    id: 4,
    category: "Mobile App",
    image: "src/assets/img/MobileUi.png",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur quasi ipsam labore sapiente, accusamus necessitatibus laboriosam non voluptas inventore deserunt dolore modi ex, praesentium at provident nihil magni ratione!",
    technologies: ["flutter"],
  },
  {
    id: 5,
    category: "web development",
    image: "src/assets/img/project.png",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur quasi ipsam labore sapiente, accusamus necessitatibus laboriosam non voluptas inventore deserunt dolore modi ex, praesentium at provident nihil magni ratione!",
    technologies: ["vue.js 3", "laravel", "Tailwindcss"],
  },
  {
    id: 6,
    category: "Mobile App",
    image: "src/assets/img/MobileUi.png",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur quasi ipsam labore sapiente, accusamus necessitatibus laboriosam non voluptas inventore deserunt dolore modi ex, praesentium at provident nihil magni ratione!",
    technologies: ["flutter"],
  },
]);
</script>
