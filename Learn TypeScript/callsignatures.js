"use strict";
const student = {
    name: "Ram",
    age: 15,
    address: "Kathmandu",
    greet: ((country) => `Welcome!My name is ${student.name} and I am ${student.age} years old.I am from ${student.address} and I am from ${country}`)
};
const student1 = {
    name: "Shyam",
    age: 15,
    address: "Kathmandu",
    greet: ((country) => `Welcome!My name is ${student1.name} and I am ${student1.age} years old.I am from ${student1.address} and I am from ${country}`)
};
const introduction = (student) => {
    const { name, age, address } = student;
    return `Welcome!My name is ${name} and I am ${age} years old. I am from ${address}`;
};
// console.log(introduction(student));
console.log(student.greet("Nepal"));
console.log(student1.greet("Maldives"));
