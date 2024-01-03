

$(document).ready(function () {
    $('#floating-movie-card').mouseover(function () {
        $('.navbar-movie-floating-card').css('display', 'block');
        $('.navbar-movie-floating-card').mouseover(function(){
            $(this).css('display', 'block');
        })
        $('.navbar-movie-floating-card').mouseleave(function(){
            $(this).css('display', 'none');
        })
    });
    $('#floating-movie-card').mouseleave(function () {
        $('.navbar-movie-floating-card').css('display', 'none');
    });


    $('#floating-movie-card').mouseover(function () {
        $('.navbar-show-floating-card').css('display', 'block');
        $('.navbar-show-floating-card').mouseover(function(){
            $(this).css('display', 'block');
        })
        $('.navbar-show-floating-card').mouseleave(function(){
            $(this).css('display', 'none');
        })
    });
    $('#floating-movie-card').mouseleave(function () {
        $('.navbar-show-floating-card').css('display', 'none');
    });
    
});