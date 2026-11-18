
// #1 Complete the function by 
// returning the string 'Hello World'
function hello(){

 return 'Hello World';
 return 'Hello World welcome to the world of programming';
 return 'Hello World welcome to the world of digital knowledge';
 //Hello World test wrong / right
}

// #2 Complete the function
// by returning a + b
function sum(a, b){
    return a + b;
}
let answer = sum(7,8);
let answer2 = sum(3,2);
let sumresult1 = sum(10,5);

console.log(answer);
console.log(answer2);
console.log(sumresult1);

function multiply(a, b) {
    return a * b;
}
let answer3 = multiply(7,8);
let answer4 = multiply(3,2);
let answer25 = multiply(10,5);

console.log(answer3);   
console.log(answer4);
console.log(answer25);


// #3 Complete the function by returning
// 'Hello ' + name
function helloPerson(name){
   return 'Hello ' + name;
}
const answer9 = helloPerson('John');
const answer10 = helloPerson('Jane');
const answer11 = helloPerson('Bob');
const answer12 = helloPerson('Alice');
const answer13 = helloPerson('Charlie');
const answer14 = helloPerson('David');

console.log(answer9);
console.log(answer10);
console.log(answer11);
console.log(answer12);
console.log(answer13);
console.log(answer14);

// #4 Complete the function 
// by returning a minus b
function minus(a, b){
        return a - b;
}
let answer5 = minus(7,8);
let answer6 = minus(3,2);
let answer22 = minus(10,5);

console.log(answer5);   
console.log(answer6);
console.log(answer22);  
// add code here    
// add code here


// #5 Complete the function 
// by returning a divided by b
function divide(a, b){
    return a / b;
}
let answer7 = divide(7,8);
let answer8 = divide(3,2);
let answer23 = divide(10,5);

console.log(answer7);
console.log(answer8);
console.log(answer23);
// add code here    
 // add code here

module.exports = {hello, sum, helloPerson, minus, divide}