"use strict";
//using square brackets
const numbers = [1, 2, 3, 4, 5, 10];
console.log(numbers);
//using array constructor
const numbers1 = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers1);
//using Array.of method
const names = Array.of("Subash", "Gauri", "Ram");
console.log(names);
console.log(names[2]);
console.log(names.length);
//array methods and iterations
const youtubers = ["Thapa Technical", "Mr.Hyozu", "OSR Digital", "Mr.Beast"];
//adding element to an array using push
const updatedYoutubers = youtubers.push("Sourav Joshi Vlogs");
console.log(youtubers);
//removing element from an array using pop
const lastData = youtubers.pop();
console.log(lastData);
console.log(youtubers);
//iterating over loop using for loop
console.log("Using for loop");
for (let i = 0; i < youtubers.length; i++) {
    console.log(youtubers[i]);
}
//for...of loop iterates over indices
console.log("Using for...of");
for (const names of youtubers) {
    console.log(names);
}
//for...in loop iterates over values
console.log("Using for...in ");
for (const ynames in youtubers) {
    console.log(ynames);
}
//forEach method
console.log("Using forEach method");
youtubers.forEach((currentYoutuber) => console.log(currentYoutuber));
