/*
Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.

stringMatch("xxcaazz", "xxbaaz") → 3
stringMatch("abc", "abc") → 2
stringMatch("abc", "axc") → 0
*/

import {describe, it, expect} from "vitest";
import {stringMatch} from "../src/stringMatch";

describe("stringMatch", ()=> {
    it("should return the number of the positions where they contain the same length 2 substring.", ()=> {
        expect(stringMatch("xxcaazz", "xxbaaz")).toBe(3)
    }),

    it("should return the number of the positions where they contain the same length 2 substring.", ()=> {
        expect(stringMatch("abc", "abc")).toBe(2)
    }),

    it("should return the number of the positions where they contain the same length 2 substring.", ()=> {
        expect(stringMatch("abc", "axc")).toBe(0)
    })
})