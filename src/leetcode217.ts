//217. Contains Duplicate
//Given an integer array nums, return true if any value appears at least twice in
//the array, and return false if every element is distinct.
export function containsDuplicate(nums: number[]): boolean {
    const hashSet = new Set();
    for(let num of nums){
        if(!hashSet.has(num)){
            hashSet.add(num)
        }else{
            return true
        }
    }
    return false;
};
console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,10]));
