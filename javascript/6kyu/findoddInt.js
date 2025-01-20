// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//iterate through the array
//count how many times a number appears
//if the amount of times a number appears is not divisible by 2, console.log the answer

let arrayOdd = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

function findOdd(A) {
    //object where the keys are the numbers, and the values are how many times each number appears
    const c = {}; 
    // counting the frequency of each unique number in the array 
             //num is the current element index in the array
    A.forEach(num => {
        //if c @ num = 0 then do nothing + 1
            // if c @ num = 1 then 1 + 1
        c[num] = (c[num] || 0) + 1;
    })
    // loop through c object
    for (let num in c) {
        //if count is not divisible by 2 (odd)
        if (c[num] % 2 !== 0) {
            //return num
            return Number(num);
        }
    }
  }

console.log(findOdd(arrayOdd))