


const getSubsets = (n = '') => {
    const array = Array.from(n);
    const base = [''];

    const results = array.reduce((previous, element) => {
        const previousPlusElement = previous.map(el => {
            return `${el}${element}`;
        });
        return previous.concat(previousPlusElement);
    }, base);

    console.log(`getSubsets(${n}) // ${results.slice(0, 15).join(', ')}... `);
    console.log(`n: ${array.length}, counter: ${results.length};`);
    return results;
}


export { getSubsets }