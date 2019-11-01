# O(n^c) - Polynomial time

Polynomial running is represented as O(nc), when c > 1. As you already saw, two inner loops almost translate to O(n2) since it has to go through the array twice in most cases. Are three nested loops cubic? If each one visit all elements, then yes!

Usually, we want to stay away from polynomial running times (quadratic, cubic, nc …) since they take longer to compute as the input grows fast. However, they are not the worst.

## Triple nested loops

Let’s say you want to find the solutions for a multi-variable equation that looks like this:

>>3x + 9y + 8z = 79

This naïve program will give you all the solutions that satisfy the equation where x, y and z < n.

```javascript
function findXYZ(n) {
  const solutions = [];

  for(let x = 0; x < n; x++) {
    for(let y = 0; y < n; y++) {
      for(let z = 0; z < n; z++) {
        if( 3*x + 9*y + 8*z === 79 ) {
          solutions.push({x, y, z});
        }
      }
    }
  }

  return solutions;
}

console.log(findXYZ(10)); // => [{x: 0, y: 7, z: 2}, ...]
```

This algorithm has a cubic running time: O(n^3).

**Note**: We could do a more efficient solution but did it this way to show an example of a cubic runtime.