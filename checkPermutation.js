const sort = (str1, str2) => {
	// base case: see if lengths match first 
	if (str1.length !== str2.length) {
		return false;
	}
	var obj1 = {};
	var obj2 = {}
	for (var i = 0; i < str1.length; i++) {
		if (obj1[str1[i]] === undefined) {
			obj1[str1[i]] = 1
		} else {
			obj1[str1[i]] += 1
		}
		if (obj2[str2[i]] === undefined) {
			obj2[str2[i]] = 1
		} else {
			obj2[str2[i]] += 1
		}
	}
	for (var key in obj1) {
		if (!obj2[key] || obj2[key] !== obj1[key]) {
			return false;
		}
	}
	return true;
}

var word1 = "tab";
var word2 = "cab";
console.log(sort(word1, word2));