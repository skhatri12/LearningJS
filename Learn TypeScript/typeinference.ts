let fName = "Subash";
// fName = 5;

//compiler infers type string
let msg = "Hello,TypeScript!";
console.log(msg);

//compiler infers type number
function calculateArea(length: number, width: number) {
  return length * width;
}
console.log(calculateArea(10, 20));
