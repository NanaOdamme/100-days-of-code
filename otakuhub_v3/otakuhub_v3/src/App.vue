<script setup>

</script>

<template>
  <main>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Otaku <span>Hub</span></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
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


.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9); /* Adjust background color and opacity as needed */
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
  color: #ff6200;
  text-decoration: none;
  font-weight: 500;
  margin-right: 20px;
  transition: .4s;
}
.nav-link:hover{
  color: #8d3702;
  transform: scale(1.2);
}
.hero-section {
  margin-top: 60px; 
}

.hero {
  text-align: center;
}




</style>
