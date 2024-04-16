<template>
  <section class="animelist mt-5 mb-5">
    <div class="container-md">
      <div class="contain" ref="contain">
        <div class="slide" ref="slide">
          <div v-for="(item, index) in animeList" :key="index" class="item" :style="{ backgroundImage: 'url(' + item.image + ')' }">
            <div class="content">
              <div class="name">{{ item.name }}</div>
              <div class="des"><p>{{ item.description }}</p></div>
              <button @click="watchAnime(item)">Watch</button>
            </div>
          </div>
       
        </div>
        
      </div>
      <div class="btn-container pb-2">
        <button class="btn mb-5" @click="prevAnime">Previous</button>
        <button class="btn mb-5" @click="nextAnime">Next</button>
      </div>
      <div>
    <button class="animepage">
      <router-link to="/anime" target="_blank">See More</router-link>
    </button>
  </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      animeList: [
        {
          name: 'Naruto',
          image: '/src/assets/images/Naruto.jpg',
          description: 'A powerful fox known as the Nine-Tails attacks Konoha...'
        },
        {
          name: 'Ninja Kamui',
          image: '/src/assets/images/kamui.jpg',
          description: 'After escaping his clan and going into hiding in rural America...'
        },
        {
          name: 'Bucchigiri?!',
          image: '/src/assets/images/bu.jpg',
          description: 'After Arajin Tomoshibi returns to his hometown and reunites with his childhood friend...'
        },
        {
          name: 'Solo Leveling',
          image: '/src/assets/images/SOLO.jpg',
          description: 'In a world where hunters — human warriors who possess supernatural abilities...'
        },
        {
          name: 'One Piece',
          image: '/src/assets/images/Onepiece.jpg',
          description: 'The world of One Piece is populated by humans and other races such as dwarves...'
        },
        {
          name: 'Demon Slayer',
          image: '/src/assets/images/Demonslayer.jpg',
          description: 'In Taishō era Japan, a secret organization known as the "Demon Slayer Corps" has waged a war against demons for centuries...'
        },
        // Add more anime objects here
      ],
      currentIndex: 0,
      itemWidth: 0,
    };
  },
  mounted() {
    this.itemWidth = this.$el.querySelector('.item').offsetWidth;
    this.duplicatePreviousSlides();
    this.updateSliderPosition();
  },
  methods: {
   
    duplicatePreviousSlides() {
      const slidesToDuplicate = this.animeList.slice(0, this.currentIndex);
      slidesToDuplicate.forEach(slide => {
        this.animeList.push({ ...slide });
      });
    },
    updateCurrentIndex(index) {
      this.currentIndex = index;
      this.updateSliderPosition();
    },
    prevAnime() {
      this.currentIndex = (this.currentIndex - 1 + this.animeList.length) % this.animeList.length;
      this.updateSliderPosition();
    },
    nextAnime() {
      this.currentIndex = (this.currentIndex + 1) % this.animeList.length;
      this.updateSliderPosition();
    },
    updateSliderPosition() {
      const centerIndex = Math.floor(this.animeList.length / 2);
      const newPosition = -((this.currentIndex - centerIndex) * this.itemWidth);
      this.$el.querySelector('.slide').style.transform = `translateX(${newPosition}px)`;
      this.$el.querySelector('.contain').style.backgroundImage = `url(${this.animeList[this.currentIndex].image})`;
    },
  },
  computed: {
    slideTransform() {
      return `translateX(-${this.currentIndex * this.itemWidth}px)`;
    },
  },
};
</script>

