import { get } from "./look-up-table"

describe('look up table', () => {
    it('should get correct value based on key', () => {
        const dictionary = { the: 22038615, be: 12545825, and: 10741073, of: 10343885, a: 10144200, in: 6996437, to: 6332195 };
        expect(get(dictionary, 'be')).toBe(12545825);
    });
});