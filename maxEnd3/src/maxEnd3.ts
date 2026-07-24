export function maxEnd3(nums: number[]): number[] {
    const newArray: number[] = [];

    if (nums[0]! > nums[2]! ) {
        for(let i = 0; i < nums.length; i++) {
            newArray.push(nums[0]!)
        }
        return newArray
    }
    for(let i = 0; i < nums.length; i++) {
            newArray.push(nums[2]!)
        }
        return newArray
}