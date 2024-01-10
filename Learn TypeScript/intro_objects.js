"use strict";
//Objects in typescript
const userDetails = {
    name: "Ram",
    age: 20,
    address: {
        city: "Kathmandu",
        country: "Nepal"
    }
};
//accessing object data
console.log(userDetails.address.city);
//updating object properties
userDetails.address.country = "Australia";
console.log(userDetails.address.country);
