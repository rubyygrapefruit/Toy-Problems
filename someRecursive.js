function someRecursive(arr, fn) {
	if (arr.length === 0) return false;
	if (fn(arr[0])) {
		return true;
	}
	return someRecursive(arr.slice(1), fn);
}

const isOdd = (value) => {
	return value % 2 !== 0;
}
console.log(isOdd(3));
console.log(someRecursive([12, 2, 3, 4], isOdd));