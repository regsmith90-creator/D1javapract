
// #1 Complete the function by adding the appropriate
// parameters to the function.
function double(num){ // <-- add code inside the parenthesis ()
    return num * 2
}
const answer = double(5);
const answer25 = double(10);
const answer35 = double(15); 
const answer45 = double(20);

console.log(answer);
console.log(answer25);
console.log(answer35);
console.log(answer45);  

// #2 Complete the function by adding the appropriate
// parameters to the function.
function multiply(a, b){ // <-- add code inside the parenthesis ()
    return a * b;
}
const answer1 = multiply(7,8);
const answer2 = multiply(3,2);
const answer3 = multiply(10,5);
const answer4 = multiply(5,5);
const answer5 = multiply(2,3);

console.log(answer1);
console.log(answer2);
console.log(answer3);   
console.log(answer4);
console.log(answer5);   


// #3 Complete the function by adding the appropriate
// parameters to the function.
function shout(word){ // <-- add code inside the parenthesis ()
    return word.toUpperCase();
}
const answer6 = shout('hello');
const answer7 = shout('world');
const answer8 = shout('javascript');
const answer9 = shout('programming');
const answer10 = shout('code');

console.log(answer6);
console.log(answer7);
console.log(answer8);
console.log(answer9);
console.log(answer10);      

// #4 Complete the function by adding the appropriate
// parameters to the function.
function first(arr){ // <-- add code inside the parenthesis ()
    return arr[0];
}
const answer11 = first([1, 2, 3]);
const answer12 = first(['a', 'b', 'c']);
const answer13 = first([true, false, true]);
const answer14 = first([null, undefined, 0]);
const answer15 = first([[1, 2], [3, 4], [5, 6]]);

console.log(answer11);
console.log(answer12);
console.log(answer13);
console.log(answer14);
console.log(answer15);  


module.exports = {double, multiply, shout, first}