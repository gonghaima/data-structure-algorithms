import { sort } from "./mergesort"

describe('merge sort ', () => {
    it('should get sort a given array', () => {
        const data = [2, 3, 4, 6, 9, 1, 0, 99, 81, 101, 120];
        expect(sort(data)).toEqual([0, 1, 2, 3, 4, 6, 9, 81, 99, 101, 120,]);
    });
});