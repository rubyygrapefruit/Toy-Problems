function maxSubarraySum(arr, num){
  if (arr.length === 0 || num > arr.length) return null;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
      maxSum += arr[i];
  }
  for (let i = num; i < arr.length; i++) {
			let tempSum = maxSum - arr[i - num] + arr[i];
			console.log(maxSum, tempSum)
      maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

var arr = [1,10,4,9,200,2,0];
var num = 3;
console.log(maxSubarraySum(arr, num));