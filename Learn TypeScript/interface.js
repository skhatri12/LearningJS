"use strict";
//interface
const greets = {
    name: "Ram",
    age: 20
};
const productone = {
    name: "Dell",
    price: 10000,
    quantity: 2
};
const producttwo = {
    name: "HP",
    price: 20000,
    quantity: 3
};
const calculateTotalPrices = (products) => {
    const { price, quantity } = products;
    return price * quantity;
};
console.log(calculateTotalPrices(productone));
console.log(calculateTotalPrices(producttwo));
