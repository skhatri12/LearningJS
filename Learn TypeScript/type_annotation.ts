let num: number = 10;
let fulllName: string = "Subash Khatri";

console.log(num.toString());
console.log(fulllName);

let sum1 = num + 10;
console.log(sum1);

let myAge: number = 23;
let myfavNum: number = 10;
let pi: number = 3.21;
let negativeValue: number = -8;

//number cannot be assigned to a string
//let totalAge: number = myAge + "years";

let nanValue: number = NaN;
console.log(nanValue);

let message: string = "Hello, TypeScript!";

let firstName: string = "Subash";
let lastName: string = "Khatri";
let fullName = firstName + " " + lastName;
console.log(fullName);

let statement: string = "Hello I am learning TypeScript";
let statementLength: number = statement.length;
console.log(statementLength);

let text: string = "Text that need to be changed from lower to upper and vice versa.";
let lowercaseText: string = text.toLowerCase();
let uppercaseText: string = text.toUpperCase();
console.log(uppercaseText);
console.log(lowercaseText);