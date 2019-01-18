// naive solution o(n^2) beacuse of the for loop and indexOf loop
const same = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		console.log(arr2);
		arr2.splice(correctIndex, 1);
	}
	return true;
}


const same = (arr1, arr2) => {
	let obj = {};
	if (arr1.length !== arr2.length) return false;
	for (let num of arr2) {
		obj[num] = ++obj[num] || 1;
	}
	console.log(obj);
	for (let num of arr1) {
		if (obj[num] === 0) {
			return false;
		}
		if (arr1[num] ** 2 === obj[num]) {
			obj[key]--;
		}
		return true;
	}


	const same = (arr1, arr2) => {
		let newArr1 = [];
		let obj1 = {};
		let obj2 = {};
		for (let num of arr1) {
			newArr1.push(Math.pow(num, 2));
		}
		for (let num of newArr1) {
			obj1[num] = ++obj1[num] || 1;
		}
		for (let num of arr2) {
			obj2[num] = ++obj2[num] || 1;
		}
		for (var key in obj2) {
			if (!obj1[key]) {
				return false;
			}
			if (obj2[key] !== obj1[key]) {
				return false;
			}
		}
		return true;
	}

	// linear complexity, 3n = o(n);
	const same = (arr1, arr2) => {
		let obj1 = {};
		let obj2 = {};
		for (let num of arr1) {
			obj1[num] = ++obj1[num] || 1;
		}
		for (let num of arr2) {
			obj2[num] = ++obj2[num] || 1;
		}
		for (var key in obj1) {
			if (!(key ** 2 in obj2)) {
				return false;
			}
			if (obj1[key] !== obj2[key]) {
				return false;
			}
		}
		return true;
	}
}



var arr1 = [1, 1, 2, 5, 4];
var arr2 = [1, 1, 4, 16, 27];
console.log(same(arr1, arr2));