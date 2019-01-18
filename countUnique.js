// with pointers
countUnique = (arr) => {
	if (arr.length === 0) {
		return 0;
	}
	let i = 0;
	for (var j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
			console.log(arr);
	}
	return i + 1;
}

// with count
countUnique = (arr) => {
	if (arr.length === 0) {
		return 0;
	}
	let count = 0;
	for (var i = 0; i < arr.length; i++) {
		let prev = arr[i];
		let next = arr[i+1];
		if (prev !== next) {
			count++
		}
	}
	return count;
}


var arr = [1,2,3,3,4,5,7,7,7,13];
var arr1 = [];
console.log(countUnique(arr));