import { flatten } from "./index";

describe("flatten", () => {
    it("should make a nested array of numbers flat", () => {
        const input = [[1, 2, [3]], 4];
        const result = [1, 2, 3, 4];

        expect(flatten(input)).toEqual(result);
    });

    it("should work with strings", () => {
        const input = [[["foo"], ["bar"]], "baz"];
        const result = ["foo", "bar", "baz"];

        expect(flatten(input)).toEqual(result);
    });

    it("should work with objects", () => {
        const input = [[[{ x: 1 }], [{ x: 2 }]], { x: 3 }];
        const result = [{ x: 1 }, { x: 2 }, { x: 3 }];

        expect(flatten(input)).toEqual(result);
    });
});
