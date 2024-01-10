// map and filter method in array in ts

//map method
const data = [1, 2, 4, 6, 8, 3, 5];
const doubleData: number[] = data.map((currentData: number) => currentData * 2);
console.log(doubleData);

const numtoString: string[] = data.map((currentNum: number) => currentNum.toString());
console.log(numtoString);


//filter
const filteredData = data.filter((currentData) => currentData < 5);
console.log(filteredData);

const evenfilteredData = data.filter((currentData) => currentData % 2 === 0);
console.log(evenfilteredData);

