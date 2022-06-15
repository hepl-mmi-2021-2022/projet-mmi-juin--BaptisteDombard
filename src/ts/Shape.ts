import {Canvas} from "./Canvas";

export class Shape extends Canvas{
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    color: string;
    radius: number;
    position: {x: number, y: number};


    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        super();
        this.canvasElement = canvasElement;
        this.ctx = ctx;
    }
}