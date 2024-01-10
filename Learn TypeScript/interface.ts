//interface

interface Greeting {
  name: string;
  age: number
}

const greets: Greeting = {
  name: "Ram",
  age: 20
}


interface Products {
  name: string;
  price: number;
  quantity: number;
}

const productone: Products = {
  name: "Dell",
  price: 10000,
  quantity: 2
}

const producttwo: Products = {
  name: "HP",
  price: 20000,
  quantity: 3
}

const calculateTotalPrices = (products: Products): number => {
  const { price, quantity } = products;
  return price * quantity;
}

console.log(calculateTotalPrices(productone));
console.log(calculateTotalPrices(producttwo));

