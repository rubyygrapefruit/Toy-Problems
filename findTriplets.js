function compareTriplets(a, b) {
	// 3 tries 
	var aSum = 0;
	var bSum = 0;
	for (var i = 0; i <= 3; i++) {
		if (a[i] < b[i]) {
			bSum++;
		} else if (a[i] > b[i]) {
			aSum++
		}
	}
	return [aSum, bSum]

}