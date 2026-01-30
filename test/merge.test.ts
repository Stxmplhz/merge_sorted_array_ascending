import { merge } from "../src/merge";

describe("merge sorted collections", () => {
    test("Merge sorted three array correctly case", () => {
        const c1 = [0, 4, 8];
        const c2 = [1, 5, 7];
        const c3 = [9, 8, 6, 2];
        const result = merge(c1, c2, c3);
        expect(result).toEqual([0, 1, 2, 4, 5, 6, 7, 8, 8, 9]);
    });

    test("Empty arrays case", () => {
        expect(merge(
            [], 
            [], 
            []
        )).toEqual([]);
    });

    test("Single array case", () => {
        expect(merge(
            [1, 2], 
            [], 
            []
        )).toEqual([1, 2]);
    });

    test("Duplicates case", () => {
        expect(
        merge(
            [1, 2], 
            [2, 3], 
            [5, 4, 2]
        )).toEqual([1, 2, 2, 2, 3, 4, 5]);
    });
});
