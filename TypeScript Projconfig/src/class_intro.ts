//class and constructor

//class
class Person {
  name: string;
  age: number;
  hobbies: string[];


  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

const person1: Person = new Person("Ram", 20, ["Singing", "Dancing", "Travelling"]);
console.log(person1);