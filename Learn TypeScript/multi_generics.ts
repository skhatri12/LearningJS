//multiple type variables

const result = add<number, string>(5, "Hello");

function add<T, U>(a: T, b: U) {
  console.log(typeof a);
  console.log(typeof b);
}