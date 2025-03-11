document.getElementById("userRecentlyViewsSection").innerHTML=`
<section class="container my-5">
  <h2 class="fw-bold text-center mb-4">Recently Viewed Products</h2>
  
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      
      <!-- Product 1 -->
      <div class="swiper-slide">
        <div class="card border-0 shadow-sm">
          <img src="https://picsum.photos/200?random=5" class="card-img-top" alt="Product 1">
          <div class="card-body text-center">
            <h6 class="fw-bold">Product Name</h6>
            <p class="text-muted">₹9,999</p>
          </div>
        </div>
      </div>

      <!-- Product 2 -->
      <div class="swiper-slide">
        <div class="card border-0 shadow-sm">
          <img src="https://picsum.photos/200?random=5" class="card-img-top" alt="Product 2">
          <div class="card-body text-center">
            <h6 class="fw-bold">Product Name</h6>
            <p class="text-muted">₹14,999</p>
          </div>
        </div>
      </div>

      <!-- Product 3 -->
      <div class="swiper-slide">
        <div class="card border-0 shadow-sm">
          <img src="https://picsum.photos/200?random=5" class="card-img-top" alt="Product 3">
          <div class="card-body text-center">
            <h6 class="fw-bold">Product Name</h6>
            <p class="text-muted">₹4,999</p>
          </div>
        </div>
      </div>

      <!-- Add more products as needed -->

    </div>



  </div>
</section>
`;



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false, // Disable infinite loop
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    allowTouchMove: true, // Enable manual sliding
    breakpoints: {
      320: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 }
    }
  });
