/**
 * 
Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.


sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true
 */

export function sameFirstLast( nums: number[] ) : boolean {
    if (nums.length === 0) {
        throw new Error("Array cant be empty!");
    }

    return (nums[0] === nums[nums.length - 1])
}