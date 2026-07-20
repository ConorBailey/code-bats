/**
 * 
Given an array of ints length 3, return the sum of all the elements.


sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7
 */

import {describe, expect, it } from "vitest"; 
import { sum3 } from "../src/sum3.js";

describe("sum3", ()=> {
    it("should return the sum of all the elements in the array", ()=> {
        expect(sum3([1, 2, 3])).toBe(6);
    })

    it("should return the sum of all the elements in the array", ()=> {
        expect(sum3([5, 11, 2])).toBe(18);
    })

    it("should return the sum of all the elements in the array", ()=> {
        expect(sum3([7, 0, 0])).toBe (7);
    })

    it("should throw an error as the array cant be empty", ()=> {
        expect(()=> sum3([])).toThrow();
    })
})