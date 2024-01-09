"use strict";
function greet(id, name) {
    console.log(`Welcome to ${name} with id: ${id}`);
}
greet(1, "Subash");
const greeet = (id, name) => {
    console.log(`Welcome to ${name} with id: ${id}`);
};
greeet(2, "Ram");
const sayHi = (name) => {
    return `Hi ${name}!`;
};
const sayingHi = sayHi("Subash");
console.log(sayingHi);
const averageNumber = (a, b, c, d) => {
    return (a + b + c + d) / 4;
};
const calcavgNumber = averageNumber(10, 15, 20, 25);
console.log(calcavgNumber);
