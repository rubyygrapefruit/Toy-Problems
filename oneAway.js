var oneAway = (str1, str2) => {
  //check to see if the length would be greater than 1, if ss, false
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  let isInsertion = str2.length > str1.length,
    isDeletion = !isInsertion && str1.length !== str2.length,
    isEdited = false,
    i,
    x;

  for (i = x = 0; i < str1.length && x < str2.length; i++, x++) {
    if (str1[i] !== str2[x]) {
      if (isEdited) {
        return false;
      }
      if (isInsertion) {
        i--;
      } else if (isDeletion) {
				x--;
      }
      isEdited = true;
    }
  }
  return true;
};

var str1 = 'pale';
var str2 = 'ple';
console.log(oneAway(str1, str2));
