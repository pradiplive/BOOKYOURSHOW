$(document).ready(function () {

    // movie data fetch , then make cards and then populate cards dynamically to webpage of movies.html 
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
                                <p class="card-text"> ${d.genre} </p>
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
            .catch((error) => {
                console.log(error);
            })

    });


    // filter 
    $('.language-bottom,  .genre-bottom,  #fa-angle-up1,   #fa-angle-up3 ').hide();

    $('.language-up').click(function () {
        $('#fa-angle-down1').toggle();
        $('.language-bottom, #fa-angle-up1').toggle();

    });
    $('.genre-up').click(function () {
        $('#fa-angle-down3').toggle();
        $('.genre-bottom, #fa-angle-up3').toggle();

    });




});