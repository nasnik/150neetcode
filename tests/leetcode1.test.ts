import { twoSum } from '../src/leetcode1';

describe('LeetCode 1', () => {
    it('should identify the indexes', () => {
        expect(twoSum([1, 2, 3, 4], 3)).toEqual([0, 1]);
    });
});
