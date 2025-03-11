document.getElementById("userHeader").innerHTML=`    <header>
    <div class="container d-flex justify-content-between">
      <div class="menu-logo d-flex align-items-center justify-content-start gap-1">
        <button class="togal-button-open" data-bs-toggle="offcanvas" href="#menuoffcanvas">
          <img src="../assets/icons/menu-open.svg" alt="" />
        </button>
        <div class="logo">
          <img class="logo-img" width="50" src="../assets/images/logo.png" alt="" />
        </div>
      </div>

      <div class="mobile-icon-btn d-flex align-items-center justify-content-end gap-3">
        <img href="#searchoffcanvas" data-bs-toggle="offcanvas" src="../assets/icons/search.svg" alt="" />
        <img src="../assets/icons/account.svg" alt="" />
        <div class="cart-item-counter" data-bs-toggle="offcanvas" href="#cartoffcanvas">
          <img src="../assets/icons/cart.svg" alt="" />
          <div class="item-number">
            <span class="itemNumberCounter"></span>
          </div>
        </div>


      </div>


    </div>
  </header>
  `;