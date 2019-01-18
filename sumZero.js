// make sure it's sorted
const sumTwoZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
		let sum = arr[left] + arr[right];
		console.log(sum);
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
	}
	return undefined;
}
var b = [-4, -3, -2, -1, 0, 1, 2, 3, 6];
console.log(sumTwoZero(b));
