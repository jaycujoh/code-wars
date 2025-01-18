function disemvowel(str) {
  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (i = 0; i > str.length; i++) {
      if (str.charAt(i) === vowels(i)) {
            str.replace(str.charAt(i), '')
        }

    return str;
    
    }
  }

  console.log(disemvowel("This website is for losers LOL!"));