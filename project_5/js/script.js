/**
 * Created by olanpa on 21.03.2017.
 */

$(document).ready(function(){
// $('nav a[href^="#"]').click( function(){
//     var scroll_el = $(this).attr('href');
//     if ($(scroll_el).length != 0) {
//         $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
//     }
//     return false;
//
// }
    $('nav ul li a').on('click', function(e){
        var x = $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(x).offset().top }, 1000);
        e.preventDefault();
    });
})