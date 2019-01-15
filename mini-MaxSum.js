function miniMaxSum(arr) {
	let minSum = 0;
	let maxSum = 0;
	let sortedArr = arr.sort((a, b) => {
			return a - b;
	});
	for (var i = 0; i < arr.length - 1; i++) {
			minSum += sortedArr[i];
	}
	for (var i = 1; i < arr.length; i++) {
			maxSum += sortedArr[i];
	}
	console.log(minSum + ' ' + maxSum);
}
var arr = [7, 69, 2, 221, 8974];
console.log(miniMaxSum(arr)); // 299 9271