function matchString(string) {
  return string.match(/[^ ]+/g)
}

module.exports = function dictionary(words){
  const wordsList = matchString(words) || []
  const result = {}

  wordsList.forEach(word => {
    result[word] = result[word] + 1 || 1
  });
  return result;
}
