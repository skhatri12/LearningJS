"use strict";
//abstract class
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea() {
        console.log(`This is a ${this.color} circle with radius ${this.radius}`);
    }
}
const circle = new Circle("red", 10);
console.log(circle.calculateArea());
circle.displayArea();
