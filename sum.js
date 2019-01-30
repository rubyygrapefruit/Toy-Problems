const sum = (x, y) => {
	if (y !== undefined) {
		return x + y;
	} else {
		return sum2 = (y) => {
			return x + y;
		}
	}
}
console.log(sum(2)(3));