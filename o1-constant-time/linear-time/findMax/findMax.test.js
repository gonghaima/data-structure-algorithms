import { findMax } from "./findMax"

describe('findMax ', () => {
    it('should get max value based on input array', () => {
        const result = findMax([4, 5, 6, 1, 9, 2, 8, 3, 7]);
        expect(result).toBe(9);
    });
});