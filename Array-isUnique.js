/* Implement an algorithm to determine if a string has all unique
characters. What if you canno tuse additional data structures?
*/

//O(N^2) TIME -- O(1) SPACE
const isUnique = (string) => {
	for (var i = 0; i < string.length; i++) {
		for (var j = i + 1; j < string.length; j++) {
			if (string[i] === string[j]) {
				return false;
			}
		}
	}
	return true;
}