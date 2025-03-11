document.getElementById("userNavigationMenu").innerHTML=`

  <!-- Nevgation Menu-->
  <nav>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="menuoffcanvas">
      <div class="offcanvas-header d-flex justify-content-between align-items-center">
        <h5 class="offcanvas-title">MobiKart</h5>
        <button class="close-icon" type="button" data-bs-dismiss="offcanvas">
          <img src="../assets/icons/menu-close.svg" alt="Close Menu">
        </button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">New arrival</a>
          </li>
          <hr />
          <!-- Categories Dropdown -->
          <li class="nav-item" id="dropdown">
            <a class="nav-link dropdown-toggle" role="button">Shop by category<span>+</span>
            </a>
            <ul class="submenu">
              <hr style="display: block">
              <li><a class="dropdown-item" href="#">Mobiles</a></li>
              <li><a class="dropdown-item" href="#">Laptops</a></li>
              <li><a class="dropdown-item" href="#">Accessories</a></li>
            </ul>
          </li>
          <hr />
          <li class="nav-item">
            <a class="nav-link" href="#">Special sell</a>
          </li>
          <hr />
          <li class="nav-item">
            <a class="nav-link" href="#">Treck your order</a>
          </li>
          <hr />
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <hr />
          <!-- User Account Dropdown -->
          <li class="nav-item">
            <a class="nav-link dropdown-toggle" role="button">
              Account <span>+</span>
            </a>
            <ul class="submenu">
              <hr />
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Orders</a></li>
              <li><a class="dropdown-item" href="#">Wishlist</a></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  

`;


  // Custom Dropdown Toggle (Accordion Style)
  document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function() {
      let submenu = this.nextElementSibling;
      let icon = this.querySelector("span");

      if (submenu.classList.contains('show')) {
        submenu.classList.remove('show');
        icon.textContent = "+";
      } else {
        document.querySelectorAll('.submenu').forEach(menu => menu.classList.remove('show'));
        document.querySelectorAll('.dropdown-toggle span').forEach(i => i.textContent = "+");
        submenu.classList.add('show');
        icon.textContent = "-";
      }
    });
  });

