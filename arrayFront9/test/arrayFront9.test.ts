/* 
Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.


arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false
*/

import {describe, expect, it} from "vitest";
import {arrayFront9} from "../src/arrayFront9"

describe("arrayFront9", ()=> {
    it("should return true if one of the first 4 elements in the array is a 9", ()=> {
        expect(arrayFront9([1, 2, 9, 3, 4])).toBe(true)
    })

    it("should return true if one of the first 4 elements in the array is a 9", ()=> {
        expect(arrayFront9([1, 2, 3, 4, 9])).toBe(false)
    })

    it("should return true if one of the first 4 elements in the array is a 9", ()=> {
        expect(arrayFront9([1, 2, 3, 4, 5])).toBe(false)
    })
})