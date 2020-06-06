import { ctx } from "../canvas";

export class Rectangle {

    private _x: number;
    private _y: number;

    public readonly width: number
    public readonly height: number

    private color: string

    constructor(width: number, height: number, x: number, y: number, color: string) {
        this._x = x
        this._y = y
        this.width = width
        this.height = height
        this.color = color
    }

    get x() {
        return this._x
    }
    get y() {
        return this._y
    }

    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this._x, this._y, this.width, this.height)
    }
}