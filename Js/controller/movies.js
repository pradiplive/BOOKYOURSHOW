$(document).ready(function () {

    $('.navbar-container').html(`
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
      <img src="../assets/Logo/logo4.png" class="bi me-2 navbar-logo" width="40" height="32" role="img"
        aria-label="Bootstrap" />
      <use xlink:href="#bootstrap"></use>
      <span class="logo-name">BookYourShow</span>
    </a>

    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li><a href="index.html" class="nav-link px-2 link-secondary">Home</a></li>
      <li>
        <a href="#" class="nav-link px-2 link-secondary">Movie</a>
      </li>
      <li>
        <a href="Events.html" class="nav-link px-2 link-dark">Events</a>
      </li>
      <li>
        <a href="music.html" class="nav-link px-2 link-dark">Music</a>
      </li>
      <li>
        <a href="sports.html" class="nav-link px-2 link-dark">Sports</a>
      </li>
    </ul>
    <button class="city_btn mx-2" id="city_field" data-bs-toggle="modal" data-bs-target="#cityModal">
      Select City<i class="fa-solid fa-angle-down"></i>
    </button>
    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
      <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
    </form>

    <div class="dropdown text-end">
      <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle user-profile-container"
        id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <!-- <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"> -->
        <i class="fa-solid fa-user"></i>
      </a>
      <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style="">
        <li><a class="dropdown-item" href="#">Your Profile</a></li>
        <li><a class="dropdown-item" href="#">Your Bookings</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    `);


    $('.language-bottom, .format-bottom, .genre-bottom, .price-bottom, #fa-angle-up1, #fa-angle-up2, #fa-angle-up3,#fa-angle-up4 ').hide();

    $('.language-up').click(function () {
        $('#fa-angle-down1').toggle();
        $('.language-bottom, #fa-angle-up1').toggle();
        
    });
    $('.format-up').click(function () {
        $('#fa-angle-down2').toggle();
        $('.format-bottom, #fa-angle-up2').toggle();
        
    });
    $('.genre-up').click(function () {
        $('#fa-angle-down3').toggle();
        $('.genre-bottom, #fa-angle-up3').toggle();
        
    });
    $('.price-up').click(function () {
        $('#fa-angle-down4').toggle();
        $('.price-bottom, #fa-angle-up4').toggle();
        
    });
});