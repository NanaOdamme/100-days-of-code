import { createApp } from 'vue';
import App from './App.vue';


// Import and register your components here if needed
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AnimeList from './components/AnimeList.vue';
import Carousel from './components/Carousel.vue';
import VisitSection from './components/VisitSection.vue';
import MangaSection from './components/MangaSection.vue';
import Footer from './components/Footer.vue';

const app = createApp(App);

// Register components globally if needed
app.component('Navbar', Navbar);
app.component('HeroSection', HeroSection);
app.component('AnimeList', AnimeList);
app.component('Carousel', Carousel);
app.component('VisitSection', VisitSection);
app.component('MangaSection', MangaSection);
app.component('Footer', Footer);

// Mount the app to the #app element in your HTML file
app.mount('#app');
