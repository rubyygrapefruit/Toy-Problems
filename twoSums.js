/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const twoSums = (nums, target) => {
	let lookUp = {};
	for (var i = 0; i < nums.length; i++) {
		const difference = target - nums[i];
		if (difference in lookUp) {
			return [lookUp[difference], i]
		}
		lookUp[nums[i]] = i;
	}
	return 'no pair found';
}

let nums = [3,2,4];
let target = 6;
console.log(twoSums(nums, target));


