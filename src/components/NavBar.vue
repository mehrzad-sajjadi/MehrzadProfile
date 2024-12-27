<template>
  <header
    class="flex justify-between items-center p-6 bg-opacity-50 relative z-20"
  >
    <div class="text-white text-3xl font-bold">Seyed Mehrzad Sajjadi</div>

    <!-- Mobile Toggle Button -->
    <div class="md:hidden z-50">
      <button
        type="button"
        @click="isMenuOpen = !isMenuOpen"
        class="block focus:outline-none"
      >
        <span v-if="isMenuOpen" class="text-5xl">
          <img
            src="@/assets/img/delete-sign.png"
            alt="close"
            width="50"
            height="50"
          />
        </span>
        <span v-else class="text-5xl">
          <img
            src="@/assets/img/menu--v6.png"
            alt="menu"
            width="50"
            height="50"
          />
        </span>
      </button>
    </div>

    <!-- NavBar Link -->
    <nav
      :class="[
        'fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
        { hidden: !isMenuOpen, block: isMenuOpen },
      ]"
    >
      <ul
        class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
      >
        <li v-for="(item, index) in menu" :key="index">
          <a
            :href="item.href"
            class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const menu = ref([
  { name: "Services", href: "#services" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]);

const scrollToSection = (href) => {
  const isMenuOpen = ref(false);
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  console.log(isMenuOpen.value);
};
</script>
