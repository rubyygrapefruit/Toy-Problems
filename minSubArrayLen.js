const minSubArrayLen = (arr, num) => {
	for (let i = 0; i < arr.length; i++) {
		let j = 1;
		let tempArr = arr.slice(i, j);
		let sum = findSum(tempArr);
		if (sum >= num) {
			return tempArr.length;
		} else {
			j++;
		}
	}
}

const findSum = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

var arr = [2, 0, 1, 2, 4, 3]
var num = 7;
console.log(minSubArrayLen(arr, num));