const person = {
  name: "John Doe",
  age: 20,
  email: "js@gmail.com",
  isSubscribed: "true",
  hobbies: ["Reading", "Running", "Cooking "],
  address: {
    city: "New York",
  },
};

const jsonString =JSON.stringify(person);
console.log(jsonString);

const parsedJson = JSON.parse(jsonString);
console.log(parsedJson);

