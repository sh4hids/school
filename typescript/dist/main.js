// Types
var fullname = "John Doe";
var age = 27;
var isMarried = true;
var favouriteNumbers = [1, 2, 3, 4, 5];
var favouriteFruits = ["Mango", "Pineapple", "Banana"];
var someInfo = {
    address: "Dhaka, 4242"
};
// Function
function greet(name) {
    return "Hello, " + name.toUpperCase() + " !!";
}
greet("John");
function getAddress(params) {
    return params.city + ", " + (params.state ? params.state + ", " : "") + params.zip;
}
console.log(getAddress({ city: "Dhaka", zip: 4567 }));
console.log(getAddress({ city: "Dhaka", state: "Dhaka", zip: 4567 }));
function printId(id) {
    return "Your id is " + id;
}
console.log(printId(123));
console.log(printId("123"));
function printCoords(params) {
    console.log(params.x);
    console.log(params.y);
}
function printFullname(params) {
    console.log(params.firstName + " " + params.lastName);
}
