const person = {
  name: "John Doe",
  age: 30,
  location: "London",
  isProgrammer: true,
};
//Ways of accessing items in our objects
//Dot notation

console.log(person.name);
console.log(person.age);
console.log(person.location);
console.log(person.isProgrammer);
console.log(typeof person);

//Bracket Notation

console.log(person["name"]);
console.log(person["age"]);
console.log(person["location"]);
console.log(person["isProgrammer"]);

//Adding a new property

person.hobbies = ["Reading", "Coding"];
console.log(person.hobbies);

person.gender = "male";
console.log(person["gender"]);

//Updating a property

person.age = 31;
console.log(person.age);

//Deleting a property

delete person.gender;
console.log(person.gender);

const car = {
  type: "Mazda",
  model: "Mustang",
  color: "White",
};
console.log(typeof car);

car.type = "Toyota";
console.log(car.type);

car.wheels = 'Rim Wheels';
console.log(car.wheels);

console.log(car);
