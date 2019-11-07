# mergesort

What’s the best way to sort an array? Before, we proposed a solution using bubble sort that has a time complexity of O(n2). Can we do better?

We can use an algorithm called mergesort to improve it. This’s how it works:

1. We are going to divide the array recursively until the elements are two or less.
2. We know how to sort two items, so we sort them iteratively (base case).
3. The final step is merging: we merge in taking one by one from each array such that they are in ascending order.

Here’s the code for merge sort:

```javascript
function sort(n) {
  const length = n.length;
  // base case
  if(length === 1) {
    return n;
  }
  if(length === 2) {
    return n[0] > n[1] ? [n[1], n[0]] : [n[0], n[1]];
  }
  // slit and merge
  const mid = length/2;
  return merge(sort(n.slice(0, mid)), sort(n.slice(mid)));
}

function merge(a = [], b = []) {
  const merged = [];
  // merge elements on a and b in asc order. Run-time O(a + b)
  for (let ai = 0, bi = 0; ai < a.length || bi < b.length;) {
    if(ai >= a.length || a[ai] > b[bi]) {
      merged.push(b[bi++]);
    } else {
      merged.push(a[ai++]);
    }
  }

  return merged;
}
```

As you can see, it has two functions sort and merge. Merge is an auxiliary function that runs once through the collection a and b, so it’s running time is O(n). Let’s apply the Master Method to find the running time.

## Master Method for Mergesort

We are going to apply the Master Method that we explained above to find the runtime:

1. Let’s find the values of: T(n) = a T(n/b) + f(n)
   a: The number of sub-problems is 2 (line 12). So, a = 2.
   b: Each of the sub-problems divides n in half. So, b = 2
   f(n): The work done outside the recursion is the function merge, which has a runtime of O(n) since it visits all the elements on the given arrays.

   Substituting the values:
   >>T(n) = 2 T(n/2) + O(n)
2. Let’s find the work done in the recursion: nlogba.
   nlog22
   n1 = n
3. Finally, we can see that recursion runtime from step 2) is O(n) and also the non-recursion runtime is O(n). So, we have the case 2 : O(nlogba log(n))

O(nlog22 log(n))

O(n1 log(n))

O(n log(n)) 👈 this is running time of the merge sort
