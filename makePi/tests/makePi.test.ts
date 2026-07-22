/**
 * Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.


makePi() → [3, 1, 4]
 */

import { describe, expect, it } from "vitest";
import { makePi } from "../src/makePi.js";

describe ( "makePi", ()=> {
    it("should return the first three numbers of pi without the decimal point", ()=> {
        expect(makePi()).toStrictEqual([3,1,4])
    })

    
})