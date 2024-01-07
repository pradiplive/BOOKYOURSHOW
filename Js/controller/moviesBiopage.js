$(document).ready(function () {
  let selectedCityId; // Variable to store selected city ID

  $(".city").click((event) => {
    selectedCityId = $(event.currentTarget).data("city-id");
    console.log("Selected City ID:", selectedCityId);

    // Store the selectedCityId in sessionStorage
    sessionStorage.setItem("selectedCityId", selectedCityId);
  });

  // Code for handling movie button click
  $(document).on("click", ".BookNow-movie-btn", function () {
    // Call to Service Method
    let movieId = $(this).attr("id");
    console.log("Movie ID:", movieId);

    // Retrieve the selected city ID from sessionStorage
    let selectedCityId = sessionStorage.getItem("selectedCityId");
    console.log("Selected City ID:", selectedCityId);

    if (selectedCityId !== null) {
      // Redirect to the movieBio.html page with both movie ID and city ID in the URL
      window.location.href = `../HTML/movieBio.html?pid=${movieId}&cid=${selectedCityId}`;
    } else {
      alert("Please Select a City!");
      console.error("Selected City ID is not stored");
    }
  });
});
