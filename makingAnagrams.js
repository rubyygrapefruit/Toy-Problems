process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


/////////////// ignore above this line ////////////////////

function main() {
	var a = readLine();
	var b = readLine();
	
	console.log(countDeletions(a, b));
	
	function countDeletions(a, b) {
			charCount = {};
			var deletionCount = 0;
			var char;
			var count;
			for (var i = 0; i < a.length; i++) {
					char = a[i];
					count = charCount[char];
					if (count) {
							charCount[char] += 1;
					} else {
							charCount[char] = 1;
					}
			}
			
			for (var i = 0; i < b.length; i++) {
					char = b[i];
					count = charCount[char];
					if (count === undefined || count === 0) {
							deletionCount += 1;
					} else {
							charCount[char] -= 1;
					}
			}
			
			for (char in charCount) {
					if (charCount.hasOwnProperty(char)) {
							if (charCount[char] > 0) {
									deletionCount += charCount[char];
							}
					}
			}
			return deletionCount;
	}

}
var a = 'fcrxzwscanmligyxyvym';
var b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
console.log(main(a, b)); // 30
// function makeAnagram(a, b) {
	
// 	let obj1 = {};
// 	let obj2 = {};
// 	let count = 0;
// 	let long = a.length > b.length ? a : b;
// 	let short = long === b ? a : b;
// 	for (let i = 0; i < short.length; i++) {
// 		if (obj1[short[i]] === undefined) {
// 			obj1[short[i]] = 1;
// 		} else {
// 			obj1[short[i]] += 1;
// 		}
// 	}
// 	for (let i = 0; i < long.length; i++) {
// 		if (obj2[long[i]] === undefined) {
// 			obj2[long[i]] = 1;
// 		} else {
// 			obj2[long[i]] += 1;
// 		}
// 	}
// 	console.log(obj1);
// 	console.log(obj2);
// 	for (var key in obj2) {
// 		// alike letter's values are the same
// 		if (obj1[key]) {
// 			// if exists
// 			count += Math.abs(obj2[key] - obj1[key]);
// 			console.log(count);
// 		} else {
// 			count += obj2[key];
// 		}
// 	}
// 	for (var key in obj1) {
// 		if (!obj2[key]) {
// 			count += obj1[key];
// 		}
// 	}
// 	return count;
// }

var a = 'fcrxzwscanmligyxyvym';
var b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
console.log(makeAnagram(a, b)); // 30
// 	let obj = {};
// 	let count = 0;
// 	// let long,
// 	// 	short;
// 	// if (a.length > b.length) {
// 	// 	long = a;
// 	// 	short = b;
// 	// } else {
// 	// 	long = b;
// 	// 	short = a;
// 	// }
// 	let long = a.length > b.length ? a : b;
//   let short = long === b ? a : b;
// 	for (let i = 0; i < short.length; i++) {
// 		if (obj[short[i]] === undefined) {
// 			obj[short[i]] = 1;
// 		} else {
// 			obj[short[i]] += 1;
// 		}
// 	}
// 	for (let i = 0; i < long.length; i++) {
// 		if (obj[long[i]] === undefined) {
// 			obj[long[i]] = 1;
// 		} else {
// 			obj[long[i]] += 1;
// 		}
// 	}
// 	console.log(obj);
// 	for (var key in obj) {
// 		if (obj[key] % 2 !== 0) {
// 			count++
// 		}
// 	}
// 	return count;
// }