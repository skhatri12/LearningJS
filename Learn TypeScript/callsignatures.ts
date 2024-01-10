type Student = {
  name: string;
  age: number;
  gender?: string;
  address: string;
  greet: (country: string) => string //method call signature
}

const student: Student = {
  name: "Ram",
  age: 15,
  address: "Kathmandu",
  greet: ((country): any => `Welcome!My name is ${student.name} and I am ${student.age} years old.I am from ${student.address} and I am from ${country}`)
}

const student1: Student = {
  name: "Shyam",
  age: 15,
  address: "Kathmandu",
  greet: ((country): any => `Welcome!My name is ${student1.name} and I am ${student1.age} years old.I am from ${student1.address} and I am from ${country}`)
}

const introduction: (student: Student) => string = (student: Student): string => {
  const { name, age, address } = student;
  return `Welcome!My name is ${name} and I am ${age} years old. I am from ${address}`;
}

// console.log(introduction(student));
console.log(student.greet("Nepal"));
console.log(student1.greet("Maldives"));
