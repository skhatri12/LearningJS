"use strict";
//inheritance
class Persons {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `I'm ${this.name} and ${this.age} years old. My hobbies are ${this.hobbies.join(',')}`;
    }
}
class Student extends Persons {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} and Im in ${this.grade}`;
    }
}
const person2 = new Persons("Shyam", 20, ["Travel", "Dance", "Sing"]);
const person3 = new Student("Radhe Shyam", 25, ["Read", "Listen", "Sing"], 10);
// console.log(person2);
console.log(person2.introduce());
console.log(person3.introduce());
