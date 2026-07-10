import { topKFrequent } from '../src/leetcode347';

describe('LeetCode 347: Top K Frequent Elements', () => {
    it('should return the top k frequent elements', () => {
        const input = [1, 1, 1, 2, 2, 3];
        const k = 2;
        expect(topKFrequent(input, k)).toEqual([1, 2]);
    });

    it('should handle k = 1', () => {
        expect(topKFrequent([1], 1)).toEqual([1]);
    });

    it('should handle cases where all elements have the same frequency', () => {
        const input = [1, 2, 3];
        const k = 2;
        const result = topKFrequent(input, k);
        expect(result).toHaveLength(2);
    });

    it('should handle an array with a single unique element repeated', () => {
        expect(topKFrequent([4, 4, 4, 4], 1)).toEqual([4]);
    });

    it('should handle negative numbers', () => {
        expect(topKFrequent([-1, -1, 2, 2, 2], 2)).toEqual([2, -1]);
    });
});
