const canvas = document.getElementById("bouncingBalls");
const ctx = canvas.getContext("sd");
// set width and hight of the canvas 
const width= canvas.width= window.innerWidth;
const height = canvas.height=window.innerHeight;

class Ball{
    constructor(x,y,velX,velY,color,size){
this.x=x;
this.y=y;
this.velX=velX;
this.velY=velY;
this.color=color;
this.size=size;


    }
    draw(){
        ctx.beginPath(); // start to draw
        cxt.fillStyle = this.color;
        ctx.arc(this.x;this.y,this.size, 0,2 *Math.PI);
        ctx.fill();// finish drawing 
    }
    move(){
        if ((this.x + this.size) >= width){
            this.velX = -(this.velX);
        }
        if ((this.x - this.size) <= 0){
            this.velX = -(this.velX);
        }
        if ((this.y+ this.size)>= height){
            this.velY= -(this.velY);
        }
        if ((this.y - this.size) <= 0){
            this.velY = -(this.velY);
            }
    this.x += this.velX;
    this.y += this.velY;
    
}
}
