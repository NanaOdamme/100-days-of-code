<template>
  <section class="manga mb-5" id="manga">
    <h1 class="mb-5">Manga</h1>
    <div class="panel">
      <div class="row mb-5">
        <!-- Manga Cards -->
        <div v-for="(manga, index) in mangas" :key="index" class="col-sm-2 text-center mb-2 mx-1">
          <img :src="manga.image" class="mt-4 img-fluid" alt="Manga Cover">
          <h5 class="manga-title text-center mt-2">{{ manga.title }}</h5>
          
        </div>
       
      </div>
      <button class="see-more">See More</button>
          
        </div>
   
  </section>
</template>

<script>
export default {
  data() {
    return {
      mangas: [
        { title: 'Solo Leveling', image: '/src/assets/images/solo leveling.jpg' },
        { title: 'Demon Slayer', image: '/src/assets/images/Demonslayer.jpg' },
        { title: 'Kyuhoshi', image: '/src/assets/images/man.jpg' },
        { title: '7th Time Loop_ The Villainess...', image: '/src/assets/images/7th.jpg' },
        // Add more manga objects as needed
      ],
      visibleMangas: 4, 
      increment: 4, 
    };
  },
};
</script>

<style scoped>

</style>
