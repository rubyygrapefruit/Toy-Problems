const countChars = (str) => {
	let obj = {};
	for (char of str) {
		if (char.match(/[a-z0-9]/)) {
			char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
			}
		}
	return obj;
}

// if (isAlphaNumeric(char))...

const isAlphaNumeric = (char) => {
	let code = char.charCodeAt(0);
	if (!(code > 47 && code < 58) && // numeric (0-9)
			!(code > 64 && code < 91) && // A - Z
			!(code > 96 && code < 123)) { // a-z
				return false;
			}
			return true;
}


const countChars = (str) => {
	let obj = {};
	for (var i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();
		if (char.match(/[a-z0-9]/)) {
			if (obj[char] > 0) {
				obj[char]++;
			} else {
				obj[char] = 1;
			}
		}
	}
	return obj;
}

var str = "Hi I'm so excited to be here! 123456 PIN";
console.log(countChars(str));