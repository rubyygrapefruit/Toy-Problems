function isValid(s) {
	let obj1 = countObj(s);
	let array = Object.values(obj1);
	console.log(array);
	let obj2 = countObj(array);
	let majority;
	console.log(obj2);
	if (Object.keys(obj2).length > 2) {
		return 'NO';
	}
	for (var key in obj2) {
		if (obj2[key] === array.length - 1) {
			majority = key;
		}
		if (key - majority ===1) {
				return 'YES'
			}
		}
		console.log(majority);
}

function countObj(x) {
	let obj = {};
	for (let i = 0; i < x.length; i++) {
		if (obj[x[i]] === undefined) {
			obj[x[i]] = 1;
		} else {
			obj[x[i]]++;
		}
	}
	return obj;
}

var s = 'abcdefghhgfedecba';
console.log(isValid(s));