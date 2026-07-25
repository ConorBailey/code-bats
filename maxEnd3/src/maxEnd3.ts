export function maxEnd3(nums: number[]): number[] {
  const maxValue = nums[0]! > nums[2]! ? nums[0]! : nums[2]!;

  return Array(3).fill(maxValue);
}
