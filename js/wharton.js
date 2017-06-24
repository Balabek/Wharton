/**
 * Created by krm on 22/06/2017.
 */



$(document).ready(function(){

    // Buttons behavior for 'Team'
    var upperButton = $('#collapser');
    var lowerButton = $('#de_collapser');

    $(upperButton).on('click',function() {

        $(this).css('display','none');

    });

    $(lowerButton).on('click',function() {

        $(upperButton).css('display','block');

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







});