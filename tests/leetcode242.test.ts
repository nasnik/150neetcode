import {isAnagram} from "../src/leetcode242";

describe('LeetCode 242', () => {
    it('should identify anagrams correctly', () => {
        expect(isAnagram('cat', 'act')).toBe(true);
        expect(isAnagram('cat', 'tam')).toBe(false);
        expect(isAnagram('cat', 'tact')).toBe(false);
    });
});
