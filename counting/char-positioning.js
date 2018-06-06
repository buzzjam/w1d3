function countLetters(input) {
  var splitLetters = input.split("");
  var obj = {}

  for (var i = 0; i < splitLetters.length; i++) {
    if (splitLetters.includes(splitLetters[i])) {
      var inputLetter = splitLetters[i];
      if (!(inputLetter in obj)) {
        if ((inputLetter !== " ")) {
          obj[inputLetter] = [];
          obj[inputLetter].push(i);
        }
      } else {
        obj[inputLetter].push(i);
      }
    }
  }
  return obj;
}

console.log(countLetters("lighthouse in the house"));