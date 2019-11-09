


const getPermutations = (string, prefix = '') => {
    if (string.length <= 1) {
        return [prefix + string];
    }

    return Array.from(string).reduce((result, char, index) => {
        const reminder = string.slice(0, index) + string.slice(index + 1);
        result = result.concat(getPermutations(reminder, prefix + char));
        return result;
    }, []);
}


export { getPermutations }