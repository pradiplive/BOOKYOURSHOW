const movieListContainer = document.querySelector("[data-movie-list-container]");
const searchInput = document.querySelector("[data-search]");
let movieData = [];

fetch("../../database/movie.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    movieData = data.movies;
    // console.log(movieData)
    // displayMovieNames(); // Initial display of all movie names
    searchInput.addEventListener("input", handleSearchInput);
    // searchInput.addEventListener("focusout", handleFocusOut);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function displayMovieNames(filteredMovies) {
  const moviesToDisplay = filteredMovies || movieData;
  // console.log(moviesToDisplay);

  const searchResultsContainer = document.createElement("div");
  searchResultsContainer.className = "search-results-list";

  

  if (moviesToDisplay.length !== 0) {
    let count=0;
    moviesToDisplay.forEach((movie) => {
      const movieListItem = document.createElement("div");
      movieListItem.className = `search-results-list-item`;
      movieListItem.id = `BookNow-movies-${count++}`;
      movieListItem.textContent = movie.name;

      // Add click event listener to redirect to www.google.com
      movieListItem.addEventListener("click", function () {
        let id = movie.id;
        console.log(id);
        window.location.href = "../../HTML/movieBio.html?pid=BookNow-movies-" + id;
        
      });

      searchResultsContainer.appendChild(movieListItem);
    });
  }
  

  movieListContainer.innerHTML = "";
  movieListContainer.appendChild(searchResultsContainer);
}

function handleSearchInput() {
  const value = searchInput.value.toLowerCase();

  if (value === "") {
    movieListContainer.innerHTML = "";
    return;
  }

  const filteredMovies = movieData.filter((movie) => movie.name.toLowerCase().includes(value));
  displayMovieNames(filteredMovies);

  const searchResultsContainer = document.querySelector(".search-results-list");
  searchResultsContainer.style.display = "block";
}

// function handleFocusOut(event) {
//   const clickedOutside =
//     !event.relatedTarget("[data-search]") ;

//   if (clickedOutside) {
//     movieListContainer.innerHTML = "";
//   }
// }





















// const movieListContainer = document.querySelector("[data-movie-list-container]");
// const searchInput = document.querySelector("[data-search]");
// let movieData = [];
// let selectedSuggestionIndex = -1; // To track the selected suggestion index

// fetch("../JS/db.json")
//   .then((res) => res.json())
//   .then((data) => {
//     movieData = data.movies;
//     displayMovieNames(); // Initial display of all movie names
//     searchInput.addEventListener("input", handleSearchInput);
//     searchInput.addEventListener("focusout", handleFocusOut);
//     searchInput.addEventListener("keydown", handleKeyDown);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// function displayMovieNames(filteredMovies) {
//   const moviesToDisplay = filteredMovies || movieData;

//   const searchResultsContainer = document.createElement("div");
//   searchResultsContainer.className = "search-results-list";

//   if (moviesToDisplay.length !== 0) {
//     moviesToDisplay.forEach((movie, index) => {
//       const movieListItem = document.createElement("div");
//       movieListItem.className = "search-results-list-item";
//       movieListItem.textContent = movie.name;

//       // Add click event listener to redirect to www.google.com
//       movieListItem.addEventListener("click", function () {
//         window.location.href = "https://www.google.com";
//       });

//       searchResultsContainer.appendChild(movieListItem);

//       // Highlight the first suggestion by default
//       if (index === 0) {
//         movieListItem.classList.add("selected");
//       }
//     });
//   }

//   movieListContainer.innerHTML = "";
//   movieListContainer.appendChild(searchResultsContainer);
// }

// function handleSearchInput() {
//   const value = searchInput.value.toLowerCase();

//   if (value === "") {
//     movieListContainer.innerHTML = "";
//     return;
//   }

//   const filteredMovies = movieData.filter((movie) =>
//     movie.name.toLowerCase().includes(value)
//   );
//   displayMovieNames(filteredMovies);

//   const searchResultsContainer = document.querySelector(".search-results-list");
//   searchResultsContainer.style.display = "block";
// }

// function handleFocusOut(event) {
//   const clickedOutside = !event.relatedTarget || !event.relatedTarget.matches("[data-search]");

//   if (clickedOutside) {
//     movieListContainer.innerHTML = "";
//   }
// }

// function handleKeyDown(event) {
//     const searchResultsContainer = document.querySelector(".search-results-list");
//     const suggestions = searchResultsContainer.querySelectorAll(".search-results-list-item");
  
//     switch (event.key) {
//       case "ArrowUp":
//         event.preventDefault();
//         moveSelection(-1, suggestions);
//         break;
//       case "ArrowDown":
//         event.preventDefault();
//         if (searchInput.value.trim() !== "") {
//           moveSelection(1, suggestions);
//         }
//         break;
//       case "Enter":
//         event.preventDefault();
//         selectSuggestion(suggestions[selectedSuggestionIndex]);
//         break;
//     }
//   }
  

// function moveSelection(direction, suggestions) {
//   const lastIndex = suggestions.length - 1;

//   // Remove the selected class from the current selected suggestion
//   if (selectedSuggestionIndex >= 0) {
//     suggestions[selectedSuggestionIndex].classList.remove("selected");
//   }

//   // Update the selected suggestion index
//   selectedSuggestionIndex += direction;

//   // Handle circular navigation
//   if (selectedSuggestionIndex < 0) {
//     selectedSuggestionIndex = lastIndex;
//   } else if (selectedSuggestionIndex > lastIndex) {
//     selectedSuggestionIndex = 0;
//   }

//   // Add the selected class to the new selected suggestion
//   suggestions[selectedSuggestionIndex].classList.add("selected");
// }

// function selectSuggestion(selectedSuggestion) {
//   if (selectedSuggestion) {
//     searchInput.value = selectedSuggestion.textContent;
//     movieListContainer.innerHTML = "";
//   }
//   // Reset the selected suggestion index
//   selectedSuggestionIndex = -1;
// }

