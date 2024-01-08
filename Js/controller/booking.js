$(document).ready(function () {
  const userId = sessionStorage.getItem("id");
  axios
    .get(`http://localhost:3001/users/${userId}`)
    .then((response) => {
      const userData = response.data;
      renderBookingDetails(userData.bookings);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  function renderBookingDetails(bookings) {
    const bookingDetailsContainer = $("#bookingDetails");
    let length = bookings.length * 5;
    $("#loyalty_pts").text(length);
    console.log(length);
    // Iterate through user bookings and create HTML elements
    bookings.forEach((booking) => {
      const selectedMeals = getSelectedMeals(booking.selected_meals);

      const bookingHTML = `
            <div class="col-md-4">
              <img src="${
                booking.main_img
              }" width="300" height="250" alt="Movie Banner" class="banner-image" />
            </div>
            <div class="col-md-8 movie-details">
              <span class="mb-5 heading">${booking.name}</span>
              <hr />
              <p><strong>No. of Tickets Booked:</strong><span class="txt"> ${
                booking.no_of_tickets
              }</span></p>
              <p><strong>Date and Time:</strong><span class="txt"> ${
                booking.selected_date
              } | ${booking.selected_time}</span></p>
              <p><strong>Theatre:</strong> <span class="txt">${
                booking.theater
              }</span></p>
              <p><strong>Selected Meals:</strong><span class="txt"> ${selectedMeals}</span></p>
              <p><strong>Total Expense:</strong> <span class="txt">₹${booking.total_expense.toFixed(
                2
              )}</span></p>
            </div>
            <hr>
          `;

      const bookingRow = $("<div>").addClass("row movie-row").html(bookingHTML);
      bookingDetailsContainer.append(bookingRow);
    });
  }
  function getSelectedMeals(selectedMeals) {
    return selectedMeals
      .map((meal) => `${meal.meal_name} (₹${meal.meal_price.toFixed(2)})`)
      .join(", ");
  }
});
