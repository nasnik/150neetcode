import { containsDuplicate } from '../src/leetcode217';

describe('LeetCode 217', () => {
    it('should identify duplicates correctly', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });
});
