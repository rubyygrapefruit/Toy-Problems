//naive solution
const subArrayMaxSum = (arr, n) => {
	if (n > arr.length) return null;
	let max = -Infinity;
	for (var i = 0; i < arr.length - n + 1; i++ ) {
		let temp = 0;
		for (var j = 0; j < n; j++) {
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
		console.log(temp, max);
	} return max;
}

// linear complexitity
const subArrayMaxSum = (arr, n) => {
	if (n > arr.length) return null;
	let maxSum = 0;
	let tempSum = 0;
	for (var i = 0; i < n; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum; // 7
	for (let i = n; i < arr.length; i++) {
		tempSum = tempSum - arr[i - n] + arr[i];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

var arr = [1, 1, 5, 6, 10, 2, 3];
var n = 4;
console.log(subArrayMaxSum(arr, n)); // 23