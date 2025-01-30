// concat()	joins two or more arrays and returns a result
// includes()	checks if an array contains a specified element
// push()	aads a new element to the end of an array and returns the new length of an array
// unshift()	adds a new element to the beginning of an array and returns the new length of an array
// pop()	removes the last element of an array and returns the removed element
// shift()	removes the first element of an array and returns the removed element
// sort()	sorts the elements alphabetically in strings and in ascending order
// slice()	selects the part of an array and returns the new array
// splice()	removes or replaces existing elements and/or adds new elements

const fruits = [
  "apple",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];
console.log(fruits.length);
fruits.push("banana");
const moreFruits = ["peach", "orange", "watermelon"];
const TotalFruits = fruits.concat(moreFruits);
console.log(TotalFruits);

const pl = ["Java", "Javascript", "Python", "Php"];
console.log(pl.includes("Golang"));
console.log(pl.join("Liam"));
