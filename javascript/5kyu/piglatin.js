// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){

  //assign the first letter to the end of a word then +'ay' to the word.

  const newSentence = str.split(' ');

  let splitWord = '';
  let pigLatin = '';

  for (i = 0; i < newSentence.length; i++) {
    //split the array value at [i] into a seperate array of each letter
      splitWord = newSentence[i].split('');
      //go through the new letter array 
      for (let j = 0; j < 1; j++) {
          //grab the first indexed letter of the array and add it to end instead
            let firstIndex = splitWord.shift();
            splitWord.push(firstIndex);
          //join the letters together and add the new word to a new array with 'ay' added on.
            pigLatin += splitWord.join('') + 'ay ';
            }
          }
          return pigLatin.trim();
}
  console.log(pigIt('Pig latin is cool'));