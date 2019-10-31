import { isEvenOrOdd } from "./odd-or-even"

describe('isEvenOrOdd', () => {
    it('should give correct result for even number', () => {
        const result = isEvenOrOdd(8);
        expect(result).toBe('Even');
    });
});