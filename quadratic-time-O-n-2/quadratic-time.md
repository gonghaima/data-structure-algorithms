# O(n^2) - Quadratic time

A function with a quadratic time complexity has a growth rate of n2. If the input is size 2, it will do four operations. If the input is size 8, it will take 64, and so on.

Here are some code examples of quadratic algorithms:

## Has duplicates

You want to find duplicate words in an array. A naïve solution will be the following:

```javascript
function hasDuplicates(n) {
  const duplicates = [];
  let counter = 0;

  for (let outter = 0; outter < n.length; outter++) {
    for (let inner = 0; inner < n.length; inner++) {
      counter++;

      if(outter === inner) continue;

      if(n[outter] === n[inner]) {
        return true;
      }
    }
  }

  console.log(`n: ${n.length}, counter: ${counter}`);
  return false;
}
```

Time complexity analysis:

Line 2-3: 2 operations
Line 5-6: double-loop of size n, so n^2.
Line 7-13: has ~3 operations inside the double-
We get 3n^2 + 2.

Again, when we have an asymptotic analysis, we drop all constants and leave the most important term: n^2. So, in big O notation, it would be O(n^2).

We are using a counter variable to help us verify. The hasDuplicates function has two loops. If we have an input of 4 words, it will execute the inner block 16 times. If we have 9, it will perform counter 81 times and so forth.

```javascript
hasDuplicates([1,2,3,4]);
// n: 4, counter: 16
```

and with n size 9:

```javascript
hasDuplicates([1,2,3,4,5,6,7,8,9]);
// n: 9, counter: 81
```

Let’s see another example

## Bubble sort

We want to sort the elements in an array.

```javascript
function sort(n) {
  for (let outer = 0; outer < n.length; outer++) {
    let outerElement = n[outer];

    for (let inner = outer + 1; inner < n.length; inner++) {
      let innerElement = n[inner];

      if(outerElement > innerElement) {
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
```

Also, you might notice that for a colossal n, the time it takes to solve the problem increases a lot. Can you spot the relationship between nested loops and the running time? When a function has a single loop, it usually translates into a running time complexity of O(n). Now, this function has 2 nested loops and quadratic running time: O(n2).
