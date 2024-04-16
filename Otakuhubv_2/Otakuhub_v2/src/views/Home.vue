<template>
    <div id="home">
      <component :is="currentComponent" />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import HeroSection from '@/components/HeroSection.vue';
  import AnimeList from '@/components/AnimeList.vue';
  import Carousel from '@/components/Carousel.vue';
  import VisitSection from '@/components/VisitSection.vue';
  import MangaSection from '@/components/MangaSection.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      HeroSection,
      AnimeList,
      Carousel,
      VisitSection,
      MangaSection,
      Footer,
    },
    data() {
      return {
        currentComponent: 'HeroSection', // Initially render AnimeList, change as needed
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add scoped styles for Home.vue */
  </style>
  