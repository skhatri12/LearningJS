
//inheritance

class Persons {
  name: string;
  age: number;
  hobbies: string[];


  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  introduce(): string {
    return `I'm ${this.name} and ${this.age} years old. My hobbies are ${this.hobbies.join(',')}`;
  }
}

class Student extends Persons {
  grade: number;

  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }
  introduce(): string {
    return `${super.introduce()} and Im in ${this.grade}`
  }
}

const person2: Persons = new Persons("Shyam", 20, ["Travel", "Dance", "Sing"]);
const person3: Persons = new Student("Radhe Shyam", 25, ["Read", "Listen", "Sing"], 10);

// console.log(person2);
console.log(person2.introduce());
console.log(person3.introduce());