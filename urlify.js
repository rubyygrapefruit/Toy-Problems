const urlify = (string, trueLength) => {
	var newString = '';
	for (var i = 0; i < trueLength; i++) {
		if (string[i] === ' ') {
			newString += '%20';
		} else {
		newString += string[i];
		}
	}
	return newString;
}

var string = 'Mr John Smith    '; // 17
console.log(urlify(string, 13));