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

for (i = 0; i < 250; i++) {

    let radius = 2;

    circleArray.push(circle = new Circle (
        getRandomInt(50, innerWidth - 50),
        getRandomInt(50, innerHeight - 50),
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
}
    
animate();