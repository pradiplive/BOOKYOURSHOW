
// Function to fetch movies data from a JSON file
async function fetchMoviesData() {
  const response = await fetch('../database/movie.json');
  const data = await response.json();
  // console.log(data);
  return data.movies;
}

// Load movies data on page load
fetchMoviesData().then(moviesData => {
  // Initial load of all movies
  displayMovies(moviesData);
});

// Function to filter movies based on selected checkboxes
function filterMovies() {
  console.log('inder fdilter');
  const englishFilter = document.getElementById('language-english').checked;
  const hindiFilter = document.getElementById('language-hindi').checked;
  const tamilFilter = document.getElementById('language-tamil').checked;
  const teluguFilter = document.getElementById('language-telugu').checked;
  const kannadaFilter = document.getElementById('language-kannada').checked;
  const marathiFilter = document.getElementById('language-marathi').checked;
  const gujratiFilter = document.getElementById('language-gujrati').checked;

  const actionFilter = document.getElementById('genre-action').checked;
  const dramaFilter = document.getElementById('genre-drama').checked;
  const comedyFilter = document.getElementById('genre-comedy').checked;
  const thrillerFilter = document.getElementById('genre-thriller').checked;
  const fantasyFilter = document.getElementById('genre-fantacy').checked;
  const adventureFilter = document.getElementById('genre-adventure').checked;
  const romanticFilter = document.getElementById('genre-ramance').checked;

  fetchMoviesData().then(moviesData => {
    // console.log(moviesData);
    const filteredMovies = moviesData.filter(movie => {
      const languageMatch =
        (englishFilter && movie.language.toLowerCase().includes('english')) ||
        (hindiFilter && movie.language.toLowerCase().includes('hindi')) ||
        (tamilFilter && movie.language.toLowerCase().includes('tamil')) ||
        (kannadaFilter && movie.language.toLowerCase().includes('kannada')) ||
        (marathiFilter && movie.language.toLowerCase().includes('marathi')) ||
        (gujratiFilter && movie.language.toLowerCase().includes('gujrati')) ||
        (teluguFilter && movie.language.toLowerCase().includes('telugu'));

      const genreMatch =
        (actionFilter && movie.genre.toLowerCase().includes('action')) ||
        (fantasyFilter && movie.genre.toLowerCase().includes('fantasy')) ||
        (dramaFilter && movie.genre.toLowerCase().includes('drama')) ||
        (comedyFilter && movie.genre.toLowerCase().includes('comedy')) ||
        (thrillerFilter && movie.genre.toLowerCase().includes('thriller')) ||
        (adventureFilter && movie.genre.toLowerCase().includes('adventure')) ||
        (romanticFilter && movie.genre.toLowerCase().includes('romantic'));

      return languageMatch || genreMatch;
    });

    displayMovies(filteredMovies);
  });
}

// Function to display movies or "No Result Found" on the webpage
function displayMovies(movies) {
  console.log(movies);
  const movieListContainer = document.getElementById('#movies-container-page');
  // movieListContainer.innerHTML = '';
  $('#movies-container-page').html(``);

  if (movies.length === 0) {
    axios.get('http://localhost:3000/movies')
        .then((response) => {
            // console.log(response.data);
            $("#movies-container-page").html('');
            let data = response.data;
            for (let d of data) {
                // console.log(d.main_img);
                let card = `
                        <div class="card" style="background-color: black;">
                            <img
                                src="${d.main_img}"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">${d.name}</h5>
                                <p class="card-text">
                                ${d.genre}
                                </p>
                                <p>
                                U/A &nbsp;&nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i>
                                ${d.language}
                                </p>
                                <a href="#" class="btn btn-primary BookNow-movie-btn"  style="border:none;" id="BookNow-movies-${d.id}">Book Now</a>
                            </div>
                        </div>
            `;
                $("#movies-container-page").append(card);

            }

        })
        .catch(() => {

        })
  } else {
    movies.forEach(d => {
      // const movieName = document.createElement('p');
      // movieName.textContent = movie.id;
      // movieListContainer.appendChild(movieName);
      console.log(d);
      let card = `
                        <div class="card" style="background-color: black;">
                            <img
                                src="${d.main_img}"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">${d.name}</h5>
                                <p class="card-text">
                                ${d.genre}
                                </p>
                                <p>
                                U/A &nbsp;&nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i>
                                ${d.language}
                                </p>
                                <a href="#" class="btn btn-primary BookNow-movie-btn"  style="border:none;" id="BookNow-movies-${d.id}">Book Now</a>
                            </div>
                        </div>
            `;
      $("#movies-container-page").append(card);
    });
  }
}