/**
 * Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2,
 *  just sum up the elements that exist, returning 0 if the array is length 0.


sum2([1, 2, 3]) → 3
sum2([1, 1]) → 2
sum2([1, 1, 1, 1]) → 2
 */

import { describe, expect, it } from "vitest";
import { sum2 } from "../src/sum2";

describe("sum2", ()=> {
    it("should return the sum of the first 2 elements in the array", ()=> {
        expect(sum2([1, 2, 3])).toStrictEqual(3);
    })

    it("should return the sum of the first 2 elements in the array", ()=> {
        expect(sum2([1, 1])).toStrictEqual(2);
    })

    it("should return the sum of the first 2 elements in the array", ()=> {
        expect(sum2([1, 1, 1, 1])).toStrictEqual(2);
    })

    it("should return 0 as the array length is 0", ()=> {
        expect(sum2([])).toBe(0)
    })
})