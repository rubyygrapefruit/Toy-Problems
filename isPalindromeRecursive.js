function isPalindrome(str) {
	if (str === '') return null;

	function helper(str) {
		if (str.length <= 1) return str;
		return helper(str.slice(1)) + str[0];
	}
	let reverse = helper(str);
	if (reverse === str) {
		return true;
	}
	return false;
}

console.log(isPalindrome('racecar'));