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
        screenshot : 'assets/img/hangman.png',
        url : 'https://juanpa-a.github.io/Ahorcado/',
        summary : "Hangman game about programming buzz words made entirely with Vanilla JavaScript and Bootstrap",
    },
];

for (p of projects) {
    $('#projects').append(`
    <div class="card" style="width: 23rem;">
    <div class="card-body">
        <img src="${p.screenshot}" class="card-img-top" alt="Screenshot from ${p.name}">
        <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.summary}</p>
            <a href="${p.url}" target="_blank" class="btn">Check it out!</a>
        </div>
        </div>
    </div>
    `);  
}