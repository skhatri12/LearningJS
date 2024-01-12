"use strict";
// getter and setter 
class Patient {
    constructor(name) {
        this.name = name;
    }
    set age(age) {
        if (age > 120 || age < 1) {
            throw new Error("Invalid age");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is not defined");
        }
        return this._age;
    }
    introducePatient() {
        return `My name is: ${this.name} and I'm ${this._age} years old`;
    }
}
const patient = new Patient("Hari Ram");
console.log(patient.age = 10);
console.log(patient.introducePatient());
