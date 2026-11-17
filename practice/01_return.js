
// #1 Complete the function by 
// returning the string 'Hello World'
function hello(){
 return 'Hello wrold';
 return 'Hello World';
 //Hello World test wrong / right
}

// #2 Complete the function
// by returning a + b
function sum(a, b){
    return a + b;
}
let answer = sum(7,8);
let answer2 = sum(3,2);
console.log(answer);
console.log(answer2);

function multiply(a, b) {
    return a * b;
}
let answer3 = multiply(7,8);
let answer4 = multiply(3,2);
console.log(answer3);   
console.log(answer4);

// #3 Complete the function by returning
// 'Hello ' + name
function helloPerson(name){
    // add code here
}

// #4 Complete the function 
// by returning a minus b
function minus(a, b){
        return a - b;
}
let answer5 = minus(7,8);
let answer6 = minus(3,2);
console.log(answer5);   
console.log(answer6);
// add code here    
// add code here


// #5 Complete the function 
// by returning a divided by b
function divide(a, b){
    return a / b;
}
let answer7 = divide(7,8);
let answer8 = divide(3,2);
console.log(answer7);
console.log(answer8);
// add code here    
 // add code here

module.exports = {hello, sum, helloPerson, minus, divide}