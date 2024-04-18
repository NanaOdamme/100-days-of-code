<template>
  <section class="hero1">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" :data-bs-interval="autoplayInterval">
      <ol class="carousel-indicators">
        <li v-for="(anime, index) in animeList" :key="anime.mal_id" :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index" :class="{ active: index === 0 }"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(anime, index) in animeList" :key="anime.mal_id" :class="{ 'carousel-item': true, 'active': index === 0 }">
          <div class="image-overlay"></div>
          <img :src="anime.images.jpg.large_image_url" class="d-block w-100 carousel-image" alt="Anime Image">
          <div class="carousel-caption d-md-block text-start">
            <h1>{{ anime.title }}</h1>
            <p :class="{ 'truncated': !showFullSynopsis }">{{ anime.synopsis }}</p>
            <button @click="toggleSynopsis" class="btn btn-secondary">...</button>
            <h6>IMDb Rating: {{ anime.score }} / 10</h6>
            <a :href="anime.url" class="link"><i class="bi bi-info-circle-fill"></i>More Info</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      autoplayInterval: 3000,
      animeList: [],
      showFullSynopsis: false,
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://api.jikan.moe/v4/seasons/now');
      this.animeList = response.data.data;
    } catch (error) {
      console.error('Error fetching anime list:', error);
    }

    let carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
      interval: this.autoplayInterval,
    });
  },
  methods: {
    toggleSynopsis() {
      this.showFullSynopsis = !this.showFullSynopsis;
    },
  },
};
</script>

<style scoped>
ol{
  list-style-type: none;
}
.carousel {
  background-position: 50% 50%;
  background-size: cover;
}

.link {
  font-size: 1.2rem;
  color: aliceblue;
  text-decoration: none;
}

.link i {
  margin-right: 10px;
  color: chartreuse;
}

.carousel-caption {
  position: absolute;
  left: -50px;
  right: 0;
  bottom: 100px;
  color: white;
  padding: 10px;
  margin-left: 100px;
  margin-bottom: 50px;
}

.carousel-caption h1 {
  font-size: 2rem;
}

.carousel-caption p {
  font-size: 1rem;
}

.carousel-caption a.btn {
  font-size: 1rem;
}

.text-start {
  text-align: left;
}

.carousel-image {
  background-position: 50% 50%;
  background-size: cover;
  height: 800px;
  width: 100%;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.326);
}

.truncated {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;


}
@media (max-width: 768px){
  .carousel-image{
    height: 500px;
  }
  .carousel-caption{
   
    left: -50px;
    right: 0;
    bottom: 100px;
    color: white;
    padding: 10px;
    margin-left: 80px;
    margin-top: -90px;
    margin-bottom: -90px;
  }
  .carousel-caption h1 {
    font-size: 1rem;
  }
  .carousel-caption p{
    font-size: 12px;
  }
}
</style>
