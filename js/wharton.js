/**
 * Created by krm on 22/06/2017.
 */



$(document).ready(function(){

    // Buttons behavior for 'Team'
    var upperButton = $('#collapser');
    var lowerButton = $('#de_collapser');

    $(upperButton).on('click',function() {

        $(this).css('display','none');
        $('.team_area').addClass('bgd_denoiser');

    });

    $(lowerButton).on('click',function() {

        $(upperButton).css('display','block');
        $('.team_area').removeClass('bgd_denoiser');

    });



    // Buttons behavior for 'Brands'
    var upperButton2 = $('#collapser_2');
    var lowerButton2 = $('#de_collapser_2');

    $(upperButton2).on('click',function() {

        $('.all_brandz_button_holder').css('display','none');

    });

    $(lowerButton2).on('click',function() {

        $('.all_brandz_button_holder').css('display','block');

    });




    // Animating the "go-to" anchor scroll
    $('a.anchor').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top +10
        }, 800);

    });





    var yesButton = $('#yup');
    var noButton = $('#nope');

    $(noButton).on('click', function() {
        $('h1.validator_question').addClass('hidden');
        $('.yesno_buttonz').addClass('hidden');
        $('h4.rejection_message').removeClass('hidden');

        // window.location.replace("https://www.youtube.com/user/tutitutv");

    });

    $(yesButton).on('click', function() {
        $('.age_validator').css('display','none');

    })








});