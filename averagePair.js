const averagePair = (arr, avg) => {
	if (arr.length === 0) {
		return false;
	}
	let target = avg * 2;
	let lower = 0;
	let higher = arr.length - 1;
	while (lower < higher){
		let sum = arr[lower] + arr[higher];
		if (sum === target) {
			return true;
		} else if (sum > target) {
			higher--;
		} else {
			lower++;
		}
	}
	return false;
}
var avg = 8;
var arr = [1,3,3,5,6,7,10,12,19];
console.log(averagePair(arr, avg));