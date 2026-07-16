export function firstLast6(nums: number []): boolean {
    if (nums.length === 0 ) {
        throw new Error("Array can not be empty");
    } else

    return (nums[0] === 6 || nums[nums.length - 1] === 6)
}