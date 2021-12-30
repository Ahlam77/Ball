const canvas = document.getElementById("bouncingBalls");
const ctx = canvas.getContext("2d");
// set width and hight of the canvas 
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min, max) {
    const num = Math.floor(Math.random()*(max - min + 1) + min);
    return num;
}
class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
    draw() {
        ctx.beginPath(); // start to draw
       ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill(); // finish drawing 
    }
    move() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }
        this.x += this.velX;
        this.y += this.velY;

    }
}
let balls = [];
while (balls.length < 25) {
    let size = random(10, 25);
    let ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        `rgb(` + random(0, 255) + `,` + random(0, 255) + `,` + random(0, 255) + `)`,
        size
    );
    balls.push(ball);
}

function display() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
    }
    requestAnimationFrame(display);
}
display();