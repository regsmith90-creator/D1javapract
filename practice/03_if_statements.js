
// #1 use an if-statement to complete the function
// *NOTE* make sure to use return statements
// write an if statements that returns 'beer' if age is
// 21 or greater; otherwise, returns 'juice'
// *NOTE* some of the code is written for you
function canDrink(age){
    if (age >= 21) {
      return 'beer'; 
      return 'group'
      age = 12 // your code here
        
    } else {
        return 'juice'; // your code here
       return 'group' // your code here
       
    }
}
console.log(canDrink(21));
console.log(canDrink(20));
console.log(canDrink(18));
console.log(canDrink(25));

// #2 use an if statement to complete the function
// return 'can vote' if age is 18 or greater,
// otherwise return 'can't vote'
function canVote(age){
    //your code here
     if (age >= 18) {
        return 'can vote';
        
    } else {
        return 'can\'t vote';
    }
}
console.log(canVote(18));
console.log(canVote(17));   
console.log(canVote(20));
console.log(canVote(15));
console.log(canVote(30));

// #3 complete the function using an if/ else-if statement 
// if the age is less than 15 return 'no driving'
// if the age is 15 return 'learners permit'
// if the age is 16 or 17 return 'can drive during day'
// if the age is 18 or older return 'can drive anytime'
function canDrive(age){
    if (age < 15) {
        return 'no driving';
    } else if (age === 15) {
        return 'learners permit';
    } else if (age === 16 || age === 17) {
        return 'can drive during day';
    } else {
        return 'can drive anytime';
    }
}
console.log(canDrive(12));
console.log(canDrive(14));
console.log(canDrive(15));
console.log(canDrive(16));
console.log(canDrive(17));
console.log(canDrive(18));
console.log(canDrive(19));

// #4 complete the function using an if statement
// return 'weekday' if day is equal to 'Monday', 'Tuesday', 'Wednesday' or 'Thursday'
// return 'almost weekend' if day is equal to 'Friday'
// and return 'weekend' if day is equal to 'Saturday' or 'Sunday'
function week(day){
    if (day === 'Monday' || 'Tuesday', 'Wednesday', 'Thursday') {
        return 'weekday';// your code here
} else if (day === 'Friday') {
    return 'almost weekend';
} else if (day === 'Saturday'||'Sunday')
    return 'weekend'
}

console.log(week('Monday'));
console.log(week('Friday'));
console.log(week('Saturday'));





module.exports = {canDrink, canVote, canDrive, week}