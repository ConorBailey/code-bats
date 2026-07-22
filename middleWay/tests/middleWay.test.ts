/**
 * 
Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.


middleWay([1, 2, 3], [4, 5, 6]) → [2, 5]
middleWay([7, 7, 7], [3, 8, 0]) → [7, 8]
middleWay([5, 2, 9], [1, 4, 5]) → [2, 4]
 */


import { describe, expect, it } from "vitest";
import { middleWay } from "../src/middleWay.js";

describe("middleWay", ()=> {
    it("should return a new array with the middle element of each array", ()=> {
        expect(middleWay([1, 2, 3], [4, 5, 6])).toStrictEqual([2, 5])
    })

    it("should return a new array with the middle element of each array", ()=> {
        expect(middleWay([7, 7, 7], [3, 8, 0])).toStrictEqual([7, 8])
    })

    it("should return a new array with the middle element of each array", ()=> {
        expect(middleWay([5, 2, 9], [1, 4, 5])).toStrictEqual([2, 4])
    })

    it("should throw an error for incorrent Array length", ()=> {
        expect(()=> middleWay([],[1, 2, 3])).toThrow()
    })

    it("should throw an error for incorrent Array length", ()=> {
        expect(()=> middleWay([1, 2, 3],[])).toThrow()
    })
})