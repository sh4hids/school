import {
  addNumbers,
  addStrings,
  printFormattedTitle,
  fetchData,
  getSalutation,
  getName,
} from "./functions";

console.log(addNumbers(1, 5));
console.log(addStrings("John", "Doe"));
console.log(addStrings("John"));
printFormattedTitle("My Title", "1");
printFormattedTitle("My Title", 2);
console.log(fetchData("https://shahid.pro"));
console.log(getSalutation("Mr.", "John", "Doe", "Jr."));
console.log(getName({ firstName: "James", lastName: "Dow" }));
