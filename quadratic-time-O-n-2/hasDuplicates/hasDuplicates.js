const hasDuplicates = n => {
    let counter = 0;
    for (let outter = 0; outter < n.length; outter++) {
        for (let inner = 0; inner < n.length; inner++) {
            counter++;

            if (outter === inner) continue;

            if (n[outter] === n[inner]) {
                return true;
            }
        }
    }

    console.log(`n: ${n.length}, counter: ${counter}`);
    return false;
}

export { hasDuplicates }