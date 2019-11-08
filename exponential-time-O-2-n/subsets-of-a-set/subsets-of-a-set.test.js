import { getSubsets } from "./subsets-of-a-set"

describe('getSubsets ', () => {
    it('should get all subsets from a given value', () => {
        const data = getSubsets('abcd');
        const expectedData = ["", "a", "b", "ab", "c", "ac", "bc", "abc", "d", "ad", "bd", "abd", "cd", "acd", "bcd", "abcd"];
        expect(data).toEqual(expectedData);
    });
});