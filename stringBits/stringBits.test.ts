/*

Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".


stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello"

*/
import { describe, expect, it } from "vitest";
import { stringBits } from "./stringBits";

describe("stringBits", ()=> {
    it("Should return a new string made of every other char starting with the first", ()=> {
        expect(stringBits("Hello")).toBe("Hlo")})
        
    it("Should return a new string made of every other char starting with the first", ()=> {
        expect(stringBits("Hi")).toBe("H")})

    it("Should return a new string made of every other char starting with the first", ()=> {
        expect(stringBits("Heeololeo")).toBe("Hello")})
        
})