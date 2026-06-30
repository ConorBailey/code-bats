export function countXX(str: string): number {
    let count = 0;

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] == 'x' && str[i + 1] == 'x') {
            count++;
        }
    }
    return count;
}