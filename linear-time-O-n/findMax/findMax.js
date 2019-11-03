const findMax = n => {
    let max;
    let counter = 0;

    for (let i = 0; i < n.length; i++) {
        counter++;
        if (max === undefined || max < n[i]) {
            max = n[i];
        }
    }

    console.log(`n: ${n.length}, counter: ${counter}`);
    return max;
}

export { findMax }