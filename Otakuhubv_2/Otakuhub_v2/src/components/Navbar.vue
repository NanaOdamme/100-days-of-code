<template>
    <nav class="navbar navbar-expand-lg navbar-light">
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
              <a class="nav-link mx-lg-5" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-5" href="#animelist">Anime List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-5" href="#manga">Manga</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-5" href="#visit">Community</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <!-- Add styles if needed -->
  <style scoped>
  /* Your navbar styles here */
  </style>
  