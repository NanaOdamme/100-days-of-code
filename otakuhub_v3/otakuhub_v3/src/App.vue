<script setup>

</script>

<template>
  <main>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">Otaku<span>Hub</span></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list"></i>
      </button>
      <div class="collapse navbar-collapse navbar-custom" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/anime" class="nav-link">Anime</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/manga" class="nav-link">Manga</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About Us</router-link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</main>
</template>


<style scoped>
/* Global styles for router-link */
.navbar-toggler{
  border: none;
  font-size: 26px;
  font-weight: 700;
  color: #bbba52;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0c3b2e;
  z-index: 1000; /* Ensure the navbar is above other content */
  display: flex;
  justify-content: center; 
  padding: 10px 0;
}

.nav-list {
  display: flex;
  list-style-type: none; 
  padding: 0;
}

.nav-item {
  margin: 0 10px; 
}

.nav-link {
  color: #ffba00;
  text-decoration: none;
  font-weight: 500;
  margin-right: 100px;
  transition: .4s;
}
.nav-link:hover{
  color: #bbba52;
  transform: scaleY(1.2);
}
.hero-section {
  margin-top: 60px; 
}

.hero {
  text-align: center;
}




</style>
