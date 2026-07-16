/**
 * Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
 * firstLast6([1, 2, 6]) → true
 * firstLast6([6, 1, 2, 3]) → true
 * firstLast6([13, 6, 1, 2, 3]) → false
 */

import {describe, expect, it } from "vitest";
import { firstLast6 } from "../src/firstLast6";

describe("firstLast6", ()=> {
    it("should return true if the first or last number in the array is a 6", ()=> {
        expect(firstLast6([1, 2, 6])).toBe(true);
    })

    it("should return true if the first or last number in the array is a 6", ()=> {
        expect(firstLast6([6, 1, 2, 3])).toBe(true);
    })

    it("should return true if the first or last number in the array is a 6", ()=> {
        expect(firstLast6([13, 6, 1, 2, 3])).toBe(false);
    })
})