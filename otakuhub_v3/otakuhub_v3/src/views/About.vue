<template>
    <div class="about-us">
      <div class="container mt-5 pt-5">
        <h1 class="text-center mb-5">About Us</h1>
        <div class="row">
          <div class="col-md-6 ">
            <h2>Our Mission</h2>
            <p>
              At OtakuHub, our mission is to provide anime enthusiasts with a comprehensive platform to explore and discover their favorite anime series, manga, and related content. We aim to create an engaging and user-friendly experience for all anime fans, offering a vast collection of anime genres, top-rated series, and valuable information about the anime world.
            </p>
            <h2>Our Vision</h2>
            <p>
              Our vision is to become the go-to destination for anime lovers worldwide, offering a rich and diverse database of anime content, including reviews, recommendations, and insights into the latest trends in the anime industry. We strive to foster a vibrant community of passionate anime fans and contribute positively to the global anime community.
            </p>
          </div>
          <div class="col-md-6 text-center">
            <h2>Meet Our Team</h2>
            <div class="team-member">
              <img src="/src/assets/images/nana.jpg" alt="Team Member 1" class="img-fluid">
              <h4>Nana Akosua</h4>
              <p>Founder & CEO</p>
            </div>
            <!-- Add more team members as needed -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Your component logic here
  };
  </script>
  
  <style scoped>
  .about-us {
    padding: 50px 0;
  }
  
  .about-us h1 {
    color: #333;
  }
  
  .about-us h2 {
    color: #333;
    margin-top: 30px;
  }
  
  .about-us p {
    color: #666;
  }
  
  .team-member {
    margin-top: 30px;
    text-align: center;
  }
  
  .team-member img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
  }
  
  .team-member h4 {
    color: #333;
    font-size: 20px;
  }
  
  .team-member p {
    color: #666;
    font-style: italic;
  }
  </style>
  