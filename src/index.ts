type NestedArray<T> = Array<T | NestedArray<T>>;

/**
 * Create a flattened version of an array
 *
 * @param array An array that should be flat
 * @returns Flattened array
 */
export function flatten<T>(array: NestedArray<T>): T[] {
    const result: T[] = [];

    array.forEach(item => {
        if (Array.isArray(item)) {
            result.push.apply(result, flatten(item));
        } else {
            result.push(item);
        }
    });

    return result;
}
