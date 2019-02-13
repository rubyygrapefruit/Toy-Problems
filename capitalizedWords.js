function capitalizeWords (arr) {
  let newArr = [];
  function helper(word) {
      return word.toUpperCase();
  }
  for (let word of arr) {
      let capWord = helper(word);
      newArr.push(capWord);
  }
  return newArr;
}