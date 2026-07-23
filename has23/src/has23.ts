/**
 * 
Given an int array length 2, return true if it contains a 2 or a 3.


has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false
 */

export function has23(nums: number []): boolean {
    if (nums.length !== 2) {
        throw new Error("Array needs to be a length of 2")
    }

    return ((nums[0] === 2 || nums[1] === 3) || (nums[0] === 3 || nums[1] === 2) )
}