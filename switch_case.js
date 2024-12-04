let x = 0;

switch (x) {
    case 0:
        bulb = "off";
        console.log(bulb);
        break;

    case 1 :
        bulb = "on";
        console.log(bulb);
        break;
    default:
        bulb = "unknown";
        console.log(bulb);   
}

let day = 'monday';
switch (day) {
    case 'monday':
        console.log('Today is Monday!');
    break;
    case 'tuesday':
        console.log('Today is Tuesday!');
    break;
    case 'saturday':
        console.log('Today is Saturday!');
        break;
    default:
        console.log('Dont know what day it is today!');

}

let fruit = 'Apple';
switch (fruit) {
    case 'banana':
        console.log("Banana is good!");
    break;

    case 'Orange':
        console.log("I am not a fan of oranges.");
    break;

    case 'Apple':
        console.log("How you like them apples?");
    break;

    default:
        console.log("I have never heard of that fruit.");
}