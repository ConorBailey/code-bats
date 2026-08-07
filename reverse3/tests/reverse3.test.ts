/**
 * Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.


reverse3([1, 2, 3]) → [3, 2, 1]
reverse3([5, 11, 9]) → [9, 11, 5]
reverse3([7, 0, 0]) → [0, 0, 7]
 */

import {describe, expect, it } from "vitest";
import { reverse3 } from "../src/reverse3.js"

describe("reverse3", ()=> {
    it("should return a new array with the elements in reverse order", ()=> {
        expect(reverse3([1, 2, 3])).toStrictEqual([3, 2, 1])
    })

    it("should return a new array with the elements in reverse order", ()=> {
        expect(reverse3([5, 11, 9])).toStrictEqual([9, 11, 5])
    })

    it("should return a new array with the elements in reverse order", ()=> {
        expect(reverse3([7, 0, 0])).toStrictEqual([0, 0, 7])
    })

    it("should throw an error as the array cant be empty", ()=> {
        expect(()=> reverse3([])).toThrow()
    })


})