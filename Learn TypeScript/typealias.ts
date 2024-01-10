// type aliases in typescript
type LaptopDetails = {
  name: string;
  hdd: {
    gb: number;
    tb: number;
  };
  warranty: string
}

const laptopDetails: LaptopDetails = {
  name: "HP",
  hdd: {
    gb: 1,
    tb: 2
  },
  warranty: "yes"
}
console.log(laptopDetails);

const laptopDetailsone: LaptopDetails = {
  name: "Dell",
  hdd: {
    gb: 10,
    tb: 20
  },
  warranty: "no"
}



type Product = {
  name: string;
  price: number;
  quantity: number;
}
const product: Product = {
  name: "Asus",
  price: 25000,
  quantity: 4
}
const calculateTotalPrice = (product: Product) => {
  return `Total cost for a ${product.name} is ${product.price * product.quantity}`;
}
console.log(calculateTotalPrice(product));
