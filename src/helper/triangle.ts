import { Pos } from './../types/definition';

class Point {
  height: number;
  width: number;
  constructor(height: number = 100, width: number = 100) {
    this.height = height;
    this.width = width;
  }

  getCenterPoint(h: number, w: number): Pos {
    return {
      y: h * 0.5,
      x: w * 0.5,
    };
  }

  generatePoint(): Pos {
    const radius = 100;
    const a = Math.random() * 2 * Math.PI;
    const r = radius * Math.sqrt(Math.random());

    return {
      x: Math.floor(r * Math.cos(a)),
      y: Math.floor(r * Math.sin(a)),
    };
  }

  generatePoints(amount: number): Pos[] {
    let result: Pos[] = Array(amount);
    for (let index = 0; index < amount; index++) {
      result.push(this.generatePoint());
    }
    return result;
  }
}

export default Point;
