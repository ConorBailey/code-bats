/**
 * Given an array of ints, return a new array length 2 containing the first and last elements from the original array.
 * The original array will be length 1 or more.


makeEnds([1, 2, 3]) → [1, 3]
makeEnds([1, 2, 3, 4]) → [1, 4]
makeEnds([7, 4, 6, 2]) → [7, 2]
 */

import { describe, expect, it } from "vitest";
import { makeEnds, makeEndsV2 } from "../src/makeEnds";

describe("makeEnds", () => {
  it("should return a new array length 2 containing the first and last elements from the original array.", () => {
    expect(makeEnds([1, 2, 3])).toStrictEqual([1, 3]);
  });

  it("should return a new array length 2 containing the first and last elements from the original array.", () => {
    expect(makeEnds([1, 2, 3, 4])).toStrictEqual([1, 4]);
  });

  it("should return a new array length 2 containing the first and last elements from the original array.", () => {
    expect(makeEnds([7, 4, 6, 2])).toStrictEqual([7, 2]);
  });
});

describe("makeEndsV2", () => {
  it("should return a new array length 2 containing the first and last elements from the original array.", () => {
    expect(makeEnds([1, 2, 3])).toStrictEqual([1, 3]);
  });

  it("should return a new array length 2 containing the first and last elements from the original array.", () => {
    expect(makeEnds([1, 2, 3, 4])).toStrictEqual([1, 4]);
  });

  it("should return a new array length 2 containing the first and last elements from the original array.", () => {
    expect(makeEnds([7, 4, 6, 2])).toStrictEqual([7, 2]);
  });
});
