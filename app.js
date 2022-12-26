// Codewars 8 kyu task "Will you make it?"
// Description:
// You were camping with your friends far away from home, but when it's time to go back, 
// you realize that your fuel is running out and the nearest pump is 50 miles away! You 
// know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return mpg * fuelLeft >= distanceToPump
};

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Century From Year
// Description:
// The first century spans from the year 1 up to and including the year 100, the second century - 
// from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

const century = year => year % 100 !== 0 ? Math.trunc(year/100) + 1 : Math.trunc(year/100);

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Reversed Strings
// Description:
// Complete the solution so that it reverses the string passed into it.
// Examples
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

const solution = str => {
    const strArr = [...str];
    let reverseString = '';
    for(let i = strArr.length - 1; i >= 0; i--) {
      reverseString += strArr[i]
    }
    return reverseString;
}

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Opposites Attract
// Description: 
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a 
// flower each. If one of the flowers has an even number of petals and the other has an odd number of petals 
// it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love 
// and false if they aren't.

function lovefunc(flower1, flower2){
    if((!(flower1 % 2) && flower2 % 2) ||
    (!(flower2 % 2) && flower1 % 2)) {
      return true  
    } else {
      return false
    }
  }

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Returning Strings
// Description:
// Make a function that will return a greeting statement that uses an input; your program should return, 
// "Hello, <name> how are you doing today?".

const greet = name => `Hello, ${name} how are you doing today?`

//---------------------------------------------------------------------------------------------------------

// Codewars 8 kyu task Remove String Spaces
// Description:
// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){

}