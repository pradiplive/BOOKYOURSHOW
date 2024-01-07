$(document).ready(function () {

    // sports data fetch , then make cards and then populate cards dynamically to webpage of music.html
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
                    $("#music-container-page").append(card);
                }
            }
        })
        .catch((error) => {
            console.log(error);
        })
});