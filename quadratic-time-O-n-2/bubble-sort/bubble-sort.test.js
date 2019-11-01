import { sort } from "./bubble-sort"

describe('bubble sort ', () => {
    it('should sort an input array with order', () => {
        const result = sort([4, 5, 6, 1, 9, 2, 8, 3, 7]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});