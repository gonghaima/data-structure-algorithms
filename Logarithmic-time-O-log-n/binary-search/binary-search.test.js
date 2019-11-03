import { findIndex } from "./binary-search"

describe('findIndex in binary search ', () => {
    it('should get correct index of search term', () => {
        const dataSet = ["Adrian", "Bella", "Charlotte", "Daniel", "Emma", "Hanna", "Isabella", "Jayden", "Kaylee", "Luke", "Mia", "Nora", "Olivia", "Paisley", "Riley", "Thomas", "Wyatt", "Xander", "Zoe"];
        const itemIndex = findIndex(dataSet, 'Hanna');
        expect(itemIndex).toBe(5);
    });
});