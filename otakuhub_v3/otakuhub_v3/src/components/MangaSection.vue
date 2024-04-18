<template>
  <div class="anime-genres">
    <h1>Anime Genres</h1>
    <ul>
      <li v-for="genre in animeGenres" :key="genre.mal_id">
        <strong>{{ genre.name }}</strong>: {{ genre.type }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      animeGenres: [],
    };
  },
  mounted() {
    this.fetchAnimeGenres();
  },
  methods: {
    async fetchAnimeGenres() {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/genres/anime');
        this.animeGenres = response.data.data;
        console.log(this.animeGenres);
      } catch (error) {
        console.error('Error fetching anime genres:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Your component styles here */
</style>
