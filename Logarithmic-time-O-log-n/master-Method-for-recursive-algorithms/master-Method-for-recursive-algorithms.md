# master-Method-for-recursive-algorithms

Finding the runtime of recursive algorithms is not as easy as counting the operations. This method helps us to determine the runtime of recursive algorithms. We are going to explain this solution using the indexOf function as an illustration.


```javascript
function indexOf(array, element, offset = 0) {
  // split array in half
  const half = parseInt(array.length / 2);
  const current = array[half];

  if(current === element) {
    return offset + half;
  } else if(element > current) {
    const right = array.slice(half);
    return indexOf(right, element, offset + half);
  } else {
    const left = array.slice(0, half)
    return indexOf(left, element, offset);
  }
}
```

When analyzing recursive algorithms, we care about these three things:

* The runtime of the work done outside the recursion (line 3-4): O(1)
* How many recursive calls the problem is divided (line 11 or 14): 1 recursive call. Notice only one or the other will happen, never both.
* How much n is reduced on each recursive call (line 10 or 13): 1/2. Every recursive call cuts n in half.

1) The Master Method formula is the following:
   >>T(n) = a T(n/b) + f(n)
   where:

   * n: the size of the recursion problem. duh? :)
   * a: the number of sub-problems. For our case, we only split the problem into another subproblem.
   * b: the factor by which n is reduced. For our example, we divide n in half each time.
   * f(n): the running time outside the recursion. E.g., O(1)

2) Once we know the values of a, b and f(n). We can determine the runtime of the recursion using this formula:
   >>n^logba
   This value will help us to find which master method case we are solving.
3) Finally, we compare the recursion runtime from step 2) and the runtime f(n) from step 1). Based on that, we have the following cases:
   
   ## case 1: Most of the work done in the recursion

   If nlogba > f(n), then runtime is:
   >>O(nlogba)
   
   ## Case 2: The runtime of the work done in the recursion and outside is the same

    If nlogba === f(n), then runtime is:

    >>O(nlogba log(n))

   ## Case 3: Most of the work is done outside the recursion

    If nlogba < f(n), then runtime is:
    >>O(f(n))

    Now, let’s combine everything we learned here to get the running time of our binary search function indexOf.
