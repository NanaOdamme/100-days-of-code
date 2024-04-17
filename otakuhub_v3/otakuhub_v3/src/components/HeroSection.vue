<template>
  <section class="hero-section">
    <header><div class="navbar">
      <ul class="nav-list">
        <li class="nav-item">
          <a class="nav-link mx-lg-5" href="#animelist">New</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-lg-5" href="#manga">Manga</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-lg-5" href="#visit">Community</a>
        </li>
      </ul>
    </div></header>
    
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
header{
  margin-top: -200px;
  margin-bottom: 250px;
}
.navbar {
  display: flex;
  justify-content: center; 
}

.nav-list {
  display: flex;
  list-style-type: none; /* Remove default list styles */
  padding: 0;
}

.nav-item {
  margin: 0 10px; /* Adjust spacing between items */
}

.nav-link {
  text-decoration: none;
  color: #000000;
  font-weight:600;
  transition: .4s;
}
.nav-link:hover{
  color: rgb(255, 179, 0);
  transform: scale(1.2);
}
@media (max-width: 768px) {
  header{
    margin-top: -5px;
    margin-bottom: 90px;
  }
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
