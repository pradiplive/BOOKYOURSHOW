$(document).ready(function () {
    $('.language-bottom, .format-bottom, .genre-bottom, .price-bottom, #fa-angle-up1, #fa-angle-up2, #fa-angle-up3,#fa-angle-up4 ').hide();

    $('.language-up').click(function () {
        $('#fa-angle-down1').toggle();
        $('.language-bottom, #fa-angle-up1').toggle();
        
    });
    $('.format-up').click(function () {
        $('#fa-angle-down2').toggle();
        $('.format-bottom, #fa-angle-up2').toggle();
        
    });
    $('.genre-up').click(function () {
        $('#fa-angle-down3').toggle();
        $('.genre-bottom, #fa-angle-up3').toggle();
        
    });
    $('.price-up').click(function () {
        $('#fa-angle-down4').toggle();
        $('.price-bottom, #fa-angle-up4').toggle();
        
    });
});