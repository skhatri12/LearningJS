"use strict";
//access modifier
class Persons1 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `I'm ${this.name} and ${this.age} years old. My hobbies are ${this.hobbies.join(',')}`;
    }
}
class Students extends Persons1 {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} and Im in ${this.grade}`;
    }
}
const person4 = new Persons1("Shyam", 20, ["Travel", "Dance", "Sing"]);
const person5 = new Students("Radhe Shyam", 25, ["Read", "Listen", "Sing"], 10);
console.log(person4.introduce());
// accessed using public access modifier
console.log(person4.name);
//tried to access using protected access modifier but failed to do outside the parent and child class
console.log(person5.age);
//tried to access using protected access modifier but failed to do outside the parent
console.log(person4.hobbies);
console.log(person5.grade);
