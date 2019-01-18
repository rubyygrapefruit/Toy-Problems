const sameAnagram = (a, b) => {
	if (a === '' && b === '') {
		return true;
	}
	let obj1 = {};
	let obj2 = {};
	if (a.length !== b.length) {
		return false;
	}
	for (let char of a) {
		obj1[char] = ++obj1[char] || 1;
	}
	for (let char of b) {
		obj2[char] = ++obj2[char] || 1;
	}
	for (let key in obj2) {
		if (obj2[key] !== obj1[key]) {
			return false;
		}
	}
	return true;
}

const sameAnagram = (a, b) => {
	if (a === '' && b === '') {
		return true;
	}
	let obj = {};
	if (a.length !== b.length) {
		return false;
	}
	for (let char of a) {
		console.log(obj);
		obj[char] = ++obj[char] || 1;
	}
	for (let char of b) {
		if (!obj[char]) {
			return false;
		} else {
			obj[char]--;
		}
	}
	return true;
}


var a = 'tac ocat';
var b = 'cat taco';
var str3 = 'me too';
var str4 = 'hi you';

console.log(sameAnagram(a, b));
console.log(sameAnagram(str3, str4));