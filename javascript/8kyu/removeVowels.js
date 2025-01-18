function disemvowel(str) {
  
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Start with an empty string to store the result
    let noVowels = '';

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is NOT a vowel
        if (!vowels.includes(str[i])) { 
            // Add the character to the result if it's not a vowel
            noVowels += str[i]; 
        }
    }

    return noVowels;
    
    }

  console.log(disemvowel("This website is for losers LOL!"));