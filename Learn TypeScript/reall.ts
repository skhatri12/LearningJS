interface UserDescription {
  name: string;
  age: number;
  address: string;
}

const users: UserDescription = {
  name: "Ram",
  age: 40,
  address: "Mulpani"
}

console.log(users);


//class
class Car {
  //properties
  name: string;
  year: number;

  //constructor
  constructor(name: string, year: number) {
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
function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}
const swapnum = swap<number>(5, 4);
console.log(swapnum);


//Generic Class
class Container<T> {
  value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T) {
    this.value = newValue;
  }
}

const numContainer = new Container<number>(40);
console.log(numContainer.getValue());

const stringContainer = new Container<string>("Hello world!");
console.log(stringContainer.getValue());


//generic interface
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const numberPair: KeyValuePair<String, number> = { key: "Ram", value: 30 };
console.log(numberPair);
console.log(numberPair.key);
console.log(numberPair.value);

const stringPair: KeyValuePair<string, string> = { key: "Harey", value: "Ram" };
console.log(stringPair);


//structural type system
interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

function printPoint(point: Point2D) {
  console.log(`${point.x}, ${point.y}`)
}

const point2D: Point2D = { x: 1, y: 2 };
const Point3D: Point3D = { x: 10, y: 20, z: 30 };

printPoint(point2D);
printPoint(Point3D);

//enums
//example one
enum Status {
  pending = "PENDING",
  approve = "APPROVED",
  reject = "REJECTED"
}

let currentStatus = Status.pending;
console.log(currentStatus);


//example two
enum Colors {
  RED = "FF0000",
  YELLOW = "FFFF00",
  BLUE = "0000FF"
}

const colorValues: Record<Colors, String> = {
  [Colors.RED]: "FF0000",
  [Colors.YELLOW]: "FFFF00",
  [Colors.BLUE]: "0000FF"
}

let currentColor: Colors = Colors.RED;
console.log(colorValues[currentColor]);


//example three
enum TravelPlaces {
  FirstPlace = "Pokhara",
  SecondPlace = "Mustang",
  ThirdPlace = "Dolakha"
}

let favPlace: TravelPlaces = TravelPlaces.ThirdPlace;
console.log(favPlace);