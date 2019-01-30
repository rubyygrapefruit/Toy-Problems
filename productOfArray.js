function productOfArray(arr) {
	let product = 1;

	function helper(newArr) {
		if (newArr.length === 0) {
			return;
		}
		product *= newArr[0];
		helper(newArr.slice(1));
	}
	helper(arr);
	return product;
}

console.log(productOfArray([1, 2, 3]));