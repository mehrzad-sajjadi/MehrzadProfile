<template>
  <div class="bg-[#111827] min-h-screen">
    <NavBar />
    <HeroSection></HeroSection>
    <Services></Services>
    <About></About>
    <Skill></Skill>
    <Project></Project>
    <Contact></Contact>
  </div>
</template>
<script setup>
import { defineAsyncComponent } from "vue";
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const HeroSection = defineAsyncComponent(() =>
  import("@/components/HeroSection.vue")
);
const Services = defineAsyncComponent(() =>
  import("@/components/ServiceSection.vue")
);
const About = defineAsyncComponent(() =>
  import("@/components/AbouteSection.vue")
);
const Skill = defineAsyncComponent(() =>
  import("@/components/SkillSection.vue")
);
const Project = defineAsyncComponent(() =>
  import("@/components/ProjectSection.vue")
);

const Contact = defineAsyncComponent(() =>
  import("@/components/ConnectSection.vue")
);
</script>
