var hashPatterns = (str1, str2) => {
	str1 = str1.split(', ');
	str2 = str2.split(', ');
	if (str1.length !== str2.length) {
		return false;
	}
	var obj1 = {};
	var obj2 = {};
	for (var i = 0; i < str1.length; i++) {
		if (obj1[str1[i]] === undefined) {
			obj1[str1[i]] = 1;
		} else {
			obj1[str1[i]]+=1;
		}
		if (obj2[str2[i]] === undefined) {
			obj2[str2[i]] = 1;
		} else {
			obj2[str2[i]]+=1;
		}
	}
	console.log(obj1);
	console.log(Object.values(obj1));
	return Object.values(obj1).toString() === Object.values(obj2).toString();
}

var str1 = 'cat, cat, dog';
var str2 = 'a, a, b';
console.log(hashPatterns(str1, str2));