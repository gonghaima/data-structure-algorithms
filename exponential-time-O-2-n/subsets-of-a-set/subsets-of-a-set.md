# Subsets of a Set

Finding all distinct subsets of a given set. For instance, let’s do some examples to try to come up with an algorithm to solve it:

```javascript
getSubsets('') // =>  ['']
getSubsets('a') // => ['', 'a']
getSubsets('ab') // => ['', 'a', 'b', 'ab']
```

Did you notice any pattern?

* The first returns an empty element.
* The second case returns the empty element + the 1st element.
* The 3rd case returns precisely the results of 2nd case + the same array with the 2nd element b appended to it.

What if you want to find the subsets of abc? Well, it would be precisely the subsets of ‘ab’ and again the subsets of ab with c appended at the end of each element.

As you noticed, every time the input gets longer, the output is twice as long as the previous one. Let’s code it:

```javascript
function getSubsets(n = '') {
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
```

If we run that function for a couple of cases we will get:

```javascript
getSubsets('') // ...
// n = 0, f(n) = 1;
getSubsets('a') // , a...
// n = 1, f(n) = 2;
getSubsets('ab') // , a, b, ab...
// n = 2, f(n) = 4;
getSubsets('abc') // , a, b, ab, c, ac, bc, abc...
// n = 3, f(n) = 8;
getSubsets('abcd') // , a, b, ab, c, ac, bc, abc, d, ad, bd, abd, cd, acd, bcd...
// n = 4, f(n) = 16;
getSubsets('abcde') // , a, b, ab, c, ac, bc, abc, d, ad, bd, abd, cd, acd, bcd...
// n = 5, f(n) = 32;
```

As expected, if you plot n and f(n), you will notice that it would be exactly like the function 2^n. This algorithm has a running time of O(2^n).

**Note**: You should avoid functions with exponential running times (if possible) since they don’t scale well. The time it takes to process the output doubles with every additional input size. But exponential running time is not the worst yet; others go even slower. Let’s see one more example in the next section.