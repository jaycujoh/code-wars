// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]



//assign a blank array to add the indices of both integers that equal target number
//iterate through the 'numbers' array
    //add the first number to the preceding number, one after the other until target number has been met
        //if not, move onto the next index and carry on the loop again, adding the number one after the other until target
            // once === target, pull the index of both numbers that sum up to target and add to new numArray



function twoSum(numbers, target) {
 
    for (i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([3, 2, 4], 6));