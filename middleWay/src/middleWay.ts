/**
 * it("should return a new array with the middle element of each array", ()=> {
        expect(middleWay([1, 2, 3], [4, 5, 6])).toStrictEqual([2, 5])
    })
 */

export function middleWay(a: number[], b: number[]): number[] {
  const newArray: number[] = [];

  if (a.length !== 3 || b.length !== 3) {
    throw new Error("Array length needs to be 3")
  }
  newArray.push(a[1]!);
  newArray.push(b[1]!);

  return newArray;
}
