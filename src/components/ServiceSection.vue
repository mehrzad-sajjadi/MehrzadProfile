<template>
  <section class="text-white mt-20" id="services">
    <div class="px-4 xl:pl-16">
      <h2 class="text-4xl font-bold text-white mb-4">My services</h2>
    </div>
    <div
      class="py-8 px-4 xl:px-16 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <div
        v-for="(service, index) in services"
        :key="index"
        data-aos="fade-up"
        data-aos-duration="1000"
        class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
      >
        <div class="mx-auto h-24 text-center xl:h-28 xl:w-28">
          <div>
            <img :src="service.icon" :alt="service.name" />
          </div>
        </div>
        <div class="text-center">
          <h3
            class="pt-8 text-lg font-semibold uppercasse text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl"
          >
            {{ service.name }}
          </h3>
          <p class="text-gray pt-4 group-hover:text-white md:text-base">
            {{ service.describtion }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const services = ref([
  {
    id: 1,
    icon: new URL("@/assets/img/google-code.png", import.meta.url).href,
    name: "Web Development",
    describtion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    icon: new URL(
      "@/assets/img/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png",
      import.meta.url
    ).href,
    name: "Technical Writing",
    describtion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    icon: new URL(
      "@/assets/img/external-Mobile-Development-digital-marketing-solid-design-circle.png",
      import.meta.url
    ).href,
    name: "Mobile development",
    describtion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    icon: new URL(
      "@/assets/img/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png",
      import.meta.url
    ).href,
    name: "Technical Writing",
    describtion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    icon: new URL(
      "@/assets/img/external-Mobile-Development-digital-marketing-solid-design-circle.png",
      import.meta.url
    ).href,
    name: "Mobile development",
    describtion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },

  {
    id: 6,
    icon: new URL("@/assets/img/google-code.png", import.meta.url).href,
    name: "Web Development",
    describtion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
]);
</script>
