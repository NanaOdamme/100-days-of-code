// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import MainAnime from '@/components/Anime.vue'; // Correct path to Anime.vue

Vue.use(VueRouter);

const routes = [
  {
    path: '/anime',
    name: 'anime',
    component: MainAnime,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
}).$mount('#app');
import Vue from 'vue';
import Router from 'vue-router';
import AnimeList from '@/components/AnimeList.vue';
import MainAnime from '@/components/Anime.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/anime',
      name: 'anime',
      component: Anime,
    },
    {
      path: '/animelist',
      name: 'Animelist',
      component: AnimeList,
    },
  ],
});

