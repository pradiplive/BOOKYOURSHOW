
$(document).ready(function () {
    // Fetch movie details using Axios
    axios.get('http://localhost:3000/movies')
        .then(function (response) {
            let urlParams = new URLSearchParams(window.location.search);
            // console.log(urlParams);
            let id = urlParams.get('pid');
            id = id.replace('cast-','')
            id = Number(id);
            console.log(id);
            // // Check if there are any movies in the response
            // if (response.data.length > 0) {
            //     // Process the details of the first movie
            //     // console.log(response.data[1].cast);
            //     displayMovieDetails(response.data[id]);
            // } else {
            //     console.error('No movies found in the response.');
            // }
            // $(document).on("click", ".cast-card", function () {
            //     //Call to Service Method
            //     let id = $(this).attr("id");
            //     console.log(id);
            //     window.location.href = "../../HTML/acterBio.html?pid=" + id;
                
            //   });
        })
        .catch(function (error) {
            console.error('Error fetching movie details:', error);
        });
});