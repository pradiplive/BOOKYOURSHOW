$(document).ready(function () {
    // Fetch movie details using Axios
    axios.get('http://localhost:3000/movies')
        .then(function (response) {
            let urlParams = new URLSearchParams(window.location.search);
            // console.log(urlParams);
            let url = urlParams.get('pid');
            // console.log(url);
            arr = url.split("?");
            // console.log(arr);
            castid = arr[0]
            castid = castid.replace('cast-','')
            castid = Number(castid);
            // console.log(castid);
            let movieid =arr[1];
            movieid = movieid.replace('movieId=','')
            movieid = Number(movieid);
            // console.log(movieid);
            // Check if there are any movies in the response
            if (response.data.length > 0) {
                // Process the details of the first movie
                // console.log(response.data[movieid]);
                displayMovieDetails(response.data[movieid],castid);
            } else {
                console.error('No movies found in the response.');
            }
        })
        .catch(function (error) {
            console.error('Error fetching movie details:', error);
        });
});

function displayMovieDetails(movieDetails,castid) {
    const firstCastMember = movieDetails.cast[castid];
    console.log(movieDetails.cast[castid]);

    // Create the HTML structure dynamically using the movie details
    var actorDetailsHtml = `
        <div class="card text-white" id="banner-container">
            <!-- Movie Banner -->
            <div class="row no-gutters movie-banner" style="background-color: #1a1a1a; background-size: cover; width:100%; background-position: center;">
                <div class="col-md-4 d-flex justify-content-center">
                    <div class="card-content-image">
                        <img src="${firstCastMember.actor_image}" id="acter_image" alt="main image" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-content-content">
                    <div class="card-body">
                    <h5 class="card-title">${firstCastMember.actor_name}</h5>
                    <p class="card-text"><strong>Occupation:</strong> &nbsp; ${firstCastMember.occupation}</p>
                    <p class="card-text"><strong>Born:</strong> &nbsp; ${firstCastMember.born}</p>
                    <p class="card-text"><strong>Birthplace:</strong> &nbsp; ${firstCastMember.birthplace}</p>
                    <p class="card-text"><strong>Spouse:</strong> &nbsp; ${firstCastMember.spouse}</p>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-4 ">
            <!-- Movie Info -->
            <div class="actor-info">
                <h3>About the Actor</h3>
                <br>
                <p>${firstCastMember.description}</p>
            </div>  
        </div>
     
    `;
    $('#acterDetailsContainer').html(actorDetailsHtml);
}
