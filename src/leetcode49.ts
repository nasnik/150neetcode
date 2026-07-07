export function groupAnagrams(strs: string[]): string[][] {
    const hash: Record<string, string[]> = {};
    let alphabet:string = 'abcdefghijklmnopqrstuvwxyz';
    for (const word of strs) {
        const schema: number[] = new Array(26).fill(0);
        for (let i = 0; i < word.length; i++) {
            const index = alphabet.indexOf(word[i]);
            schema[index]++;
        }
        const key = schema.join(',');
        if (!hash[key]) {
            hash[key] = [];
        }
        hash[key].push(word);
    }
    return Object.values(hash);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));