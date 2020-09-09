$(document).on('click', '.nav-link', function() {
    let div = $(this).attr('id').slice(0, -7);
    $('html, body').animate({
        scrollTop: ($(`#${div}`).offset().top)
    }, 1500);
})

let projects = [
    { 
        name : 'Curatech',
        screenshot : 'assets/img/curatech.png',
        url : 'https://curatech.mx',
        summary : "Telemedicine application, that helps doctor get in touch with their patients and monetize their time and knowledge.",
    },
    { 
        name : 'Hangman',
        screenshot : 'assets/img/hangman.png',
        url : 'https://juanpa-a.github.io/Ahorcado/',
        summary : "Hangman game about programming buzz words made entirely with Vanilla JavaScript and Bootstrap",
    },
    { 
        name : 'Jubilant Waffle',
        screenshot : 'assets/img/jubilantWaffle.png',
        url : 'https://jubilantwaffle.herokuapp.com/',
        summary : "A retro choose your own adventore game with user generated stories to add a bit of spice!",
    },
    { 
        name : 'Sorting Visualizer',
        screenshot : 'assets/img/sortVis.png',
        url : 'https://juanpa-a.github.io/SortVis/',
        summary : "Visulizer to help you understand how sortin algorithms work.",
    },
];

for (p of projects) {
    $('#projects').append(`
    <div class="card" style="width: 23rem;">
    <div class="card-body">
        <img src="${p.screenshot}" class="card-img-top" alt="Screenshot from ${p.name}">
        <div class="card-body">
            <h5 class="card-title"><b>${p.name}</b></h5>
            <p class="card-text">${p.summary}</p>
            <a href="${p.url}" target="_blank" class="btn"><u>Check it out!</u></a>
        </div>
        </div>
    </div>
    `);  
}

