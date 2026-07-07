/* 
Given an array of ints, return the number of 9's in the array.


arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
*/



import {describe, expect, it } from "vitest";
import { arrayCount9} from "./arrayCount9";

describe("arrayCount9", () => {
    it("should return the number of 9's in the array", ()=> {
        expect(arrayCount9([1, 2, 9])).toBe(1)
    })

    it("should return the number of 9's in the array", ()=> {
        expect(arrayCount9([1, 9, 9])).toBe(2)
    })

    it("should return the number of 9's in the array", ()=> {
        expect(arrayCount9([1, 9, 9, 3, 9])).toBe(3)
    })
})