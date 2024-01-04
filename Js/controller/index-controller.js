// import HomePageService from "../service/HomePageService.js";

$(document).ready(function () {

    // $("#cityModal, #overlay").fadeIn();
    // $("#floating-overlay-close-btn").on("click", function () {
    //     $("#cityModal, #overlay").fadeOut();
    //   });

    axios.get('http://localhost:3000/movies')
        .then((response) => {
            // console.log(response.data);
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
                $(".recommended-movie-container").append(card);

            }

        })
        .catch(() => {

        })

    axios.get('http://localhost:3001/cities')
        .then((response) => {
            // console.log(response.data);
            // console.log(response.data.length);
            let cityLen = response.data.length;

            for (let i = 0; i < cityLen; i++) {

                let len = response.data[i].sports.length;
                // console.log(len);



                // let loc = response.data[i].sports[i].stadium[0].loc_name;
                // console.log(loc);

                // let data = response.data;
                for (let j = 0; j < len; j++) {
                    let d = response.data[i].sports[j];
                    // console.log(d);
                    // console.log(d.description);
                    let card = `
                        <div class="card"  style="background-color: black;">
                            <img
                                src="${d.banner_img}"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body" style="background-color: black;">
                                <h5 class="card-title">${d.name}</h5>
                                <p class="card-text">${d.description}</p>
                                <p class="events-location">
                                   
                                </p>
                                <a href="#" class="btn btn-primary"  style="border:none;">Book Now</a>
                            </div>
                        </div>
                `;

                    $(".upcoming-events-container").append(card);

                }
            }

        })
        .catch((error) => {
            console.log(error);
        })




    axios.get('http://localhost:3001/cities')
        .then((response) => {
            // console.log(response.data);
            // console.log(response.data.length);
            let cityLen = response.data.length;
            for (let i = 0; i < cityLen; i++) {
                let len = response.data[i].event.length;
                // console.log(len);
                // let loc = response.data[i].sports[i].theater[0].loc_name;
                // console.log(loc);
                // let data = response.data;
                for (let j = 0; j < len; j++) {
                    let d = response.data[i].event[j];
                    // console.log(d.banner_img);
                    // console.log(d.description);
                    let card = `
                        <div class="card"  style="background-color: black;" >
                            <img
                                src="${d.banner_img}"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body" style="background-color: black;">
                                <h5 class="card-title">${d.name}</h5>
                                <p class="card-text" ><span >${d.description}</span>...</p>
                                <p class="events-price">
                                <i class="fa-solid fa-indian-rupee-sign"></i> ${d.theater[0].ticket_price[0]} Onwards
                                </p>
                                <a href="#" class="btn btn-primary"  style="border:none;">Book Now</a>
                            </div>
                        </div>
                `;
                    $(".popular-event-container").append(card);
                }
            }
        })
        .catch((error) => {
            console.log(error);
        })


    axios.get('http://localhost:3001/cities')
        .then((response) => {
            // console.log(response.data);
            // console.log(response.data.length);
            let cityLen = response.data.length;
            for (let i = 0; i < cityLen; i++) {
                let len = response.data[i].music_shows.length;
                // console.log(len);
                // let loc = response.data[i].sports[i].theater[0].loc_name;
                // console.log(loc);
                // let data = response.data;
                for (let j = 0; j < len; j++) {
                    let d = response.data[i].music_shows[j];
                    // console.log(d.banner_img);
                    // console.log(d.description);
                    let card = `
                        <div class="card" style="background-color: black;">
                            <img
                                src="${d.banner_img}"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">${d.name}</h5>
                                <p class="card-text" ><span >${d.description}</span>...</p>
                                <p class="events-price">
                                <i class="fa-solid fa-indian-rupee-sign"></i> ${d.theater[0].ticket_price[0]} Onwards
                                </p>
                                <a href="#" class="btn btn-primary" style="border:none;">Book Now</a>
                            </div>
                        </div>
                `;
                    $(".popular-music-container").append(card);
                }
            }
        })
        .catch((error) => {
            console.log(error);
        })

    $('#city_field').click(function () {
        // $('#modal-city-name').click(function () { 


        // });
        let city = $('#city_field').text();
        console.log(city)
        if (city != "Select City") {
            console.log(city)

        }

    });
    axios.get('http://localhost:3001/cities')
        .then((response) => {
            console.log(response.data);
            // console.log(response.data.length);
            let cityLen = response.data.length;
            for (let i = 0; i < cityLen; i++) {
                // let len = response.data[i].music_shows.length;
                // console.log(len);
                // let loc = response.data[i].sports[i].theater[0].loc_name;
                // console.log(loc);
                // let data = response.data;
                // for (let j = 0; j < len; j++) {
                //     let d = response.data[i].music_shows[j];
                //     // console.log(d.banner_img);
                //     // console.log(d.description);
                //     let card = `
                //         <div class="card" style="background-color: black;">
                //             <img
                //                 src="${d.banner_img}"
                //                 class="card-img-top"
                //                 alt="..."
                //             />
                //             <div class="card-body">
                //                 <h5 class="card-title">${d.name}</h5>
                //                 <p class="card-text" ><span >${d.description}</span>...</p>
                //                 <p class="events-price">
                //                 <i class="fa-solid fa-indian-rupee-sign"></i> ${d.theater[0].ticket_price[0]} Onwards
                //                 </p>
                //                 <a href="#" class="btn btn-primary" style="border:none;">Book Now</a>
                //             </div>
                //         </div>
                // `;
                //     $(".popular-music-container").append(card);
                // }
            }
        })
        .catch((error) => {
            console.log(error);
        })



    // -----------------------------------------------------------
    $('#slideRight1').click(function () {
        document.getElementById('recommended-movie-container').scrollLeft += 200;
    });
    $('#slideLeft1').click(function () {
        document.getElementById('recommended-movie-container').scrollLeft -= 200;
    });
    $('#slideRight2').click(function () {
        document.getElementById('upcoming-events-container').scrollLeft += 200;
    });
    $('#slideLeft2').click(function () {
        document.getElementById('upcoming-events-container').scrollLeft -= 200;
    });
    $('#slideRight3').click(function () {
        document.getElementById('popular-event-container').scrollLeft += 200;
    });
    $('#slideLeft3').click(function () {
        document.getElementById('popular-event-container').scrollLeft -= 200;
    });
    $('#slideRight4').click(function () {
        document.getElementById('popular-music-container').scrollLeft += 200;
    });
    $('#slideLeft4').click(function () {
        document.getElementById('popular-music-container').scrollLeft -= 200;
    });


    //--------------------------------------------------------------------




});