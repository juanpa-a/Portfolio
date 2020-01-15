function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

colors = [
    // azules
    '#30beae',
    '#2bac9d',
    '#26998b',
    '#22867a',
    '#1d7369',
    // rojos
    '#c8908c',
];

let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');

window.addEventListener('resize',
    function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, radius) {

    this.x = x;
    this.y = y;

    this.dx = dx;
    this.dy = dy;

    this.radius = radius;
    this.color = colors[getRandomInt(0, colors.length)];

    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }

    this.update = function() {
        if ((this.x + this.radius) >= innerWidth ||
            (this.x - this.radius) < 0) {
            this.dx = -this.dx;
        }
    
        if ((this.y + this.radius * 2) > innerHeight ||
            (this.y - this.radius) < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}

let circleArray = [];
let amount = 250;

if (window.innerWidth > 800) {
    amount = 400;
}

for (i = 0; i < amount; i++) {

    let radius = 65;

    circleArray.push(circle = new Circle (
        innerWidth / 2,
        innerHeight / 2,
        getRandomNum(-2, 2),
        getRandomNum(-2, 2),
        radius,
        )
    )}



function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    
    circleArray.forEach(circle => {
        circle.update();
    })

    if (window.innerWidth > 600) {
        context.font = "bold 16rem Staatliches";
        context.fillStyle = "#bbbbbb";
        context.textAlign = "center";
        context.fillText("Web Design,", innerWidth / 2, (innerHeight / 2) - 105 );
        context.fillText("For Humans.", innerWidth / 2, (innerHeight / 2) + 105 );
    } else {
        context.font = "bold 8rem Staatliches";
        context.fillStyle = "#bbbbbb";
        context.textAlign = "center";
        context.fillText("Web", innerWidth / 2, (innerHeight / 2) - 190 );
        context.fillText("Design,", innerWidth / 2, (innerHeight / 2) - 90 );
        context.fillText("For", innerWidth / 2, (innerHeight / 2) + 90 );
        context.fillText("Humans", innerWidth / 2, (innerHeight / 2) + 190 );
    }

}
    
animate();