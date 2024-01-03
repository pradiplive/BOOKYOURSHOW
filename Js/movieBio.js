$(document).ready(function () {
    // Fetch movie details using Axios
    axios.get('http://localhost:3000/movies')
        .then(function (response) {
            let urlParams = new URLSearchParams(window.location.search);
            // console.log(urlParams);
            let id = urlParams.get('pid');
            id = id.replace('BookNow-movies-','')
            id = Number(id);
            console.log(id);
            // Check if there are any movies in the response
            if (response.data.length > 0) {
                // Process the details of the first movie
                // console.log(response.data[1].cast);
                displayMovieDetails(response.data[id]);
            } else {
                console.error('No movies found in the response.');
            }
            $(document).on("click", ".cast-card", function () {
                //Call to Service Method
                let cast_id = $(this).attr("id");
                console.log(cast_id);
                console.log(id);
                // let movieid = $(this).attr("movieid");
                // console.log(movieid);
                window.location.href = "../../HTML/acterBio.html?pid=" + cast_id + "?movieId="+id;
                
              });
        })
        .catch(function (error) {
            console.error('Error fetching movie details:', error);
        });
});

function displayMovieDetails(movieDetails) {
    // Create the HTML structure dynamically using the movie details
    var movieDetailsHtml = `
        <div class="card text-white" id="banner-container">
            <!-- Movie Banner -->
            <div class="row no-gutters movie-banner" style="background-image: url('${movieDetails.banner_img}'); background-size: cover; width:100%; background-position: center;">
                <div class="col-md-4 d-flex justify-content-center">
                    <div class="card-content-image">
                        <img src="${movieDetails.main_img}" id="movie_image" alt="main image" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-content-content">
                        <h1 class="movie_name">${movieDetails.name}</h1>
                        <div class="rating-container">
                            <img src="https://in.bmscdn.com/moviemode/tvod/star-icon.png" alt="Red Star" width="48" height="48">
                            <span class="rating-value">8.4/10</span>
                            <span class="votes">533.5K Votes</span>
                        </div>
                        <div class="custom-reviw-card">
                        <div class="reviw-card-body">
                            <h5>Add your rating & review</h5>
                            <p>Your ratings matter</p>
                        </div>
                        <div class="review-card-btn">
                        <button type="button" class="btn btn-danger btn-sm">Book Now</button>
                        </div>
                        
                        </div>
                        <span class="card-language-text"> ${movieDetails.language}</span>
                        <br>
                        <br>
                        <h6 class="card-text">${movieDetails.duration} <span>&#8226;</span> ${movieDetails.genre} <span>&#8226;</span> ${movieDetails.category} </h6>
                        <h6>${movieDetails.start_date}</h6>
                        <button type="button" class="btn btn-danger">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    
    

        <div class="container-fluid mt-4 ">
            <!-- Movie Info -->
            <div class="movie-info">
                <h3>About the Movie</h3>
                <br>
                <p>${movieDetails.description}</p>
            </div>

            <!-- Cast Section -->
            <h3 class="cast-h3">Cast</h3>
            <div class="row swiper-container container-fluid" id="cast-card-theme">
                <div class="swiper-wrapper">
                    ${generateCastCards(movieDetails.cast)}
                    </div>
                    <div class="swiper-button-prev swiper-navBtn"></div>
                    <div class="swiper-button-next swiper-navBtn"></div>
                    <div class="swiper-pagination"></div>
                    </div>
                    </div>
                    
                    <div class="container-fluid mt-5">
                    <h3 class="text-center mb-4 review-h2 ">Top Reviews</h3>
                    <div class="row swiper-container">
                    <div class="swiper-wrapper">
                </div>
                <div class="swiper-button-prev swiper-navBtn"></div>
                <div class="swiper-button-next swiper-navBtn"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    
    `;
    $('#movieDetailsContainer').html(movieDetailsHtml);
}

function generateCastCards(cast) {
    console.log(cast);
    return cast.map(actor => `
        <div class="col-md-2 mb-3 swiper-slide">
            <div class="card cast-card" id="cast-${actor.id}" movie-id>
                <img src="${actor.actor_image}" alt="${actor.actor_name}" class="card-img-top">
                <div class="card-body text-center">
                    <p class="card-text">${actor.actor_name}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function generateReviewCards(reviews) {

    return reviews.map(review => `
        <div class="col-md-4">
            <div class="card review-card position-relative">
                <img src="${review.userProfilePhoto}" class="card-img-top profile-photo" alt="Reviewer Image">
                <div class="rating-star">
                    ${generateRatingStars(review.rating)}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${review.title}</h5>
                    <p class="card-text">${review.description}</p>
                    <p class="card-text"><small class="text-muted">Reviewed by ${review.reviewer}</small></p>
                </div>
            </div>
        </div>
    `).join('');
}

function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
}
