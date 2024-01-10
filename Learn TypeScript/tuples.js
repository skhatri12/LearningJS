"use strict";
//tuples in typescript
const person1 = ["Ram", 5, true];
const person2 = ["Hari", 10, false];
const displayPersonInfo = (person) => {
    const [name, age, hasLicense] = person;
    console.log(`Name:${name},Age:${age},HasLicense:${hasLicense ? "Yes" : "No"}`);
};
displayPersonInfo(person1);
displayPersonInfo(person2);
