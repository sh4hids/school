// Types

let fullname: string = "John Doe";
let age: number = 27;
let isMarried: boolean = true;

let favouriteNumbers: number[] = [1, 2, 3, 4, 5];
let favouriteFruits: string[] = ["Mango", "Pineapple", "Banana"];

let someInfo: any = {
  address: "Dhaka, 4242",
};

// Function

function greet(name: string): string {
  return `Hello, ${name.toUpperCase()} !!`;
}

greet("John");

function getAddress(params: { city: string; state?: string; zip: number }) {
  return `${params.city}, ${params.state ? params.state + ", " : ""}${
    params.zip
  }`;
}

console.log(getAddress({ city: "Dhaka", zip: 4567 }));
console.log(getAddress({ city: "Dhaka", state: "Dhaka", zip: 4567 }));

function printId(id: number | string): string {
  return `Your id is ${id}`;
}

console.log(printId(123));
console.log(printId("123"));
// console.log(printId(true));

type Point = {
  x: number;
  y: number;
};

function printCoords(params: Point) {
  console.log(params.x);
  console.log(params.y);
}

interface Fullname {
  firstName: string;
  lastName: string;
}

function printFullname(params: Fullname) {
  console.log(`${params.firstName} ${params.lastName}`);
}
