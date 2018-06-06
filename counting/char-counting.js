function countLetters(input){
  var splitLetters = input.split(" ").join("");
  var obj = {}

  for (var i = 0; i < splitLetters.length; i++) {
    if (splitLetters.includes(splitLetters[i])) {
      var inputLetter = splitLetters[i];
      if (!(inputLetter in obj)) {
        obj[inputLetter] = 1
      } else {
        obj[inputLetter] += 1
      }
    }
  }
  return obj;
}

console.log(countLetters("lighthouse in the house"));