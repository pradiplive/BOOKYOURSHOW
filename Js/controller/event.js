$(document).ready(function () {

    

    
     // events data fetch , then make cards and then populate cards dynamically to webpage of Events.html 
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
                    $("#event-container-page").append(card);
                }
            }
        })
        .catch((error) => {
            console.log(error);
        })
});