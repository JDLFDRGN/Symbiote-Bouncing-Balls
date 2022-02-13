let canvas = document.querySelector('#canvas');
let click = document.querySelector('button');
let context = canvas.getContext('2d');
let radius = 25;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

addEventListener('resize',()=>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

class Ball{
    constructor(x,y,dx,dy,radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }
    createBall(){
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        context.strokeStyle = 'red';
        context.fillStyle = 'black';
        context.lineWidth = 3;
        context.stroke();
        context.fill();

        if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0 ){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0 ){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}

let gatherBall = [];

for(let i=0;i<100;i++){
let x = Math.random() * (window.innerWidth - radius * 2) + radius;
let y = Math.random() * (window.innerHeight - radius * 2) + radius; 
let dx = (Math.random() - 0.5) * 5;
let dy = (Math.random() - 0.5) * 5;

gatherBall[i] = new Ball(x,y,dx,dy,radius);
}

click.addEventListener('click',()=>{
    canvas.style.display = 'flex';
    click.style.display = 'none';
    setInterval(()=>{
        context.clearRect(0,0,window.innerWidth,window.innerHeight); 
        for(let i=0;i<100;i++){
            gatherBall[i].createBall();
        }
    },10);
});
