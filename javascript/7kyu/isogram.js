// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

differentLetters = 'Dermatoglyphics'
sameLetters = 'aba'
includeNumber = 'mo0se'

function isIsogram(str){
    //ignore case
    str = str.toLowerCase();
    //boolean to define if the string is a number (true)
    let hasNumbers = /\d/.test(str)
    //split each character into an array
    let arr = str.split('');
    //create blank object
    let obj = {};

    //if the string contains numbers then return false
    if (hasNumbers === true) {
        return false;
    }

    //iterate through the array counting how many of the same characters appear
    arr.forEach(num => {
        obj[num] = (obj[num] || 0) + 1;
    })

    //iterate through the newly created object
    for (let num in obj) {
        //if value of obj at num is more than 1 then return false
        if (obj[num] > 1) {
            return false;
        }
    }

    return true;
}
  
  console.log(differentLetters, "-->", isIsogram(differentLetters));
  console.log(sameLetters, "-->", isIsogram(sameLetters));
  console.log(includeNumber, "-->", isIsogram(includeNumber));