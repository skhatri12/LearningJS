//tuples in typescript

type PersonInfo = readonly [string, number, boolean];
const person1: PersonInfo = ["Ram", 5, true];
const person2: PersonInfo = ["Hari", 10, false];

const displayPersonInfo: (person: PersonInfo) => void = (person: PersonInfo): void => {
  const [name, age, hasLicense] = person;
  console.log(`Name:${name},Age:${age},HasLicense:${hasLicense ? "Yes" : "No"}`);
}

displayPersonInfo(person1);
displayPersonInfo(person2);