let number: any = 10;
number = "Shyam";
number = true;

let number1: unknown;
number1 = 100;
number1 = true;
number1 = "Ram";
if (typeof number1 === "number") {
  console.log(number1 + 10);
}
else if (typeof number1 === "string") {
  console.log(number1);
}