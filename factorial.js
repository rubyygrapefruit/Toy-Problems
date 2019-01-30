const factorial= (num) => {
	if (num === 1 || !num) return 1;
	return num * factorial(num - 1);
}