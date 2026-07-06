//1. Two Sum
//Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one
// solution, and you may not use the same element twice.
//You can return the answer in any order.
function twoSum(nums: number[], target: number): number[] {
    const seenNumbers = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seenNumbers.has(complement)) {
            return [seenNumbers.get(complement)!, i];
        }
        seenNumbers.set(nums[i], i);
    }
    return [];
}
console.log(twoSum([2, 4, 6], 10));
