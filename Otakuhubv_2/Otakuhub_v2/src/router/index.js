import { createRouter, createWebHistory } from 'vue-router';
import MainAnime from '../components/Anime.vue';

const routes = [
  // Other routes here
  { path: '/anime', component: MainAnime },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
