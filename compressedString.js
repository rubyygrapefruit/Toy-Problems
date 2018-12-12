// input: aaaabbbccaa -> a4b3c2a2
// input: abcde -> abcde & not a1b2c1d1e1

// define compressed = ''
// define currentCount = ''
// define currChar = '';
// for variable at index i 
// if the currChar does not equal next char
// compressed will equal the currChar plus the currCount
// currChar will now be next char in string 
// currCount will now be 1

// if the currChar is the same as next Char
// increase the currentCount 

// once it breaks out of for loop
// compressed will equal the curr Char plus currCount 

// return the shortest length string whether it be compressed or original string

const compressedString = string => {
	let compressed = '',
		currCount = '',
		currChar = '';

	 	for (let i = 0; i < string.length; i++) {
			if (currChar !== string[i]) {
				// c !=== a
				compressed += currChar + currCount;
				// a4b3c2
				currChar = string[i];
				// currChar = a;
				currCount = 1;
			} else {
				currCount++;
				// currCount = 2;
			}
		}
	compressed += currChar + currCount
	// a4b3c2a2
	return compressed.length > string.length ? string : compressed;
}

var string = 'abcde';
console.log(compressedString(string))