//generics

function logReturn<T>(value: T): T {
  return value;
}

const numberResult = logReturn<number>(10);
console.log(numberResult);

const booleanResult = logReturn<boolean>(true);
console.log(booleanResult);

const stringResult = logReturn<string>("Hello world!");
console.log(stringResult);