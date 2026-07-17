/**
 * Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.


makePi() → [3, 1, 4]
 */

export function makePi(): number[] {
    const first3 = Math.PI.toString().replace('.', '').slice(0,3).split("").map(Number);
    if (first3.length != 3 ){ 
         throw new Error("Array needs to be length 3")
    }
   
    return first3;
}