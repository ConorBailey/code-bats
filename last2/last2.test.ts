/* 

Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).


last2("hixxhi") → 1
last2("xaxxaxaxx") → 1
last2("axxxaaxx") → 2
*/




import { describe, expect, it} from "vitest";
import { last2 } from "./last2";

describe ("last2", () => {
    it("should return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string", () => {
        expect(last2("hixxhi")).toBe(1)
    })

    it("should return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string", () => {
        expect(last2("xaxxaxaxx")).toBe(1)
    })

    it("should return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string", () => {
        expect(last2("axxxaaxx")).toBe(2)
    })
})