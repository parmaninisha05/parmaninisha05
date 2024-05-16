function filter(word) {
  return word && word.length === 6;
}
function myFilterFunction(words, filter) {
  filteredWords = [];
  words.forEach((word) => {
    if (filter(word)) {
      filteredWords.push(word);
    }
  });
  return filteredWords;
}
// Testing the higher order function
const words = ["London", "Cambridge", "Glasgow", "Oxford"];
console.log(myFilterFunction(words, filter));
