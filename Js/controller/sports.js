$(document).ready(function () {

    
    // sports data fetch , then make cards and then populate cards dynamically to webpage of sports.html
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

                $("#sports-container-page").append(card);

            }
        }

    })
    .catch((error) => {
        console.log(error);
    })
});