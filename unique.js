const uniqueSort = (arr) => {
	let result = [];
	let obj = {};
	for (var i = 0; i < arr.length; i++) {
		if (obj[arr[i]] === undefined) {
			obj[arr[i]] = 1;
		} else {
			obj[arr[i]] += 1;
		}
	}
	for (var key in obj) {
		result.push(Number(key));
	}
	return result;
}

var arr = [1, 6, 2, 3, 3, 2];
console.log(uniqueSort(arr));