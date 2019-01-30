function power(x, y) {
	if (!y) return 1;
	if (y === 1) return x;
	return x * power(x, y - 1);
}