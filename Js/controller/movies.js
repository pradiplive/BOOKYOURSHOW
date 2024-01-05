$(document).ready(function () {


    $('#language-all').click(function () { 
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
        
    });

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

    // axios.get('http://localhost:3000/movies')
    //     .then((response) => {
    //         // console.log(response.data);
    //         let data = response.data;
    //         for (let d of data) {
    //             // console.log(d.main_img);
    //             let card = `
    //                     <div class="card" style="background-color: black;">
    //                         <img
    //                             src="${d.main_img}"
    //                             class="card-img-top"
    //                             alt="..."
    //                         />
    //                         <div class="card-body">
    //                             <h5 class="card-title">${d.name}</h5>
    //                             <p class="card-text">
    //                             ${d.genre}
    //                             </p>
    //                             <p>
    //                             U/A &nbsp;&nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i>
    //                             ${d.language}
    //                             </p>
    //                             <a href="#" class="btn btn-primary BookNow-movie-btn"  style="border:none;" id="BookNow-movies-${d.id}">Book Now</a>
    //                         </div>
    //                     </div>
    //         `;
    //             $("#movies-container-page").append(card);

    //         }

    //     })
    //     .catch(() => {

    //     })

    // $('.movie-filter-btn').click(function () { 
    //     const englishFilter = document.getElementById('language-english').checked;
    //     const hindiFilter = document.getElementById('language-hindi').checked;
    //     const tamilFilter = document.getElementById('language-tamil').checked;
    //     const teluguFilter = document.getElementById('language-telugu').checked;
    //     const kannadaFilter = document.getElementById('language-kannada').checked;
    //     const marathiFilter = document.getElementById('language-marathi').checked;
    //     const gujratiFilter = document.getElementById('language-gujrati').checked;

    //     const actionFilter = document.getElementById('genre-action').checked;
    //     const dramaFilter = document.getElementById('genre-drama').checked;
    //     const comedyFilter = document.getElementById('genre-comedy').checked;
    //     const thrillerFilter = document.getElementById('genre-thriller').checked;
    //     const fantasyFilter = document.getElementById('genre-fantacy').checked;
    //     const adventureFilter = document.getElementById('genre-adventure').checked;
    //     const romanticFilter = document.getElementById('genre-ramance').checked;

        
    // });
    

    // Load movies data on page load
    // fetchMoviesData().then(moviesData => {
    //     // Initial load of all movies
    //     displayMovies(moviesData);
    // });

    // // Function to filter movies based on selected checkboxes
    // function filterMovies() {
    //     const englishFilter = document.getElementById('language-english').checked;
    //     const hindiFilter = document.getElementById('language-hindi').checked;
    //     const tamilFilter = document.getElementById('language-tamil').checked;
    //     const teluguFilter = document.getElementById('language-telugu').checked;
    //     const kannadaFilter = document.getElementById('language-kannada').checked;
    //     const marathiFilter = document.getElementById('language-marathi').checked;
    //     const gujratiFilter = document.getElementById('language-gujrati').checked;

    //     const actionFilter = document.getElementById('genre-action').checked;
    //     const dramaFilter = document.getElementById('genre-drama').checked;
    //     const comedyFilter = document.getElementById('genre-comedy').checked;
    //     const thrillerFilter = document.getElementById('genre-thriller').checked;
    //     const fantasyFilter = document.getElementById('genre-fantacy').checked;
    //     const adventureFilter = document.getElementById('genre-adventure').checked;
    //     const romanticFilter = document.getElementById('genre-ramance').checked;

    //     fetchMoviesData().then(moviesData => {
    //         const filteredMovies = moviesData.filter(movie => {
    //             const languageMatch =
    //                 (englishFilter && movie.language.toLowerCase().includes('english')) ||
    //                 (hindiFilter && movie.language.toLowerCase().includes('hindi')) ||
    //                 (tamilFilter && movie.language.toLowerCase().includes('tamil')) ||
    //                 (kannadaFilter && movie.language.toLowerCase().includes('kannada')) ||
    //                 (marathiFilter && movie.language.toLowerCase().includes('marathi')) ||
    //                 (gujratiFilter && movie.language.toLowerCase().includes('gujrati')) ||
    //                 (teluguFilter && movie.language.toLowerCase().includes('telugu'))
    //                 ;

    //             const genreMatch =
    //                 (actionFilter && movie.genre.toLowerCase().includes('action')) ||
    //                 (fantasyFilter && movie.genre.toLowerCase().includes('fantasy')) ||
    //                 (dramaFilter && movie.genre.toLowerCase().includes('drama')) ||
    //                 (comedyFilter && movie.genre.toLowerCase().includes('comedy')) ||
    //                 (thrillerFilter && movie.genre.toLowerCase().includes('thriller')) ||
    //                 (adventureFilter && movie.genre.toLowerCase().includes('adventure')) ||
    //                 (romanticFilter && movie.genre.toLowerCase().includes('romantic'));

    //             return languageMatch || genreMatch;
    //         });

    //         displayMovies(filteredMovies);
    //     });
    // }

    // // Function to display movies or "No Result Found" on the webpage
    // function displayMovies(movies) {
    //     console.log(movie);
    //     // const movieListContainer = document.getElementById('movieList');
    //     // movieListContainer.innerHTML = '';

    //     // if (movies.length === 0) {
    //     //   const noResultMessage = document.createElement('p');
    //     //   noResultMessage.textContent = 'No Result Found';
    //     //   movieListContainer.appendChild(noResultMessage);
    //     // } else {
    //     //   movies.forEach(movie => {
    //     //     const movieName = document.createElement('p');
    //     //     movieName.textContent = movie.id;
    //     //     movieListContainer.appendChild(movieName);
    //     //   });
    //     $("#movies-container-page").html("");
    //     for (let d of movie) {
    //         // console.log(d.main_img);
    //         let card = `
    //                     <div class="card" style="background-color: black;">
    //                         <img
    //                             src="${d.main_img}"
    //                             class="card-img-top"
    //                             alt="..."
    //                         />
    //                         <div class="card-body">
    //                             <h5 class="card-title">${d.name}</h5>
    //                             <p class="card-text">
    //                             ${d.genre}
    //                             </p>
    //                             <p>
    //                             U/A &nbsp;&nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i>
    //                             ${d.language}
    //                             </p>
    //                             <a href="#" class="btn btn-primary BookNow-movie-btn"  style="border:none;" id="BookNow-movies-${d.id}">Book Now</a>
    //                         </div>
    //                     </div>
    //         `;
    //         $("#movies-container-page").append(card);
    //     }
    // }


});