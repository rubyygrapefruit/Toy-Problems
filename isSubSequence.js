function isSubsequence(str1, str2) {
	if (str2.length < str1.length || str1 === '' || str2 === '') {
		return false;
	}
	let arr = str1.split('');
	let i = 0;
	for (var j = 0; j < str2.length; j++) {
		if (arr[i] === str2[j]) {
			arr.shift();
		}
		if (arr.length === 0) {
			return true;
		}
	}
	return false;
}

function isSubsequence(str1, str2) {
	if (str2.length < str1.length || str1 === '' || str2 === '') {
		return false;
	}
	let i = 0;
	for (var j = 0; j < str2.length; j++) {
		if (str1[i] === str2[j]) i++;
		if (i === str1.length) return true;
	}
	return false;
}

//isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}

var str1 = 'hello';
var str2 = 'hello world';
console.log(isSubsequence(str1, str2));