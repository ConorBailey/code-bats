import {describe, expect, it } from 'vitest'
import { countXX } from './countXX';

/* 

Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".


countXX("abcxx") → 1
countXX("xxx") → 2
countXX("xxxx") → 3

*/

describe('countXX', () => {
    it('should count occurrences of "xx" in a string', () => {
        expect(countXX("abcxx")).toBe(1);
        expect(countXX("xxx")).toBe(2);
        expect(countXX("xxxx")).toBe(3);
        expect(countXX("abc")).toBe(0);
    });
});