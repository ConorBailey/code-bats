export function firstLast6(nums: number []): boolean {
    if (nums[0] === 6 || nums[nums.length - 1] === 6) {
        return true;
    }
    return false;
}