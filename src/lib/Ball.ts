import { canvas } from "../canvas";
import { Rectangle } from "./Rectangle";

export class Ball extends Rectangle {
    constructor(public readonly width = 5, ) {
        super(5, 5, canvas.width / 2, canvas.height / 2, "red")
    }
}
