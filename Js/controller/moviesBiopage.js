// $(document).ready(function () {
//   $(document).on("click", ".BookNow-movie-btn", function () {
//     //Call to Service Method
//     let id = $(this).attr("id");
//     console.log(id);
//     window.location.href = "../HTML/movieBio.html?pid=" + id;
//   });
// });
// $(document).ready(function () {
//   let selectedCityId; // Variable to store selected city ID

//   // Code for displaying city modal
//   // ...

//   // Code for handling city selection
//   $(".city").click((event) => {
//     selectedCityId = $(event.currentTarget).data("city-id");
//     console.log("Selected City ID:", selectedCityId);

//     // Your existing code for updating city images and #city_field
//     // ...
//   });

//   // Code for handling movie button click
//   $(document).on("click", ".BookNow-movie-btn", function () {
//     // Call to Service Method
//     let movieId = $(this).attr("id");
//     console.log("Movie ID:", movieId);

//     if (selectedCityId !== undefined) {
//       // Redirect to the movieBio.html page with both movie ID and city ID in the URL
//       window.location.href = `../HTML/movieBio.html?pid=${movieId}&cid=${selectedCityId}`;
//     } else {
//       console.error("Selected City ID is undefined");
//     }
//   });
// });

$(document).ready(function () {
  let selectedCityId; // Variable to store selected city ID

  // Code for displaying city modal
  // ...

  // Code for handling city selection
  $(".city").click((event) => {
    selectedCityId = $(event.currentTarget).data("city-id");
    console.log("Selected City ID:", selectedCityId);

    // Your existing code for updating city images and #city_field
    // ...
  });

  // Code for handling movie button click
  $(document).on("click", ".BookNow-movie-btn", function () {
    // Call to Service Method
    let movieId = $(this).attr("id");
    console.log("Movie ID:", movieId);

    // Retrieve the selected city ID from localStorage
    let selectedCityId = localStorage.getItem("selectedCityId");
    console.log("Selected City ID:", selectedCityId);

    if (selectedCityId !== null) {
      // Redirect to the movieBio.html page with both movie ID and city ID in the URL
      window.location.href = `../HTML/movieBio.html?pid=${movieId}&cid=${selectedCityId}`;
    } else {
      console.error("Selected City ID is not stored");
    }
  });
});
