const areThereDuplicates = (a, b, c, d, e) => {
	let obj = {};

	for (let i of arr) {
		obj[i] = ++obj[i] || 1;
	}
	for (let key in obj) {
		if (obj[key] > 1) {
			return false;
		}
	}
	return true;
}

const areThereDuplicates = (...args) => {
	args.sort((a, b) => a - b);

	let i = 0;
	for (var j = 1; j < arr.length; j++) {
		if (arr[i] === arr[j]) {
			return true;
		} else {
			i++;
		}
	}
	return false;
}



function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
var a = 5;
var b = 2;
var c = 3;
var d = 1;
var e = 4;
console.log(areThereDuplicates(a, b, c, d, e));

// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}