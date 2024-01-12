"use strict";
//class and constructor
//class
class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const person1 = new Person("Ram", 20, ["Singing", "Dancing", "Travelling"]);
console.log(person1);
