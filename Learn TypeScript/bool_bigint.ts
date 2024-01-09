let isAnsRight: boolean = true;
let isDone: boolean = false;

function isEven(a: number): boolean {
  return a % 2 === 0
}

console.log(isEven(6));


let maxNumber: bigint = 9007199254740991n;
let anotherMaxNum: bigint = 9007199254740991n;
console.log(maxNumber);
console.log(anotherMaxNum);
let sum2 = maxNumber + anotherMaxNum;
console.log("Sum is" + " " + sum2);