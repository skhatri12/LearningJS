
//short hand properties in class
class PersonsOne {

  constructor(public name: string, public age: number, protected hobbies: string[]) { }
  introduce(): string {
    return `I'm ${this.name} and ${this.age} years old. My hobbies are ${this.hobbies.join(',')}`;
  }
}

class StudentOne extends PersonsOne {
  constructor(name: string, age: number, hobbies: string[], public grade: number) {
    super(name, age, hobbies);
  }
  introduce(): string {
    return `${super.introduce()} and Im in ${this.grade}`
  }
}

const person7: PersonsOne = new PersonsOne("Shyam", 20, ["Travel", "Dance", "Sing"]);
const person6: PersonsOne = new StudentOne("Radhe Shyam", 25, ["Read", "Listen", "Sing"], 10);

// console.log(person2);
console.log(person7.introduce());
console.log(person6.introduce());