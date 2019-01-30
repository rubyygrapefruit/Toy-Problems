function sameFrequency(num1, num2) {
	let arr1 = numToArray(num1);
	let arr2 = numToArray(num2);
	let obj = {};

	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let num of arr1) {
		obj[num] = ++obj[num] || 1;
	}
	for (let num of arr2) {
		if (!obj[num]) {
			return 'false';
		} else {
			obj[num]--;
		}
	}
	return 'true';
}

function numToArray(num) {
	return num.toString().split('');
}

const sameFrequency= (num1, num2) => {
	let str1 = num1.toString();
	let str2 = num2.toString();

	if (str1.length !== str2.length) {
		return false;
	}

	let obj1 = strToObj(str1);
	let obj2 = strToObj(str2);

	for (let key in obj1) {
		if (obj2[key] !== obj1[key]) {
			return false;
		}
	}
	return true;
}

const strToObj = (str) => {
	let obj = {};
	for (var i = 0; i < str.length; i++) {
		obj[str[i]] = obj[str[i]] || 1;
	}
	return obj;
}

var num1 = 182;
var num2 = 281;
console.log(sameFrequency(num1,num2));
