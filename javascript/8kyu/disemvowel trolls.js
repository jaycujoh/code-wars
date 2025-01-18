function disemvowel(str) {
  
  const vowels = ['a', 'e', 'i', 'o', 'u']
  
  for (i = 0; i > str.length; i++) {
    if (str.charAt(i) === vowels[i]) {
      str.chatAt(i).pop
    }
  }
  }
  return str;


  disemvowel('This website is for losers LOL!');
