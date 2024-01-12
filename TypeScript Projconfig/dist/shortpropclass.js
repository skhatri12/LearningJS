"use strict";
//short hand properties in class
class PersonsOne {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `I'm ${this.name} and ${this.age} years old. My hobbies are ${this.hobbies.join(',')}`;
    }
}
class StudentOne extends PersonsOne {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} and Im in ${this.grade}`;
    }
}
const person7 = new PersonsOne("Shyam", 20, ["Travel", "Dance", "Sing"]);
const person6 = new StudentOne("Radhe Shyam", 25, ["Read", "Listen", "Sing"], 10);
// console.log(person2);
console.log(person7.introduce());
console.log(person6.introduce());
