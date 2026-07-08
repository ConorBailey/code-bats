/* 
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true
*/

import {describe, expect, it} from "vitest";
import {array123} from "../src/array123";

describe("array123", ()=> {
    it("should return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.", ()=> {
        expect(array123([1, 1, 2, 3, 1])).toBe(true)
    }),

    it("should return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.", ()=> {
        expect(array123([1, 1, 2, 4, 1])).toBe(false)
    }),

    it("should return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.", ()=> {
        expect(array123([1, 1, 2, 1, 2, 3])).toBe(true)
    })
})