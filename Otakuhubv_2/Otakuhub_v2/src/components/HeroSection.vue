<template>
  <section class="hero-section">
    <div class="hero">
    <h1 class="h1">
      STREAM YOUR FAVOURITE <span>ANIME</span> <br />
      IN HIGH QUALITY. <br />
      FREE <span>MANGA</span> AT YOUR DISPOSAL
    </h1>
    <button class="btn-get-started">Get Started</button>
  </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<!-- Add styles if needed -->
<style scoped>
@media (max-width: 768px) {
  .hero-section{
    align-content: center;
    justify-content: center;
    text-align: center;
   
    height: 50vh;
    padding: 11px 20px;
  }
  .hero{
    margin: 0 auto;
    align-content: center;
  }
  .h1{
    color: rgb(0, 0, 0);
    font-size: 22px;
    font-weight: 900;
  }
}
</style>
