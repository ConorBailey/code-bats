/**
 * Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.


rotateLeft3([1, 2, 3]) → [2, 3, 1]
rotateLeft3([5, 11, 9]) → [11, 9, 5]
rotateLeft3([7, 0, 0]) → [0, 0, 7]
 */

import { describe, expect, it } from "vitest";
import { rotateLeft3 }  from "../src/rotateLeft3.js";

describe("rotateLeft3", ()=> {
    it("should return the array with the elements 'rotated left' so {1, 2, 3} yeilds {3, 2, 1}", ()=> {
        expect(rotateLeft3([1, 2, 3])).toStrictEqual([2, 3, 1]);
    })

    it("should return the array with the elements 'rotated left' so {1, 2, 3} yeilds {3, 2, 1}", ()=> {
        expect(rotateLeft3([5, 11, 9])).toStrictEqual([11, 9, 5]);
    })

    it("should return the array with the elements 'rotated left' so {1, 2, 3} yeilds {3, 2, 1}", ()=> {
        expect(rotateLeft3([7, 0, 0])).toStrictEqual([0, 0, 7]);
    })

    it("should throw and error if the array is empty", ()=> {
        expect(()=> rotateLeft3([])).throw();
    })


})