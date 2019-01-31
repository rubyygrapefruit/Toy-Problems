function sum() {
	var sum = 0; 
	for (var num of arguments) {
		sum += num;
	}
	return sum;
}

sum(1,2,3,4,5,6,7);
sum(10,20,30);