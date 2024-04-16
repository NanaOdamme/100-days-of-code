<template>
    <div class="container">
      <h1 class="text-center mb-5">Otaku<span>Hub</span> - <strong>Anime</strong>Database</h1>
      <form class="search-bar mb-5" @submit.prevent="searchAnime">
        <input type="search" class="searchfield"
               placeholder="Search anime..."
               required
               v-model="search_query" />
        <button type="submit" class="search-btn">Search</button>
      </form>
  
      <main class="mb-5">
        <div class="row">
          <div class="cards col" v-for="anime in animeList" :key="anime.mal_id" style="width: 18rem;">
            <a :href="anime.url" target="_blank">
              <img :src="anime.images.jpg.large_image_url" class="card-img-top rounded-3" :alt="anime.title" />
              <h4 class="mx-1 mt-3">{{ anime.title }}</h4>
            </a>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        animeList: [],
        search_query: '',
      };
    },
    mounted() {
       this.fetchAnimeList(); 
    },
    methods: {
        async fetchAnimeList() {
  try {
       const response = await axios.get('https://api.jikan.moe/v4/anime');
       this.animeList = response.data.data; 
       console.log(this.animeList); 
      } catch (error) {
    console.error('Error fetching anime list:', error);
  }
},
      async searchAnime() {
        try {
          const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${this.search_query}`);
          this.animeList = response.data.data;
          console.log(this.animeList);
        } catch (error) {
          console.error('Error fetching anime list:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    font-family: 'Fire Sans', sans-serif;
  }
  
  h1 {
    color: #888;
    font-weight: 400;
  }
  
  strong {
    color: #000;
  }
  
  h1:hover {
    color: #000;
    font-weight: 500;
  }
  
  .search-bar {
    display: flex;
    justify-content: center;
  }
  
  .searchfield {
    appearance: none;
    background: none;
    border: 1px solid #fba961;
    border-radius: 5px;
    outline: none;
    padding: 10px;
    color: #010c20;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    display: block;
    width: 100%;
    max-width: 700px;
    font-size: 20px;
    transition: 0.4s;
  }
  
  ::placeholder {
    color: #aaa;
  }
  
  .searchfield:focus {
    color: aliceblue;
    border: 1px solid #ffa065;
    background-color: #010c20;
  }
  
  .searchfield:valid {
    color: aliceblue;
    border: 1px solid #ffa065;
    background-color: #010c20;
  }
  
  a {
    text-decoration: none;
    color: #ff7d0c;
  }
  
  .cards {
    flex: 1 1 33%;
    width: 33%;
    max-width: 33%;
    padding: 0px 8px;
  }
  
  img {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    transition: 0.4s;
  }
  
  h4 {
    color: #313131;
    transition: 0.4s;
  }
  
  h4:hover,
  img:hover {
    transform: scale(1.05);
    color: #ff7d0c;
  }
  </style>
  