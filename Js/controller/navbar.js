// $(document).ready(function () {
//   $("#cityModal").html(`

//     <div class="modal-dialog modal-xl">
//       <div class="modal-content">
//         <div class="modal-header">

//                 <input
//           class="hidden_search_field"
//           id="modal_search"
//           type="text"
//           placeholder="Search for your city ..."
//           aria-label="Search"
//         />

//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//           <div class="cities_container">
//           </div>
//         </div>
//       </div>
//     </div>

//     `);
//   const cities_url = ["delhi.avif", "hyderabad.png", "mumbai.avif", "pune.png"];

//   const cities = ["delhi", "hyderabad", "mumbai", "pune"];

//   const selectedCities = [
//     "delhi-selected.png",
//     "hyderabad-selected.png",
//     "mumbai-selected.png",
//     "pune-selected.png",
//   ];

//   $(document).ready(function () {
//     for (let [idx, city] of cities.entries()) {
//       const city_name = city.charAt(0).toUpperCase() + city.slice(1);

//       $(".cities_container")
//         .append(`<div class="city" data-bs-dismiss="modal" aria-label="Close">
//               <img src="../assets/cities/${cities_url[idx]}" alt="${city}">
//               <div>${city_name}</div>
//             </div>`);
//     }

//     $(".city").click((event) => {
//       cities.map((city, idx) => {
//         if (event.target.alt === city) {
//           event.target.src = `../assets/cities/${selectedCities[idx]}`;
//           const city_name = city.charAt(0).toUpperCase() + city.slice(1);
//           $("#city_field").html(city_name);
//         } else {
//           document.querySelector(
//             `img[alt="${city}"]`
//           ).src = `../assets/cities/${cities_url[idx]}`;
//         }
//       });
//     });

//     $("#modal_search").keyup((event) => {
//       const cities_container = document.querySelector(".cities_container");
//       const cities_list = cities_container.getElementsByClassName("city");

//       for (let idx = 0; idx < cities_list.length; idx++) {
//         const city = cities_list[idx].getElementsByTagName("div")[0];
//         const city_name = city.textContent || city.innerText;

//         if (
//           city_name.toLowerCase().includes(event.target.value.toLowerCase())
//         ) {
//           cities_list[idx].style.display = "";
//         } else {
//           cities_list[idx].style.display = "none";
//         }
//       }
//     });
//   });
// });

$(document).ready(function () {
  $("#myModal").modal("show");
  $("#cityModal").html(`
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <input
            class="hidden_search_field"
            id="modal_search"
            type="text"
            placeholder="Search for your city ..."
            aria-label="Search"
          />
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="cities_container"></div>
        </div>
      </div>
<<<<<<< HEAD
    </div>`);

  const cities_url = ["pune.png", "mumbai.avif", "delhi.avif", "hyderabad.png"];

  const cities = ["pune", "mumbai", "delhi", "hyderabad"];
=======
    </div>
    
    `);
  const cities_url = [
    "delhi.avif",
    "hyderabad.png",
    "mumbai.avif",
    "pune.png",
  ];

  const cities = [
    "pune",
    "mumbai",
    "delhi",
    "hyderabad",
  ];
>>>>>>> 42ec948c74d2a3568b779b2f3e3a1c6839487fa7

  const selectedCities = [
    "pune-selected.png",
    "mumbai-selected.png",
    "delhi-selected.png",
    "hyderabad-selected.png",
  ];

  $(document).ready(function () {
<<<<<<< HEAD
    for (let [idx, city] of cities.entries()) {
      const city_name = city.charAt(0).toUpperCase() + city.slice(1);

      $(".cities_container")
        .append(`<div class="city" data-bs-dismiss="modal" aria-label="Close">
              <img src="../assets/cities/${cities_url[idx]}" alt="${city}">
              <div id="modal-city-name" style="display-block">${city_name}</div>
            </div>`);
=======
    let count=0;
    for (let [idx, city] of cities.entries()) {
      const city_name = city.charAt(0).toUpperCase() + city.slice(1);

      let city_card = `<div class="city"  data-bs-dismiss="modal" aria-label="Close">
                        <img src="../assets/cities/${cities_url[idx]}" id="city-modal-${count}" alt="${city}">
                        <div id="modal-city-name-${count}" style="display-block">${city_name}</div>
                      </div>
                        `;

      $(".cities_container")
        .append(city_card);
        count++;
>>>>>>> 42ec948c74d2a3568b779b2f3e3a1c6839487fa7
    }

    $(".city").click((event) => {
      cities.map((city, idx) => {
        if (event.target.alt === city) {
          event.target.src = `../assets/cities/${selectedCities[idx]}`;
          const city_name = city.charAt(0).toUpperCase() + city.slice(1);
          $("#city_field").html(city_name);
        } else {
          document.querySelector(
            `img[alt="${city}"]`
          ).src = `../assets/cities/${cities_url[idx]}`;
        }
      });
    });

    $("#modal_search").keyup((event) => {
      const cities_container = document.querySelector(".cities_container");
      const cities_list = cities_container.getElementsByClassName("city");

      for (let idx = 0; idx < cities_list.length; idx++) {
        const city = cities_list[idx].getElementsByTagName("div")[0];
        const city_name = city.textContent || city.innerText;

<<<<<<< HEAD
        if (
          city_name.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
=======
        if (city_name.toLowerCase().includes(event.target.value.toLowerCase())) {
>>>>>>> 42ec948c74d2a3568b779b2f3e3a1c6839487fa7
          cities_list[idx].style.display = "";
        } else {
          cities_list[idx].style.display = "none";
        }
      }
    });
  });
});

// const cities_url = ["pune.png","mumbai.avif","delhi.avif", "hyderabad.png" ];
// const cities = ["pune", "mumbai", "delhi", "hyderabad"];
// const selectedCities = [
//   "pune-selected.png",
//   "mumbai-selected.png",
//   "delhi-selected.png",
//   "hyderabad-selected.png",
// ];

// $(document).ready(function () {
//   for (let [idx, city] of cities.entries()) {
//     const city_name = city.charAt(0).toUpperCase() + city.slice(1);

//     $(".cities_container").append(`
//         <div class="city" data-bs-dismiss="modal" aria-label="Close" data-city-id="${
//           idx + 1
//         }">
//           <img src="../assets/cities/${cities_url[idx]}" alt="${city}">
//           <div>${city_name}</div>
//         </div>
//       `);
//   }

//   $(".city").click((event) => {
//     const cityId = $(event.currentTarget).data("city-id");
//     console.log("Selected City ID:", cityId);
//     localStorage.setItem("selectedCityId", cityId);

//     cities.map((city, idx) => {
//       if (event.target.alt === city) {
//         event.target.src = `../assets/cities/${selectedCities[idx]}`;
//         const city_name = city.charAt(0).toUpperCase() + city.slice(1);
//         $("#city_field").html(city_name);
//       } else {
//         document.querySelector(
//           `img[alt="${city}"]`
//         ).src = `../assets/cities/${cities_url[idx]}`;
//       }
//     });
//   });

//   $("#modal_search").keyup((event) => {
//     const cities_container = document.querySelector(".cities_container");
//     const cities_list = cities_container.getElementsByClassName("city");

//     for (let idx = 0; idx < cities_list.length; idx++) {
//       const city = cities_list[idx].getElementsByTagName("div")[0];
//       const city_name = city.textContent || city.innerText;

//       if (city_name.toLowerCase().includes(event.target.value.toLowerCase())) {
//         cities_list[idx].style.display = "";
//       } else {
//         cities_list[idx].style.display = "none";
//       }
//     }
//   });
// });
