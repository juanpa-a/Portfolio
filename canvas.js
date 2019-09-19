function getRandomInt(i) {
    return Math.floor(Math.random() * i)
}

function getRandomSpeed(i) {
    let x = (Math.random() - 0.5) * i
    if (x === 0) {
        return getRandomInt(i)
    } else return x;
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
    // amarillos
    
];

let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');

let mouse = {
    x : undefined,
    y : undefined
}

window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
});

window.addEventListener('resize',
    function(event) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

window.addEventListener('scroll', 
    function() {
        mouse.x = undefined;
        mouse.y = undefined;
    })

function Circle(x, y, dx, dy, radius) {

    let max_radius = 100;

    this.x = x;
    this.y = y;

    this.dx = dx;
    this.dy = dy;

    this.radius = radius;
    this.color = colors[getRandomInt(colors.length)];

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

        // console.log(this.x);
        this.x += this.dx;
        this.y += this.dy;
        

        // interactivity
        // if (mouse.y >= innerHeight) {
        //     mouse.x = undefined;
        //     mouse.y = undefined;
        // }
        // else if (mouse.x - (this.x + this.radius) < 25 && 
        //     mouse.x - (this.x - this.radius) > - 25 &&
        //     mouse.y - (this.y + this.radius * 2) < 25 &&
        //     mouse.y - (this.y) > - 25 && 
        //     this.radius <= max_radius) {
        //     this.radius ++;
        // }
        // else if (this.radius > radius) {
        //     this.radius--;
        // }
        

        this.draw();
    }
}

let circleArray = [];

for (i = 0; i < 500; i++) {

    let radius = 50;

    circleArray.push(circle = new Circle(
        // getRandomInt(innerWidth - ( radius * 2 )) + radius,
        innerWidth / 2,
        // getRandomInt(innerHeight - ( radius * 4.5 )) + radius,
        innerHeight / 2,
        getRandomSpeed(4),
        getRandomSpeed(4),
        radius,
        ))
    }

let x = getRandomInt(innerWidth);
let y = getRandomInt(innerHeight);

let dx = getRandomSpeed(12);
let dy = getRandomSpeed(12);

let radius = getRandomInt(45);


function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    circleArray.forEach(circle => {
        circle.update();
    })
}

animate();



