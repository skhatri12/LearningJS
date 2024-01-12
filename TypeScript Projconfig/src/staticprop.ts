//static method and properties

class MathOperations {

  public static PI: number = Math.PI;

  public static add(num1: number, num2: number) {
    return num1 + num2;
  }

  public static difference(num1: number, num2: number) {
    return num1 - num2;
  }
}

console.log(MathOperations.PI);
console.log(MathOperations.add(10, 20));
console.log(MathOperations.difference(20, 10)); 