import { hasDuplicates } from "./hasDuplicates"

describe('hasDuplicates ', () => {
    it('should check input value containing duplicate value or not', () => {
        const result = hasDuplicates([1, 2, 3, 4]);
        expect(result).toBe(false);
    });

    it('should return true if there is a duplicate', () => {
        const result = hasDuplicates([1, 2, 3, 3, 4]);
        expect(result).toBe(true);
    });
});