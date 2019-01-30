function recursiveRange(num){
	if (num === 1 || !num) return 1;
	return num + recursiveRange(num -1);
}

