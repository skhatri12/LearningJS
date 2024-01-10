"use strict";
const laptopDetails = {
    name: "HP",
    hdd: {
        gb: 1,
        tb: 2
    },
    warranty: "yes"
};
console.log(laptopDetails);
const laptopDetailsone = {
    name: "Dell",
    hdd: {
        gb: 10,
        tb: 20
    },
    warranty: "no"
};
const product = {
    name: "Asus",
    price: 25000,
    quantity: 4
};
const calculateTotalPrice = (product) => {
    return `Total cost for a ${product.name} is ${product.price * product.quantity}`;
};
console.log(calculateTotalPrice(product));
