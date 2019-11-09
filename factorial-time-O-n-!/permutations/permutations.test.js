import { getPermutations } from "./permutations"

describe('getPermutations ', () => {
    it('should get all different words can be formed.', () => {
        const data = getPermutations('abc');
        const expectedData = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
            ;
        expect(data).toEqual(expectedData);
    });
});