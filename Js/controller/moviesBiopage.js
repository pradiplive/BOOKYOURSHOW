$(document).ready(function () {
    
    $(document).on("click", ".BookNow-movie-btn", function () {
        //Call to Service Method
        let id = $(this).attr("id");
        console.log(id);
        window.location.href = "../../HTML/movieBio.html?pid=" + id;
        
      });
});

