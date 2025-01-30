function greet() {
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
}
greet();

function sayHello(greeting) {
  console.log(`Hello ${greeting}`);
}
sayHello();

function add(x, y) {
  return x + y;
}
const res = add(1, 2);
console.log(res);

//Function Expression

const greetings =  function(user){
    console.log(`Hello ${user}`);
}

greetings("John");

const sum = function (x,y){

    return x+y;
}
const result = sum(1, 5);
console.log(result);

//callback
function showCallFunc(fn){
    const value = 10;
}

