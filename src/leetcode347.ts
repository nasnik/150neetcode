//347. Top K Frequent Elements
//Given an integer array nums and an integer k,
// return the k most frequent elements. You may return the answer in any order.
export function topKFrequent(nums: number[], k: number): number[] {
    const hash = new Map<number, number>();
    for (const num of nums) {
        hash.set(num, (hash.get(num) || 0) + 1);
    }
    const sortedEntries = Array.from(hash.entries())
        .sort((a, b) => b[1] - a[1]);

    return sortedEntries.slice(0, k).map(entry=> entry[0]);
};
