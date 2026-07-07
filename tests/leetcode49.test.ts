import { groupAnagrams } from '../src/leetcode49';

describe('LeetCode 49: Group Anagrams', () => {
  it('should group standard anagrams together', () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const result = groupAnagrams(input);
    expect(result).toHaveLength(3);
    expect(result).toContainEqual(expect.arrayContaining(["eat", "tea", "ate"]));
    expect(result).toContainEqual(expect.arrayContaining(["tan", "nat"]));
    expect(result).toContainEqual(expect.arrayContaining(["bat"]));
  });

  it('should handle an empty array', () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  it('should handle an array with a single word', () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
  });

  it('should handle words with duplicate characters (e.g., "aabb" vs "abab")', () => {
    const input = ["aabb", "abab", "bbaa"];
    const result = groupAnagrams(input);
    expect(result).toEqual([["aabb", "abab", "bbaa"]]);
  });

});
