const sort = n => {
    for (let outer = 0; outer < n.length; outer++) {
        let outerElement = n[outer];

        for (let inner = outer + 1; inner < n.length; inner++) {
            let innerElement = n[inner];

            if (outerElement > innerElement) {
                // swap
                n[outer] = innerElement;
                n[inner] = outerElement;
                // update references
                outerElement = n[outer];
                innerElement = n[inner];
            }
        }
    }
    return n;
}
export { sort }