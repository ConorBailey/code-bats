/* 
Given a non-empty string like "Code" return a string like "CCoCodCode".


stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"
*/

import {describe, it, expect} from "vitest";
import { stringSplosion } from "./stringSplosion";

describe("stringSplosion", ()=> {
    it("Should remove a char from the original string and add it to the beginning of original string", ()=> {
        expect(stringSplosion("Code")).toBe("CCoCodCode")})

        it("Should remove a char from the original string and add it to the beginning of original string", ()=> {
        expect(stringSplosion("abc")).toBe("aababc")})

        it("Should remove a char from the original string and add it to the beginning of original string", ()=> {
        expect(stringSplosion("ab")).toBe("aab")})
    })