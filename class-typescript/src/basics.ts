let firstName: string = 'Shahidul';
let isCool: boolean = true;

const fullName: string = firstName += ' Islam';

console.log(fullName);

const aNumber: number = 10;

const numbers: number[] = [1, 2, 3];

const myRegex: RegExp = /test/;

const names: Array<string> = fullName.split(' ');

interface Person {
  name: string;
  age: number;
  isCool: boolean;
}

const newPerson: Person = {
  name: "John Doe",
  age: 25,
  isCool: false
}

const ids: Record<number, string> = {
  10: "a",
  20: "b",
  30: "c"
}

ids[40] = "d";

if (ids[40] === "d") {
  console.log('It is D');
}


// not important to add type for loop incrementor
// it's better to let typescript infer as much as possible

for (let i = 0; i < 10; i++) {
  console.log(i);
}
