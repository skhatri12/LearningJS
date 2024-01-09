//default parameter in ts function
const hello = (id: number, name: string) => {
  return `Welcome to the company ${id} named as ${name}`;
}

const sayHello = hello(1, "Subash");
console.log(sayHello);



//optional parameter in ts function
const hello1 = (name: string, id?: number): string => {
  if (id) {
    return `Welcome to the company named as ${name} and ${id}`;
  }
  else {
    return `Welcome to the company named as ${name}`;
  }
}

const sayHellos = hello1("CG", 1);
const sayHell = hello1("CG");
console.log(sayHellos);
console.log(sayHell);

