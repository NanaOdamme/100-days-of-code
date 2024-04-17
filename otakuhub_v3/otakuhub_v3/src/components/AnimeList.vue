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
      autoSlideInterval: null, // Interval ID for automatic sliding
      isMouseOver: false, // Track mouse hover state
      touchStartX: 0, // Track touch start position
      touchEndX: 0, // Track touch end position
    };
  },
  mounted() {
    this.itemWidth = this.$el.querySelector('.item').offsetWidth;
    this.duplicatePreviousSlides();
    this.updateSliderPosition();
    this.startAutoSlide(); // Start automatic sliding
    this.$el.addEventListener('mouseenter', this.handleMouseEnter);
    this.$el.addEventListener('mouseleave', this.handleMouseLeave);
    this.$el.addEventListener('touchstart', this.handleTouchStart);
    this.$el.addEventListener('touchmove', this.handleTouchMove);
    this.$el.addEventListener('touchend', this.handleTouchEnd);
  },
  beforeDestroy() {
    this.stopAutoSlide(); // Clean up interval before component destruction
    this.$el.removeEventListener('mouseenter', this.handleMouseEnter);
    this.$el.removeEventListener('mouseleave', this.handleMouseLeave);
    this.$el.removeEventListener('touchstart', this.handleTouchStart);
    this.$el.removeEventListener('touchmove', this.handleTouchMove);
    this.$el.removeEventListener('touchend', this.handleTouchEnd);
  },
  methods: {
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        if (!this.isMouseOver) {
          this.nextAnime();
        }
      }, 3000); // Change the interval time (in milliseconds) as needed
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    },
    handleMouseEnter() {
      this.isMouseOver = true;
    },
    handleMouseLeave() {
      this.isMouseOver = false;
    },
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      const touchDistance = this.touchEndX - this.touchStartX;
      if (Math.abs(touchDistance) > 50) { // Adjust threshold for swipe sensitivity
        if (touchDistance > 0) {
          this.prevAnime(); // Swipe right (move to previous slide)
        } else {
          this.nextAnime(); // Swipe left (move to next slide)
        }
      }
      this.touchStartX = 0;
      this.touchEndX = 0;
    },
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