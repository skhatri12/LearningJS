"use strict";
//static method and properties
class MathOperations {
    static add(num1, num2) {
        return num1 + num2;
    }
    static difference(num1, num2) {
        return num1 - num2;
    }
}
MathOperations.PI = Math.PI;
console.log(MathOperations.PI);
console.log(MathOperations.add(10, 20));
console.log(MathOperations.difference(20, 10));
