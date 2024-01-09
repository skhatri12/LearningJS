function greet(id: number, name: string) {
  console.log(`Welcome to ${name} with id: ${id}`);
}
greet(1, "Subash");

const greeet = (id: number, name: string) => {
  console.log(`Welcome to ${name} with id: ${id}`);
}
greeet(2, "Ram");

const sayHi = (name: string): string => {
  return `Hi ${name}!`;
}
const sayingHi = sayHi("Subash");
console.log(sayingHi);

const averageNumber = (a: number, b: number, c: number, d: number): number => {
  return (a + b + c + d) / 4;
}
const calcavgNumber = averageNumber(10, 15, 20, 25);
console.log(calcavgNumber);