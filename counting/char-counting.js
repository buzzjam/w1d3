function countLetters(input){
  var splitLetters = input.split(" ").join("");
  var obj = {}

  for (var i = 0; i < splitLetters.length; i++) {
    if (splitLetters.includes(splitLetters[i])) {
      var key = splitLetters[i];
      if (!(key in obj)) {
        obj[splitLetters[i]] = 0
        obj[splitLetters[i]] += 1
      } else {
        obj[splitLetters[i]] += 1
      }
    }
  }
  return obj;
}

console.log(countLetters("lighthouse in the house"));