
const merge = (a = [], b = []) => {
    const merged = [];
    // merge elements on a and b in asc order. Run-time O(a + b)
    for (let ai = 0, bi = 0; ai < a.length || bi < b.length;) {
        if (ai >= a.length || a[ai] > b[bi]) {
            merged.push(b[bi++]);
        } else {
            merged.push(a[ai++]);
        }
    }
    return merged;
}

const sort = (n) => {
    const length = n.length;
    // base case
    if (length === 1) {
        return n;
    }
    if (length === 2) {
        return n[0] > n[1] ? [n[1], n[0]] : [n[0], n[1]];
    }
    // slit and merge
    const mid = length / 2;
    return merge(sort(n.slice(0, mid)), sort(n.slice(mid)));
}


export { sort }