<template>
  <section class="anime-info mb-5">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- Carousel Items -->
        <div v-for="(anime, index) in animeData" :key="index" :class="['carousel-item', { 'active': index === activeIndex }]">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 order-md-{{ index % 2 === 0 ? '1' : '2' }}">
                <div class="glass-card">
                  <h1>{{ anime.title }}</h1>
                  <p>{{ anime.description }}</p>
                  <button @click="visitAnime(index)">Visit</button>
                  <h1 class="rate">{{ anime.rating }}</h1>
                </div>
              </div>
              <div class="col-md-6 order-md-{{ index % 2 === 0 ? '2' : '1' }}">
                <img :src="anime.image" class="d-block w-100 image-flip" :alt="`Anime ${index + 1}`">
              </div>
            </div>
          </div>
        </div>
        <!-- End of Carousel Items -->
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" @click="prevSlide">
        <span class="icons carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" @click="nextSlide">
        <span class="icons carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      animeData: [
        {
          name: 'Naruto',
          image: '/src/assets/images/Naruto.jpg',
          rating: '8.52',
          description: 'A powerful fox known as the Nine-Tails attacks Konoha...'
        },
        {
          name: 'Ninja Kamui',
          image: '/src/assets/images/kamui.jpg',
          rating: '8.52',
          description: 'After escaping his clan and going into hiding in rural America...'
        },
        {
          name: 'Bucchigiri?!',
          rating: '8.52',
          image: '/src/assets/images/bu.jpg',
          description: 'After Arajin Tomoshibi returns to his hometown and reunites with his childhood friend...'
        },
        {
          name: 'Solo Leveling',
          image: '/src/assets/images/SOLO.jpg',
          rating: '8.52',
          description: 'In a world where hunters — human warriors who possess supernatural abilities...'
        },
        {
          name: 'One Piece',
          image: '/src/assets/images/Onepiece.jpg',
          rating: '8.52',
          description: 'The world of One Piece is populated by humans and other races such as dwarves...'
        },
        {
          name: 'Demon Slayer',
          image: '/src/assets/images/Demonslayer.jpg',
          rating: '8.52',
          description: 'In Taishō era Japan, a secret organization known as the "Demon Slayer Corps" has waged a war against demons for centuries...'
        },
        // Add more anime data as needed
      ],
      activeIndex: 0,
    };
  },
  methods: {
    visitAnime(index) {
      console.log(`Visited anime ${index + 1}`);
      // Add navigation logic here
    },
    prevSlide() {
      this.activeIndex = (this.activeIndex - 1 + this.animeData.length) % this.animeData.length;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.animeData.length;
    },
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  /* Adjustments for smaller screens (tablets) */
  .anime-info img{
    height: 400px;
    width: 50px;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 10px;
    margin-top: 80px;
    margin-left: 10px;
    margin-bottom: 40px;
    display: block;
    
  }    
}
</style>
