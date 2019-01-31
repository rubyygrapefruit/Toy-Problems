// dyanmic programming
var fib = (n) => {
	var array = [0, 1];
	if (n === 0) {
		return 0
	}
	if (n === 1) {
		return 1
	}
	for (var i = 2; i <= n; i++) {
		array.push(array[i - 2] + array[i - 1])
}
	return array[n]// return fib(n - 2) + fib(n - 1 );
}
console.log(fib(100));

function fib(n) {
	if (n <= 2) return 1;
	return fib(n-1) + fib(n-2);
}