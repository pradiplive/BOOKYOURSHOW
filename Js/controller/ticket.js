$(document).ready(function () {
  let selectedSeats = [];
  // let bookedSeats = [];
  let selectedData = {};
  let totalAmount = 0;
  let movieData;

  async function fetchMovieDetails() {
    try {
      let urlParams = new URLSearchParams(window.location.search);
      let id = urlParams.get("movieId");
      let city_id = urlParams.get("cityId");

      const response = await axios.get("http://localhost:3000/movies");
      movieData = response.data[id];
      if (movieData.name) {
        $(".heading2, .title").text(`Movie Name : ${movieData.name}`);
        $(".__movie-name").text(`${movieData.name}`);
      }

      if (movieData.main_img) {
        $("#pay_Img").attr("src", movieData.main_img);
      }

      renderTheatres(movieData.theatre);
    } catch (error) {
      console.error("Error fetching movie details", error);
    }
  }

  fetchMovieDetails();

  function renderTheatres(theatres) {
    const city_id = sessionStorage.getItem("selectedCityId");

    const timeSelections = $("#timeSelections");

    const single_t = theatres.filter((theater) => {
      if (theater.city_id == city_id) {
        return theater;
      }
    });

    single_t.forEach((theatre, index) => {
      const showtimes = theatre.showtimes;

      if (!theatre.showtimes) {
        return;
      }

      const timeLi = $("<li>").addClass("time-li");
      const screenDiv = $("<div>").addClass("screens").text(theatre.name);
      timeLi.append(screenDiv);

      const timeBtnDiv = $("<div>").addClass("time-btn");

      showtimes.forEach((showtime) => {
        const time = showtime.time;
        const bookedSeats = showtime.bookedSeats;

        const screenTimeDiv = $("<div>").addClass("screen-time").text(time); // Display the time

        screenTimeDiv.on("click", function () {
          timeFunction($(this), bookedSeats); // Pass time and bookedSeats to timeFunction
        });

        timeBtnDiv.append(screenTimeDiv);
      });

      timeLi.append(timeBtnDiv);
      timeSelections.append(timeLi);
    });
  }

  function updateProgressBar(step) {
    var progressBarSteps = $(".progressbar-class li");
    progressBarSteps.removeClass("active not_active");

    progressBarSteps.eq(step - 1).addClass("active");

    for (var i = step; i < progressBarSteps.length; i++) {
      progressBarSteps.eq(i).addClass("not_active");
    }
  }

  function generateDateCells() {
    var carouselContainer = $("#dateCarousel");
    var currentDate = new Date();

    for (var i = 0; i < 9; i++) {
      var dateCell = $("<div>")
        .addClass("carousel-cell")
        .attr("id", "date" + (i + 1));

      dateCell.on("click", function () {
        handleDateSelection($(this));
      });

      var dateNumeric = currentDate.getDate();
      var dayOfMonth = currentDate.toLocaleDateString("en-US", {
        month: "long",
      });

      dateCell.html(`
                <div class="date-numeric">${dateNumeric}</div>
                <div class="date-month">${dayOfMonth}</div>
            `);

      carouselContainer.append(dateCell);

      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  function handleDateSelection(selectedDate) {
    var dateCells = $(".carousel-cell");
    dateCells.removeClass("selected");

    selectedDate.addClass("selected");
  }
  generateDateCells();

  function timeFunction(selectedTimeElement, bookedSeats) {
    var selectedDateElement = $(".carousel-cell.selected");

    if (!selectedDateElement.length) {
      alert("Please select a date");
      return;
    }

    var selectedDate = selectedDateElement.find(".date-numeric").text();
    var selectedMonth = selectedDateElement.find(".date-month").text();

    if (!selectedTimeElement) {
      alert("Please select a time");
      return;
    }

    var selectedScreenTime = selectedTimeElement.text();
    var selectedScreen = selectedTimeElement
      .closest(".time-li")
      .find(".screens")
      .text();

    var selectedDateTimeElement = $("#selectedDateTime");

    var fullDate = `${selectedDate} ${selectedMonth} 2024`;
    selectedDateTimeElement.html(`
            <div>Selected Date: ${fullDate}</div>
            <div>Selected Time: ${selectedScreenTime}</div>
            <div>Theatre: ${selectedScreen}</div>
        `);

    selectedData = {
      selectedDate: fullDate,
      selectedTime: selectedScreenTime,
      selectedTheatre: selectedScreen,
    };

    $("fieldset:nth-of-type(1)").hide();
    $("fieldset:nth-of-type(2)").show();

    updateProgressBar(2);

    // Pass bookedSeats to the next step
    generateSeatSelection(bookedSeats);
  }

  function generateSeatSelection(bookedSeats) {
    let seats = $(".all-seats");
    seats.empty();

    for (var i = 0; i < 108; i++) {
      let isBooked = bookedSeats && bookedSeats.includes(i + 1);

      let seatSection = getSeatSection(i + 1);
      let bookedClass = isBooked ? "booked" : "";
      let seatSectionClass = `seat-${seatSection}`;
      let disabledAttribute = isBooked ? "disabled" : ""; // Add this line

      seats.append(`
            <input type="checkbox" name="tickets" id="s${
              i + 1
            }" ${disabledAttribute} /> <!-- Update this line -->
            <label for="s${
              i + 1
            }" class="seat ${seatSectionClass} ${bookedClass}"></label> <!-- Update this line -->
        `);
    }

    let tickets = seats.find("input");

    const seatPrices = {
      G: 300,
      S: 200,
      B: 100,
    };

    let amount = 0;

    tickets.on("change", function () {
      let ticket = $(this);

      let count = Number($(".count").text());
      let row = ticket.prop("id")[0];
      let seatNumber = parseInt(ticket.prop("id").slice(1));

      if (ticket.prop("checked")) {
        count += 1;
        amount += seatPrices[getSeatSection(seatNumber)];
        selectedSeats.push(`${getSeatSection(seatNumber)}${seatNumber}`);
      } else {
        count -= 1;
        amount -= seatPrices[getSeatSection(seatNumber)];
        selectedSeats = selectedSeats.filter(
          (seat) => seat !== `${getSeatSection(seatNumber)}${seatNumber}`
        );
      }

      $(".amount").text(amount);
      $(".count").text(count);
      $("#selectedSeats").text(`Tickets: ${selectedSeats.join(", ")}`);
    });
  }

  function getSeatSection(seatNumber) {
    if (seatNumber <= 36) {
      return "G";
    } else if (seatNumber <= 72) {
      return "S";
    } else {
      return "B";
    }
  }

  $(".back").on("click", function () {
    $("fieldset:first-of-type").show();
    $("fieldset:nth-of-type(2)").hide();

    updateProgressBar(1);
  });

  $("#seatBooking_btn").on("click", function () {
    $(".__movie-theatre").text(selectedData.selectedTheatre);
    $(".__seats").text(selectedSeats.join(", "));
    $(".__date").text(selectedData.selectedDate);
    $(".__time").text(selectedData.selectedTime);

    $("fieldset:nth-of-type(2)").hide();
    $("fieldset:nth-of-type(3)").show();

    updateProgressBar(3);
  });
  // data.js
  const meals = [
    {
      id: 1,
      name: "Burger",
      price: 80,
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS.jpg",
      desc: "Patty of ground beef grilled & placed between two halves bun.",
    },
    {
      id: 2,
      name: "Pizza",
      price: 100,
      image:
        "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?cs=srgb&dl=pizza-2619967.jpg&fm=jpg",
      desc: "A delicious way, indulge in flavorful combination of ingredients.",
    },
    {
      id: 3,
      name: "Salad",
      price: 60,
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Simple-Italian-Salad_EXPS_FT20_25957_F_0624_1-1.jpg",
      desc: "Good way to get your important vitamins, minerals, and fiber.",
    },
    // Add more meals as needed
  ];

  const mealList = $("#mealList");
  const cartItems = $("#cartItems");
  const cart = [];

  // Display meals
  meals.forEach((meal) => {
    const mealItem = $("<div>").addClass(
      "list-group-item d-flex justify-content-center align-items-center meal-item orders-container col-sm-6 col-md-6 col-lg-6"
    ).html(`
  
          <div class="food-card food-card--vertical">
          <div class="food-card_img">
            <img src="${meal.image}" alt="${meal.name}">
            <div ><i class="fa fa-heart"></i></div>
          </div>
          <div class="food-card_content">
            <div class="food-card_title-section">
              <div class="food-card_title">${meal.name}</div>
              <div class="food-card_author">${meal.desc}</div>
            </div>
            <div class="food-card_bottom-section">
              <div class="space-between">
                <div class="food-card_calories" >
                  <span class="fa fa-fire"></span> 220 - 280 Kcal
                </div>
                <div class="pull-right">
                  <span class="badge badge-success">Veg</span>
                </div>
              </div>
              <hr class="food_seperator_line">
              <div class="space-between">
                <div class="food-card_price">
                  <span>₹ ${meal.price} only</span>
                </div>
                <div class="food-card_order-count">
                  <div class="input-group mb-3" id="inDbutton">
                    <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary minus-btn" type="button" id="button-addon1" onclick="decreaseQuantity(${meal.id})"><i class="fa fa-minus"></i></button>                    
                    </div>
                    <span id="quantity${meal.id}" style="height : 45px" class="form-control input-manulator">0</span>
                    
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><i class="fa fa-plus" onclick="increaseQuantity(${meal.id})"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        `);
    mealList.append(mealItem);
  });

  // Add meal to cart
  function addToCart(mealId, quantity) {
    const selectedMeal = meals.find((meal) => meal.id === mealId);

    if (selectedMeal) {
      const existingCartItem = cart.find((item) => item.id === mealId);

      if (existingCartItem) {
        existingCartItem.quantity += quantity;
      } else {
        cart.push({ ...selectedMeal, quantity });
      }

      updateCartView();
    }
  }

  // Update the cart view
  function updateCartView() {
    cartItems.html("");
    let totalFoodAmount = 0; // Initialize totalAmount here

    cart.forEach((item) => {
      const cartItem = $("<li>").addClass(
        "list-group-item d-flex align-items-center mb-2 listt"
      ).html(`
            <i class="fa-solid fa-utensils"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            ${item.name} - ₹ ${item.price} x ${item.quantity}
          `);
      cartItems.append(cartItem);
      totalFoodAmount += item.price * item.quantity;
    });

    const totalElement = $("<li>").addClass(
      "list-group-item d-flex align-items-left mb-2 mt-5 listt total"
    ).html(`
            <strong>Total Amount: ₹ ${totalFoodAmount}</strong> 
          `);
    cartItems.append(totalElement);

    const ticketAmount = parseInt($(".amount").text(), 10);
    totalAmount = ticketAmount + totalFoodAmount;

    $(".food-price").text(`₹ ${totalFoodAmount}`);
    $(".__ticket-price").text(`₹ ${ticketAmount}`);
    $(".__amount-payable").text(`₹ ${totalAmount}`);
  }

  // Increase quantity
  window.increaseQuantity = function (mealId) {
    const quantityElement = $(`#quantity${mealId}`);
    const quantity = parseInt(quantityElement.text(), 10) + 1;
    quantityElement.text(quantity);
    addToCart(mealId, 1);
  };

  // Decrease quantity
  window.decreaseQuantity = function (mealId) {
    const quantityElement = $(`#quantity${mealId}`);
    const quantity = parseInt(quantityElement.text(), 10);
    if (quantity > 0) {
      quantityElement.text(quantity - 1);
      addToCart(mealId, -1);
    }
  };

  $("#checkout").on("click", function () {
    $("fieldset:nth-of-type(3)").hide();
    $("fieldset:nth-of-type(4)").show();

    updateProgressBar(4);
  });

  function updateMoviesJson(updatedMovieData) {
    const movieId = updatedMovieData.id; // Assuming there's an 'id' property in your movie data

    if (!movieId) {
      console.error("Error: Movie ID is not available");
      return;
    }

    axios
      .put(`http://localhost:3000/movies/${movieId}`, updatedMovieData)
      .then((response) => {
        console.log(
          `Movie with ID ${movieId} updated successfully`,
          response.data
        );
      })
      .catch((error) => {
        console.error(`Error updating movie with ID ${movieId}`, error);
      });
  }

  $("#pay_btn").on("click", function () {
    const selectedTheatreIndex = movieData.theatre.findIndex((theatre) => {
      return (
        theatre.name.trim().toLowerCase() ===
        selectedData.selectedTheatre.trim().toLowerCase()
      );
    });

    if (selectedTheatreIndex !== -1) {
      const selectedTheatre = movieData.theatre[selectedTheatreIndex];

      const selectedShowtimeIndex = selectedTheatre.showtimes.findIndex(
        (showtime) => showtime.time.trim() === selectedData.selectedTime
      );

      if (selectedShowtimeIndex !== -1) {
        movieData.theatre[selectedTheatreIndex].showtimes[
          selectedShowtimeIndex
        ].bookedSeats = [
          ...movieData.theatre[selectedTheatreIndex].showtimes[
            selectedShowtimeIndex
          ].bookedSeats,
          ...selectedSeats.map((seat) => parseInt(seat.slice(1))),
        ];

        updateMoviesJson(movieData);
        saveBookingToDb();
        selectedSeats = [];

        alert("Ticket Booking Successful!");
      } else {
        console.log("Invalid Showtime");
      }
    }
  });

  function saveBookingToDb() {
    // const bookingId = getLatestBookingId() + 1;
    const bookingData = {
      // id: bookingId,
      name: movieData.name,
      main_img: movieData.main_img,
      theater: selectedData.selectedTheatre,
      no_of_tickets: selectedSeats.length,
      selected_seats: selectedSeats,
      selected_date: selectedData.selectedDate,
      selected_time: selectedData.selectedTime,
      selected_meals: getSelectedMeals(),
      total_expense: totalAmount,
    };

    console.log(bookingData);
    const userId = sessionStorage.getItem("id");
    axios
      .get(`http://localhost:3001/users/${userId}`)
      .then((userResponse) => {
        const userData = userResponse.data;

        // Append the new booking data to the "bookings" array
        userData.bookings = userData.bookings || [];
        userData.bookings.push(bookingData);

        // Update the user data with the new booking
        return axios.patch(`http://localhost:3001/users/${userId}`, userData);
      })
      .then((response) => {
        console.log("Booking saved successfully", response.data);
      })
      .catch((error) => {
        console.error("Error saving booking", error);
      });
  }
  function getSelectedMeals() {
    // Implement a logic to get the selected meals from the cart
    return cart.map((item) => ({
      id: item.id,
      meal_name: item.name,
      meal_price: item.price * item.quantity,
    }));
  }
});
