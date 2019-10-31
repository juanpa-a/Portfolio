// Horror movie way to animate

// $("#about-button").on("click",function () {
//     $('html, body').animate({
//         scrollTop: ($('#about').offset().top)
//     }, 1000);
// });

// $("#projects-button").on("click",function () {
//     $('html, body').animate({
//         scrollTop: ($('#projects').offset().top)
//     }, 1000);
// });

// $("#contact-button").on("click",function () {
//     $('html, body').animate({
//         scrollTop: ($('#contact').offset().top)
//     }, 1000);
// });

// nice way to do it :)

$(document).on('click', '.nav-link', function() {
    let div = $(this).attr('id').slice(0, -7);
    $('html, body').animate({
        scrollTop: ($(`#${div}`).offset().top)
    }, 1500);
})