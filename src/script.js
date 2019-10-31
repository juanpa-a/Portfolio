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

let projects = [
    { 
        name : 'Hangman',
        url : '#',
        screenshot : 'https://via.placeholder.com/350',
        summary : "it's cool",
    },
    { 
        name : 'Hangman',
        url : '#',
        screenshot : 'https://via.placeholder.com/350',
        summary : "it's cool",
    },
];

for (p of projects) {
    $('#projects').append(`
        <div class="project col-lg-6 col-md-8 col-xs-12">
            <img src="${p.screenshot}" alt="screenshot from ${p.name}" class="rounded mx-auto d-block">
        </div>
        <div class="col-lg-6 col-md-4 col-xs-12">
            <p>
                ${p.summary}
            </p>
        </div>
        <hr>
    `);  
}