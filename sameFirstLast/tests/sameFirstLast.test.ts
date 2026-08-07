/**
 * 
Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.


sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true
 */

import { describe, expect, it } from "vitest";
import { sameFirstLast } from "../src/sameFirstLast.js";

describe("sameFirstLast", ()=> {
    it("should return true if the array length is more than 1 and the first and last element is the same.", ()=> {
        expect(sameFirstLast([1, 2, 3])).toBe(false);
    })

    it("should return true if the array length is more than 1 and the first and last element is the same.", ()=> {
        expect(sameFirstLast([1, 2, 3, 1])).toBe(true);
    })

    it("should return true if the array length is more than 1 and the first and last element is the same.", ()=> {
        expect(sameFirstLast([1, 2, 1])).toBe(true);
    })

    it("should throw an error if the array is empty", ()=> {
        expect(()=> sameFirstLast([])).toThrow();
    })

})