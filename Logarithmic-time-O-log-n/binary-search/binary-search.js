const findIndex = (array, element, offset = 0) => {
    // split array in half
    const half = parseInt(array.length / 2);
    const current = array[half];

    if (current === element) {
        return offset + half;
    } else if (element > current) {
        const right = array.slice(half);
        return findIndex(right, element, offset + half);
    } else {
        const left = array.slice(0, half)
        return findIndex(left, element, offset);
    }
}

export { findIndex }