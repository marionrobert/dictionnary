function splitString(string) {
  return string.match(/[^ ]+/g)
}

module.exports = function dictionary(words){
  // const wordsList = splitString(words) || []
  // const result = {}
  // wordsList.forEach(word => {
  //   result[word] = result[word] + 1 || 1
  // });
  // return result;

  // with refactorisation
  return (splitString(words) || []).reduce((current, word) => {
    current[word] = current[word] + 1 || 1;
    return current;
  }, {})
}
