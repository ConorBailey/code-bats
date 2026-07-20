/**
 * 
Given an array of ints length 3, return the sum of all the elements.


sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7
 */

export function sum3(nums: number[]): number {
    let total = 0;      

    if (nums.length < 3) {
        throw new Error("array has to be a length of 3");
    }
    
    for(const num of nums) {
        total += num;
    }
    return total;
}