//242. Valid Anagram
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
export function isAnagram(str1: string, str2: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let strMemory = new Array(26).fill(0);
    if(str1.length !== str2.length)return false;
    for(let i = 0; i < str1.length; i++){
        let index1 = alphabet.indexOf(str1[i]);
        let index2 = alphabet.indexOf(str2[i]);
        strMemory[index1]++;
        strMemory[index2]--;
    }
    if(strMemory.every(item=> item === 0)){
        return true;
    }else{
        return false;
    }
};
console.log(isAnagram('cat', 'acta'));
