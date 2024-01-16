"use strict";
const users = {
    name: "Ram",
    age: 40,
    address: "Mulpani"
};
console.log(users);
//class
class Car {
    //constructor
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    //method
    displayInfo() {
        console.log(`This is my brand new ${this.name} of ${this.year} year`);
    }
}
//creating an instance of Car class
const myCar = new Car("Lamborghini", 2020);
console.log(myCar.displayInfo());
//Generic functions
function swap(a, b) {
    return [b, a];
}
const swapnum = swap(5, 4);
console.log(swapnum);
//Generic Class
class Container {
    constructor(initialValue) {
        this.value = initialValue;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
const numContainer = new Container(40);
console.log(numContainer.getValue());
const stringContainer = new Container("Hello world!");
console.log(stringContainer.getValue());
const numberPair = { key: "Ram", value: 30 };
console.log(numberPair);
console.log(numberPair.key);
console.log(numberPair.value);
const stringPair = { key: "Harey", value: "Ram" };
console.log(stringPair);
function printPoint(point) {
    console.log(`${point.x}, ${point.y}`);
}
const point2D = { x: 1, y: 2 };
const Point3D = { x: 10, y: 20, z: 30 };
printPoint(point2D);
printPoint(Point3D);
//enums
//example one
var Status;
(function (Status) {
    Status["pending"] = "PENDING";
    Status["approve"] = "APPROVED";
    Status["reject"] = "REJECTED";
})(Status || (Status = {}));
let currentStatus = Status.pending;
console.log(currentStatus);
//example two
var Colors;
(function (Colors) {
    Colors["RED"] = "FF0000";
    Colors["YELLOW"] = "FFFF00";
    Colors["BLUE"] = "0000FF";
})(Colors || (Colors = {}));
const colorValues = {
    [Colors.RED]: "FF0000",
    [Colors.YELLOW]: "FFFF00",
    [Colors.BLUE]: "0000FF"
};
let currentColor = Colors.RED;
console.log(colorValues[currentColor]);
//example three
var TravelPlaces;
(function (TravelPlaces) {
    TravelPlaces["FirstPlace"] = "Pokhara";
    TravelPlaces["SecondPlace"] = "Mustang";
    TravelPlaces["ThirdPlace"] = "Dolakha";
})(TravelPlaces || (TravelPlaces = {}));
let favPlace = TravelPlaces.ThirdPlace;
console.log(favPlace);
