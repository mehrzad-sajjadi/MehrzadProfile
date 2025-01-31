<template>
  <section
    class="relative w-full"
    data-aos="zoom-in-up"
    data-aos-duration="1200"
  >
    <div class="absolute top-0 inset-x-0 h-64 flex flex-start">
      <div
        class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"
      ></div>
      <div
        class="h-20 w-3/5 bg-gradient-to-br from-[#670ccf] blur-2xl invisible opacity-40"
      ></div>
    </div>
    <div
      class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg mx-auto relative"
    >
      <div
        class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto"
      >
        <div class="lg:py-6">
          <div class="text-center lg:text-left">
            <h1
              class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl"
            >
              Hi , I`m
              <span
                class="text-transparent bg-clip-text bg-gradient-to-t from-primary to-pink-500"
                >Mehrzad
              </span>
            </h1>
          </div>
          <p
            class="text-gray-300 pt-8 text-justify lg:text-left mx-auto max-w-xl"
          >
            A creative and passionate software engineer with expertise in
            **Laravel**, **Vue.js**, dedicated to building dynamic and scalable
            web applications. By combining deep knowledge of modern frameworks
            with hands-on experience in designing interactive user interfaces, I
            craft solutions that deliver high performance and exceptional user
            experiences. Always eager to embrace new opportunities for learning
            and innovation, I strive to create software that exceeds
            expectations.
          </p>
          <div
            class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
          >
            <button
              class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
            >
              <span
                class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"
              ></span>
              <span class="relative flex item-center justify-center text-white"
                >Hire Me
              </span>
            </button>
            <button
              class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
            >
              <div
                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative"
              ></div>
              <div class="svg-container">
                <ArrowDownTrayIcon
                  class="size-6 text-primary"
                ></ArrowDownTrayIcon>
                <div class="download-loader text-white hidden"></div>
              </div>
              <a
                href="../assets/img/mehrzad.pdf"
                download="mehrzad.pdf"
                class="pl-2 text-primary"
                >Download resume
              </a>
            </button>
          </div>
        </div>
        <div class="lg:w-full md:flex">
          <div
            class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:h-full items-center relative"
          >
            <div
              class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"
            ></div>
            <div
              class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-primary"
            >
              <img
                src="../assets/img/mehrzad2.jpg"
                width="500"
                height="aoto"
                loading="lazy"
                class="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();
import { ArrowDownTrayIcon } from "@heroicons/vue/24/solid";
</script>
