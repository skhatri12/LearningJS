//Objects in typescript
const userDetails: {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  }
} = {
  name: "Ram",
  age: 20,
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
}

//accessing object data
console.log(userDetails.address.city);

//updating object properties
userDetails.address.country = "Australia";
console.log(userDetails.address.country);