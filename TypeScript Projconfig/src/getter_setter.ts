// getter and setter 

class Patient {
  private _age: number | undefined;
  constructor(
    public name: string,
  ) { }

  public set age(age: number) {
    if (age > 120 || age < 1) {
      throw new Error("Invalid age");
    }
    this._age = age;
  }

  public get age(): number {
    if (this._age === undefined) {
      throw new Error("Age is not defined");
    }
    return this._age;
  }


  introducePatient(): string {
    return `My name is: ${this.name} and I'm ${this._age} years old`;
  }
}

const patient = new Patient("Hari Ram");
console.log(patient.age = 10)

console.log(patient.introducePatient());