function amendTheSentence(s) {
	// every time there is a capital letter, insert space 
	// change the capital letter to lower case
	// loop through the string, if any word is ABCDEFGHIJKLMNOPQRSTUVWXYZ, then insert space 
	// and convert to lower case;
	// use the same index of it to change it to the lower case letter at that same index
	let newString = s[0].toLowerCase();
	for (let i = 1; i < s.length; i++) {
		if (s[i].match(/[A-Z]/)) {
			newString += ' ' + s[i].toLowerCase();
		} else {
			newString += s[i];
		}
	}
	return newString;
}
console.log(amendTheSentence('ThisIsSunny'));