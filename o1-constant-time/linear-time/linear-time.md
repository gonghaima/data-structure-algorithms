# Linear time

Linear running time algorithms are widespread. Linear runtime means that the program visits every element from the input.

Linear time complexity O(n) means that as the input grows, the algorithms take proportionally longer to complete.

## The largest item on an unsorted array

Let’s say you want to find the maximum value from an unsorted array.

```javascript
function findMax(n) {
  let max;
  let counter = 0;

  for (let i = 0; i < n.length; i++) {
    counter++;
    if(max === undefined || max < n[i]) {
      max = n[i];
    }
  }

  console.log(`n: ${n.length}, counter: ${counter}`);
  return max;
}
```

How many operations will the findMax function do?

Well, it checks every element from n. If the current item is more significant than max it will do an assignment.

Notice that we added a counter so it can help us count how many times the inner block is executed.

If you get the time complexity, it would be something like this:

* Line 2-3: 2 operations
* Line 4: a loop of size n
* Line 6-8: 3 operations inside the for-loop.

So, this gets us 3(n) + 2.

Applying the Big O notation that we learn in the previous post, we only need the biggest order term, thus O(n).

We can verify this using our counter. If n has 3 elements:

```javascript
findMax([3, 1, 2]);
// n: 3, counter: 3
```

or if n has 9 elements:

```javascript
findMax([4,5,6,1,9,2,8,3,7])
// n: 9, counter: 9
```

Now imagine that you have an array of one million items. Do you think it will take the same time? Of course not, it will take longer to the size of the input. If we plot it n and findMax running time we will have a graph like a linear equation.

Linear Running time O(n) example

![graph](./linear-running-time-o(n).jpg)
