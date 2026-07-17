/**
 * Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.


commonEnd([1, 2, 3], [7, 3]) → true
commonEnd([1, 2, 3], [7, 3, 2]) → false
commonEnd([1, 2, 3], [1, 3]) → true
 */

import { describe, expect, it } from "vitest";
import { commonEnd } from "../src/commonEnd.js";


describe("commonEnd", ()=> {
    it("should return true if they have the same first element or they have the same last element.", ()=> {
        expect(commonEnd([1, 2, 3], [7, 3])).toBe (true);
    })

    it("should return true if they have the same first element or they have the same last element.", ()=> {
        expect(commonEnd([1, 2, 3], [7, 3, 2])).toBe (false);
    })

    it("should return true if they have the same first element or they have the same last element.", ()=> {
        expect(commonEnd([1, 2, 3], [1, 3])).toBe (true);
    })

    it("should throw an error as the array can't be empty", ()=> {
        expect(()=> commonEnd([],[])).throw();
    })
})