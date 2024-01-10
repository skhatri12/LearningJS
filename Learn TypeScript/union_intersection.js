"use strict";
//union and intersection in typescript
//union
//define function
const userInput = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error('Invalid input value');
    }
};
//function call
console.log(userInput("10"));
console.log(userInput("Hello World"));
const user = {
    name: "Ram",
    age: 20
};
const locations = {
    city: "Mumbai",
    country: "India"
};
const completeProfile = {
    ...user, ...locations
};
console.log(completeProfile);
