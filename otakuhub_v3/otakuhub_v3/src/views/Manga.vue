<template>
    <div class="main-manga">
      <div class="container mt-5 pt-5">
        <h1 class="text-center mb-5">Otaku<span>Hub</span> - <strong>Manga</strong> Database</h1>
        <form class="search-bar mb-5" @submit.prevent="searchManga">
          <input type="search" class="searchfield"
                 placeholder="Search manga..."
                 required
                 v-model="search_query" />
        </form>
        <main class="mb-5">
          <div class="row">
            <div class="col mb-4 mx-auto" v-for="manga in mangaList" :key="manga.mal_id">
              <a :href="manga.url" target="_blank">
                <img :src="manga.images.jpg.large_image_url" class="card-img-top rounded-3 fixed-height" :alt="manga.title" />
                <h4 class="mx-1 mt-3">{{ manga.title }}</h4>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        mangaList: [],
        search_query: '',
      };
    },
    mounted() {
      this.fetchMangaList();
    },
    methods: {
      async fetchMangaList() {
        try {
          const response = await axios.get('https://api.jikan.moe/v4/top/manga');
          this.mangaList = response.data.data;
          console.log(this.mangaList);
        } catch (error) {
          console.error('Error fetching manga list:', error);
        }
      },
      async searchManga() {
        try {
          const response = await axios.get(`https://api.jikan.moe/v4/manga?q=${this.search_query}`);
          this.mangaList = response.data.data;
          console.log(this.mangaList);
        } catch (error) {
          console.error('Error fetching manga list:', error);
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
    color: #ffffff;
  }
  
  h1:hover {
    color: #ffffff;
    font-weight: 500;
  }
  
  .search-bar {
    display: flex;
    justify-content: center;
  }
  
  .searchfield {
    appearance: none;
    background: none;
    border: 1px solid #6d9773;
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
    border: 1px solid #6d9773;
    background-color: #010c20;
  }
  
  .searchfield:valid {
    color: aliceblue;
    border: 1px solid #6d9773;
    background-color: #010c20;
  }
  
  a {
    text-decoration: none;
    color: #0c3b2e;
  }
  .col {
    display: inline-block;
    
  }
  
  img {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    transition: 0.4s;
  }
  
  h4 {
    color: #ffffff;
    transition: 0.4s;
  }
  
  h4:hover,
  img:hover {
    transform: scale(1.05);
    color: #f3f800;
  }
  
  
  .fixed-height {
    height: 350px;
    width: 350px;
    margin: 10px;
  }
  @media (max-width: 575.98px) { 
    .fixed-height {
      height: 300px;
      width: 300px;
    }
  }
  
  @media (min-width: 576px) and (max-width: 1024px) { 
    .fixed-height {
      height: 200px;
      width: 200px;
    }
  }
  </style>
  