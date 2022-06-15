import {settings} from "./settings";
import {Ball} from "./Ball";

export class Canvas{
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    ball: Ball;

    constructor() {
        this.canvasElement = document.querySelector('#my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.resizeCanva();
        this.addEventListeners();
        this.ball= new Ball(this.canvasElement, this.ctx);
        this.drawText();
    }

    resizeCanva(){
        this.canvasElement.width = window.innerWidth;
        this.canvasElement.height = window.innerHeight;
    }

    addEventListeners(){
        window.addEventListener('resize',()=>{
            this.resizeCanva()
        })
    }

    drawText(){
        this.ctx.fillStyle = 'white';
        this.ctx.font = '50px Poppins'
        this.ctx.fillText('Press the Spacebar to begin', this.canvasElement.width/2-350, this.canvasElement.height/2+300);
    }
}