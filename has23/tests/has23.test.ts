/**
 * 
Given an int array length 2, return true if it contains a 2 or a 3.


has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false
 */


import {describe, expect, it } from "vitest";
import { has23 } from "../src/has23.js"

describe("has23", ()=> {
    it("should return true if it contains a 2 or a 3", ()=> {
        expect(has23([2, 5])).toBe(true);
    })

    it("should return true if it contains a 2 or a 3", ()=> {
        expect(has23([4, 3])).toBe(true);
    })

    it("should return true if it contains a 2 or a 3", ()=> {
        expect(has23([4, 5])).toBe(false);
    })

    it("should throw an error as the array cant be empty", ()=> {
        expect(()=> has23([])).toThrow()
    })
} ) 