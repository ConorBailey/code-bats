/* 
Given a non-empty string like "Code" return a string like "CCoCodCode".


stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"
*/

export function stringSplosion(str: string): string {
    let result = str;
        for (let i = 1; i < str.length; i++) {
                result = str.slice(0,str.length - i) + result
                console.log(result)
        }
    return result
}