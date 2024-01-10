"use strict";
// map and filter method in array in ts
//map method
const data = [1, 2, 4, 6, 8, 3, 5];
const doubleData = data.map((currentData) => currentData * 2);
console.log(doubleData);
const numtoString = data.map((currentNum) => currentNum.toString());
console.log(numtoString);
//filter
const filteredData = data.filter((currentData) => currentData < 5);
console.log(filteredData);
const evenfilteredData = data.filter((currentData) => currentData % 2 === 0);
console.log(evenfilteredData);
