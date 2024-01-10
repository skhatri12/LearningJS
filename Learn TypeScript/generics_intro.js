"use strict";
//generics
function logReturn(value) {
    return value;
}
const numberResult = logReturn(10);
console.log(numberResult);
const booleanResult = logReturn(true);
console.log(booleanResult);
const stringResult = logReturn("Hello world!");
console.log(stringResult);
