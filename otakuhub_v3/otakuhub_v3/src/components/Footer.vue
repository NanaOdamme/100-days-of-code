<template>
    <footer class="footer ">
      <div class="container mb-5">
        <h1>Newsletter</h1>
        <div class="row justify-content-center mt-5 mb-4">
          <div class="col-md-6">
              <form class="d-flex">
                  <input type="email" class="form-control transparent-input mr-2" id="emailInput" aria-describedby="emailHelp"
                      placeholder="Enter your email">
                  <button type="submit" class="btn btn-custom mx-2">Subscribe</button>
              </form>
          </div>
      </div>
    </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h4>Connect with Us</h4>
            <div class="footer-icons">
              <a href="#"><i class="bi bi-facebook"></i></a>
              <a href="#"><i class="bi bi-twitter"></i></a>
              <a href="#"><i class="bi bi-instagram"></i></a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
              <a href="#"><i class="bi bi-youtube"></i></a>
            </div>
           
            <p>&copy; 2024 OTAKUHUB. All rights reserved.</p>
            <p class="mt-3">Designed By <span>Nana Akosua</span></p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Add component logic here if needed
  };
  </script>
  
  <style scoped>
  .transparent-input {
    background-color: transparent !important;
    border: 2px solid #7fff00;
    color: #fff;
}

.transparent-input::placeholder {
    color: #fff;
}

.btn-custom {
    background-color: #7fff00;
    border-color: #7fff00;
    color: #fff;
}
  /* Add scoped styles here */
 h1,
  span{
    color: #7fff00;
  }
  </style>
  