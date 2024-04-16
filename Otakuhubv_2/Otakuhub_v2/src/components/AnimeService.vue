<template>
    <div>
      <h1>Anime List</h1>
      <ul>
        <li v-for="anime in animeList" :key="anime.id">
          <img :src="anime.image" alt="Anime Image" />
          <div>
            <h2>{{ anime.title }}</h2>
            <p>Episodes: {{ anime.episodes }}</p>
            <p>Rating: {{ anime.rating }}</p>
            <p>{{ anime.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        animeList: [],
      };
    },
    mounted() {
      this.fetchAnime();
    },
    methods: {
      async fetchAnime() {
        try {
          const response = await fetch('/api/anime');
          const data = await response.json();
          this.animeList = data;
        } catch (error) {
          console.error('Error fetching anime:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  img {
    width: 100px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
  }
  
  h2 {
    margin-bottom: 5px;
  }
  
  p {
    margin: 5px 0;
  }
  </style>
  