//union and intersection in typescript

//union

//define function
const userInput = (value: string | number) => {
  if (typeof value === 'number') {
    return value * 2;
  }
  else if (typeof value === 'string') {
    return value.toUpperCase();
  }
  else {
    throw new Error('Invalid input value');
  }

};

//function call
console.log(userInput("10"));
console.log(userInput("Hello World"));


//intersection

type User = {
  name: string;
  age: number
}

type MyLocation = {
  city: string;
  country: string;
}

type UserProfile = User & MyLocation;

const user: User = {
  name: "Ram",
  age: 20
}

const locations: MyLocation = {
  city: "Mumbai",
  country: "India"
}

const completeProfile: UserProfile = {
  ...user, ...locations
}

console.log(completeProfile);