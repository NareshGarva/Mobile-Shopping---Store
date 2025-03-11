


document.getElementById("userCart").innerHTML = `
  <div class=" Cart offcanvas offcanvas-end Caroffcanvas" id="cartoffcanvas" tabindex="-1">
    <div id="notification-container"></div>
    <div class="offcanvas-header d-flex justify-content-between align-items-center">
      <h5 class="offcanvas-title" >Your cart • <span></span> <span>item</span></h5>
      <button class="close-icon" type="button" data-bs-dismiss="offcanvas">
        <img src="../assets/icons/menu-close.svg" alt="" />
      </button>
    </div>


    <div class="offcanvas-body">
      <div class="cart-empty-message">Your cart is empty.</div>
      <div class="cartproductlist">
        
        <div class="fade-in cartproductlistitems d-flex justify-content-between align-items-center">
          <div class="cartproductimg d-flex justify-content-left align-items-center gap-2">
            <img src="../assets/images/glow max.png" alt="" />
            <div class="cartproductcontent">
              <p class="product-title" title="Wireless Bluetooth Headphones with Noise Cancellation">
                Wireless Bluetooth Headphones with Noise Cancellation
              </p>
              <div style="padding: 10px 0" class="">
                <div class="productPrice">
                  <p>Price: ₹<span id="productPrice" class="produc-price" >1999 </span><s> 4838</s></p>
                </div>
              </div>
              <div class="cartproductinnercontent d-flex justify-content-between align-items-center">
                <div class="cartproductquality d-flex justify-content-center align-items-center">
                  <button class="quantity-btn decrease">−</button>
                  <input type="text" class="quantity-input" value="1" readonly>
                  <button class="quantity-btn increase">+</button>
                </div>
                <div class="cartdeleteicon d-flex justify-content-center align-items-center">
                  <a href="#"><img src="../assets/icons/delete.svg" alt="" /> <span></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    

      </div>
    </div>

        <div class="offcanvas-footer cartfooter">
          
      <!-- Coupon Section -->

      
<div>      <div class="cartCoupon justify-content-between align-items-center" style="display: none;">
        <input class="cartCouponInput" type="text" placeholder="Type coupon code here" />
        <button class="couponBtn">Apply</button>
      </div>
      <p class="have-a-code d-flex gap-3">
        Have a coupon code? <a href="#" id="applyCoupon">Apply Now</a>
      </p>
    </div>
<div class="carTotalPopup" style="display: none">
            <div class="catTotalLabel d-flex justify-content-between align-items-center">
            <p>Total MRP :</p>
            <p>₹ <span>500</span></p>
          </div>
          
                    <div class="catTotalLabel d-flex justify-content-between align-items-center">
            <p>MRP Discount :</p>
            <p>₹ <span>30</span></p>
          </div>
          
                    <div class="catTotalLabel d-flex justify-content-between align-items-center">
            <p>Shipping Charges :</p>
            <p>₹ <span>500</span></p>
          </div>
          <hr>
                    <div class="catTotalLabel d-flex justify-content-between align-items-center">
            <p>Total ammount to pay :</p>
            <p>₹ <span>500</span></p>
          </div>
</div>
          <hr />
      <!-- Checkout Section -->
      <div class="toral-checkout d-flex justify-content-between">
        <div class="cartTotal">
          <p class="catTotalP">Total: ₹ <span>83838</span></p>
          <span class="texsline">
            Including all taxes 
            <img class="upperarrow" src="../assets/icons/upperarrow.svg" alt="Expand" />
            <img style="display: none" class="lowerarrow" src="../assets/icons/lowerarrow.svg" alt="Collapse" />
          </span>
        </div>
        <button class="carCheckout">Checkout</button>
      </div>

    </div>

  </div>
  
  


`;


    // Update Cart Counter
    function updateCartCount() {
      let cartItems = document.querySelectorAll(".cartproductlistitems").length;
      let cartCount = document.querySelector(".itemNumberCounter");
      cartCount.textContent = cartItems;
    }
    updateCartCount();

    document.getElementById("applyCoupon").addEventListener("click", function() {
      let cartCoupon = document.querySelector(".cartCoupon");
      cartCoupon.style.display = (cartCoupon.style.display === "none") ? "flex" : "none";
    });



    // Toggle Cart Total Summary
    document.querySelector(".texsline").addEventListener("click", function() {
      let totalPopup = document.querySelector(".carTotalPopup");
      let upperarrow = document.querySelector(".upperarrow");
      let lowerarrow = document.querySelector(".lowerarrow");
      totalPopup.style.display = (totalPopup.style.display === "none") ? "block" : "none";
      upperarrow.style.display = (upperarrow.style.display === "none") ? "inline" : "none";
      lowerarrow.style.display = (lowerarrow.style.display === "none") ? "inline" : "none";
    });









    document.addEventListener("DOMContentLoaded", () => {

      function updateCartCount() {
        let cartItems = document.querySelectorAll(".cartproductlistitems").length;
        let cartCount = document.querySelector(".itemNumberCounter");
        let cartTitleCount = document.querySelector(".offcanvas-title span");
        let cartEmptyMessage = document.querySelector(".cart-empty-message");

        cartCount.textContent = cartItems;
        cartTitleCount.textContent = cartItems;

        // Show "Cart is empty" message if no items
        if (cartItems === 0) {
          cartEmptyMessage.style.display = "block";
        } else {
          cartEmptyMessage.style.display = "none";
        }
      }

      updateCartCount(); // Initial call


      // Quantity change logic
      document.querySelectorAll(".cartproductlistitems").forEach(container => {
        let decreaseBtn = container.querySelector(".decrease");
        let increaseBtn = container.querySelector(".increase");
        let quantityInput = container.querySelector(".quantity-input");
        let priceElement = container.querySelector(".produc-price");
        let removeBtn = container.querySelector(".cartdeleteicon a");
        let basePrice = parseInt(priceElement.textContent);

        function updatePrice() {
          let quantity = parseInt(quantityInput.value);
          priceElement.textContent = basePrice * quantity;
        }

        increaseBtn.addEventListener("click", () => {
          let value = parseInt(quantityInput.value);
          if (value < 10) {
            quantityInput.value = value + 1;
            updatePrice();
          }
        });

        decreaseBtn.addEventListener("click", () => {
          let value = parseInt(quantityInput.value);
          if (value > 1) {
            quantityInput.value = value - 1;
            updatePrice();
          }
        });

        removeBtn.addEventListener("click", (e) => {
          e.preventDefault();
          container.classList.add("fade-out"); // Add fade-out effect
          setTimeout(() => {
            container.remove();
            updateCartCount();
            showNotification(`Item removed from cart`);
          }, 500);
        });
      });
    });