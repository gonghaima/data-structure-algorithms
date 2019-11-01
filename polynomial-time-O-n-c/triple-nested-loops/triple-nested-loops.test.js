import { findXYZ } from "./triple-nested-loops"

//3x + 9y + 8z = 79
describe('findXYZ ', () => {
    it('should get list of possible result out of the max range', () => {
        const result = findXYZ(10)
        expect(result[0]).toEqual({ "x": 0, "y": 7, "z": 2 });
    });
});