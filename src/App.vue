<template>
  <div class="bg-[#111827] min-h-screen">
    <NavBar />
    <HeroSection></HeroSection>
    <Services></Services>
    <About></About>
    <Skill></Skill>
    <Project></Project>
    <Comment></Comment>
    <Contact></Contact>
    <BackToTop></BackToTop>
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
const Comment = defineAsyncComponent(() =>
  import("@/components/CommentSection.vue")
);
const BackToTop = defineAsyncComponent(() =>
  import("@/components/BackToTop.vue")
);
</script>
