# Find if a number is odd or even

```javascript
function isEvenOrOdd(n) {
  return n % 2 ? 'Odd' : 'Even';
}

console.log(isEvenOrOdd(10)); // => Even
console.log(isEvenOrOdd(10001)); // => Odd
```

Advanced note: you could also replace n % 2 with the bit AND operator: n & 1. If the first bit (LSB) is 1 then is odd otherwise is even.

It doesn’t matter if n is 10 or 10,001, it will execute line 2 one time.

Do not be fooled by one-liners. They don’t always translate to constant times. You have to be aware of how they are implemented.

If you have a method like Array.sort() or any other array or object methods, you have to look into the implementation to determine its running time.

Primitive operations like sum, multiplication, subtraction, division, modulo, bit shift, etc. have a constant runtime. This can be shocking! But, let’s go in details why they are constant time. If you use the schoolbook long multiplication algorithm, it would take O(n2) to multiply two numbers. However, most programming languages limit numbers to max value (e.g. in JS: Number.MAX_VALUE is 1.7976931348623157e+308). So, you cannot operate numbers that yield a result greater than the MAX_VALUE. So, primitive operations are bound to be completed on a fixed amount of instructions O(1) or throw overflow errors (in JS, Infinity keyword).