# permutations

Write a function that computes all the different words that can be formed given a string. E.g.

```javascript
getPermutations('a') // => [ 'a']
getPermutations('ab') // =>  [ 'ab', 'ba']
getPermutations('abc') // => [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
```

How would you solve that?

A straightforward way will be to check if the string has a length of 1 if so, return that string since you can’t arrange it differently.

For strings with a length bigger than 1, we could use recursion to divide the problem into smaller problems until we get to the length 1 case. We can take out the first character and solve the problem for the remainder of the string until we have a length of 1.

```javascript
function getPermutations(string, prefix = '') {
  if(string.length <= 1) {
    return [prefix + string];
  }

  return Array.from(string).reduce((result, char, index) => {
    const reminder = string.slice(0, index) + string.slice(index+1);
    result = result.concat(getPermutations(reminder, prefix + char));
    return result;
  }, []);
}
```

If print out the output, it would be something like this:

```javascript
getPermutations('ab') // ab, ba...
// n = 2, f(n) = 2;
getPermutations('abc') // abc, acb, bac, bca, cab, cba...
// n = 3, f(n) = 6;
getPermutations('abcd') // abcd, abdc, acbd, acdb, adbc, adcb, bacd...
// n = 4, f(n) = 24;
getPermutations('abcde') // abcde, abced, abdce, abdec, abecd, abedc, acbde...
// n = 5, f(n) = 120;
```

I tried with a string with a length of 10. It took around 8 seconds!

```javascript
time node ./lib/permutations.js
# getPermutations('abcdefghij') // => abcdefghij, abcdefghji, abcdefgihj, abcdefgijh, abcdefgjhi, abcdefgjih, abcdefhgij...
# // n = 10, f(n) = 3,628,800;
# ./lib/permutations.js  8.06s user 0.63s system 101% cpu 8.562 total
```

I have a little homework for you:

>>Can you try with a permutation with 11 characters? ;) Comment below what happened to your computer!