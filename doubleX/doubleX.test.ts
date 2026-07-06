/*

Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".


doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true

*/
import { describe, expect, it } from "vitest";
import { doubleX } from "./doubleX";

describe("doubleX", () => {
    it("should return true for 'axxbb'", () => {
        expect(doubleX("axxbb")).toBe(true);
    });

    it("should return false for 'axaxax'", () => {
        expect(doubleX("axaxax")).toBe(false);
    });

    it("should return true for 'xxxxx'", () => {
        expect(doubleX("xxxxx")).toBe(true);
    });
});