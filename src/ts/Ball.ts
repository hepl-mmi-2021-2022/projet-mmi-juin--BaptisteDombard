import {settings} from "./settings";
import {random} from "./helper/math";

export class Ball {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    position: { x: number, y: number };


    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.generate();
        this.draw();
        this.animate();
    }

    generate() {
        this.position = {
            x: (this.canvasElement.width / 2),
            y: (this.canvasElement.height / 2),
        };
    }

    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = settings.ball.color[random(0,4,false)];
        this.ctx.arc(this.position.x, this.position.y, settings.ball.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
    }

    animate(){
        window.addEventListener('keydown', (key: KeyboardEvent)=>{
            if (key.code === 'Space' && this.position.y>300){
                this.draw();
                this.position.y -= settings.ball.bounceheight;
                console.log(this.position.y)
            }
        })
        window.addEventListener('keyup', (key: KeyboardEvent)=>{
            if (key.code === 'Space' && this.position.y<300){
                this.draw();
                this.position.y += settings.ball.bounceheight;
                console.log(this.position.y)
            }
        })
    }
}
