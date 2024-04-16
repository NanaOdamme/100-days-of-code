

<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <AnimeList />
    <Carousel />
    <VisitSection />
    <MangaSection />
    <Footer />
   
  </div>
</template>

<script>


import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AnimeList from './components/AnimeList.vue';
import Carousel from './components/Carousel.vue';
import VisitSection from './components/VisitSection.vue';
import MangaSection from './components/MangaSection.vue';
import Footer from './components/Footer.vue';

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
};
</script>

<style>
/* Add global styles here if needed */
</style>./views/Anime.vue
