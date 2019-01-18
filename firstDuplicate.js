function firstDuplicate(a) {
	let object = {};
	for (char of a) {
		object[char] = ++object[char] || 1;
	}
	if (object[char] === 2) {
			return char;
	}
	return -1;
}
var a = ['a','b','c'];
console.log(firstDuplicate(a));
// function firstDuplicate(a) {
// 	let object = {};
// 	for (let i = 0; i < a.length; i++) {
// 		if (object[a[i]] === undefined) {
// 			object[a[i]] = 1
// 		} else {
// 			object[a[i]] += 1
// 		}
// 		if (object[a[i]] === 2) {
// 			return a[i];
// 		}
// 	}
// 	return -1
// }