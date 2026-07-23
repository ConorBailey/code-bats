/**
 * 
Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.


maxEnd3([1, 2, 3]) → [3, 3, 3]
maxEnd3([11, 5, 9]) → [11, 11, 11]
maxEnd3([2, 11, 3]) → [3, 3, 3]
 */


import { describe, expect, it } from "vitest";
import { maxEnd3 } from "../src/maxEnd3";

describe("maxEnd3", ()=> {
    it("should return an array bases on which element is larger, the first of the last", ()=> {
        expect(maxEnd3([1, 2, 3])). toStrictEqual([3, 3, 3])
    })

    it("should return an array bases on which element is larger, the first of the last", ()=> {
        expect(maxEnd3([11, 5, 9])). toStrictEqual([11, 11, 11])
    })

    it("should return an array bases on which element is larger, the first of the last", ()=> {
        expect(maxEnd3([2, 11, 3])). toStrictEqual([3, 3, 3])
    })


})