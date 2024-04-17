<template>
  <section class="animelist" id="animelist">
    <div class="container-md text-center">
      <h1>Discover The Best Animes <br>In Our Collection</h1>
      <div class="contain text-center" ref="contain">
        <div class="slide" ref="slide" :style="{ transform: slideTransform }">
          <div v-for="(item, index) in animeList" :key="index" :class="['item', { 'current-item': currentIndex === index }]" :style="{ backgroundImage: 'url(' + item.image + ')' }">
            <div class="content">
              <div class="name">{{ item.name }}</div>
              <div class="des"><p>{{ item.description }}</p></div>
              <a href="https://anitaku.so/" target="_blank" rel="noopener noreferrer">
                <button>Visit</button>
              </a>
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
      <a href="https://anitaku.so/" target="_blank">See More</a>
    </button>
  </div>
    </div>
  </section>
</template>

<script>
import animeListData from '@/components/animeList.json'; 
export default {
  data() {
    return {
      animeList: animeListData,

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
      const centerIndex = Math.floor(this.animeList.length / 2);
      const offset = (this.currentIndex - centerIndex) * this.itemWidth;
      return `translateX(-${offset}px)`;
    },
    currentItemClass() {
      return {
        'item': true,
        'current-item': true, // Add this class for the current item
      };
    },
   
  },
};
</script>

<style scoped>

h1{
  color:#fccf1a;
  font-weight: 600;
}

.current-item {
  transform: scale(1.1); /* Scale up the current item */
  z-index: 1; /* Ensure the current item is above other items */
}

.btn-container {
  margin-top: 20px; /* Adjust spacing between buttons and anime list */
}
@media (max-width: 768px) {
  .contain {
    max-width: 400px;
    width: 100%;
    max-height: 600px;
    background: #bbba52;
    margin: 30px 0;
    padding-right: 0px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    transition: background-image 0.5s ease;
}
.item {
  display: inline-block;
  width: 280px; /* Reduced width */
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 10px 20px #2e2c2c9d;
  margin-left: 50px;
  margin-right: -40px;
}
}
</style>