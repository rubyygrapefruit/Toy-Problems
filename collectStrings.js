function collectStrings(obj) {
	let newArr = [];
	for (let key in obj) {
		if (typeof obj[key] === 'string') {
			newArr.push(obj[key]);
		} else if (typeof obj[key] === 'object') {
			newArr = newArr.concat(collectStrings(obj[key]));
		}
	}
	return newArr;
}


const obj = {
	stuff: "foo",
	data: {
		val: {
			thing: {
				info: "bar",
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: "baz"
					}
				}
			}
		}
	}
}

console.log(collectStrings(obj));