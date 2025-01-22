// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArr = alphabet.split('')
    let alphabetObj = {};

    alphabetArr.forEach((num, index) => {
        alphabetObj[num] = index + 1;
    });

    const string = text.toLowerCase().split('');
   
    let output = "";

    for (i = 0; i < string.length; i++) {
        for (let num in alphabetObj) {
            if (string[i] === num) {
                output += alphabetObj[num] + ' ';
            }
        }
    }
   
    return output.trim();
}