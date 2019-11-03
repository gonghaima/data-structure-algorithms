# data-structure-algorithms

## 8 time complexities that every programmer should know

### summary

We are going to learn the top algorithm’s running time that every developer should be familiar with. Knowing these time complexities will help you to assess if your code will scale. Also, it’s handy to compare different solutions for the same problem. By the end, you would be able to eyeball different implementations and know which one will perform better.

In the previous post, we saw how Alan Turing saved millions of lives with an optimized algorithm. In most cases, faster algorithms can save you time, money, and enable new technology. So, this is paramount to know how to measure algorithms performance.

To recap time complexity estimates how an algorithm performs regardless kind of machine it runs on. You can get the time complexity by “counting” the number of operations performed by your code. This time complexity is defined as a function of the input size n using Big-O notation. n indicates the magnitude of the input, while O is the growth rate function.

We use the Big-O notation to classify algorithms based on their running time or space (memory used) as the input grows. The O function is the growth rate in function of the input size n.

Before we dive in, here is the big O cheatsheet and examples that we are going to cover on this post. Click on them to go to the implementation. 😉

| Big O Notation |     Name     | Example(s)                                         |
| -------------- | :----------: | :------------------------------------------------- |
| O(1)           |   Constant   | 1. Odd or Even number                              |
|                |              | 2. Look - up table(on average)                     |
| O(log n)       | Logarithmic  | Finding element on sorted array with binary search |
| O(n)           |    Linear    | 1. Find max element in unsorted array              |
|                |              | 2. Duplicate elements in array with Hash Map       |
| O(n log n)     | Linearithmic | Sorting elements in array with merge sort          |
| O($n^2$)       |  Quadratic   | 1. Duplicate elements in array                     |
|                |              | 2. Sorting array with bubble sort                  |
| O($n^3$)       |    Cubic     | Three variables equation solver                    |
| O($2^n$)       | Exponential  | Find all subsets                                   |
| O(n!)          |  Factorial   | Find all permutations of a given set/string        |


Now, Let’s go one by one and provide code examples!

You can find all these implementations and more in the Github repo: [Origin](https://github.com/amejiarosario/dsa.js)

This post is part of a tutorial series:

Learning Data Structures and Algorithms (DSA) for Beginners

Intro to algorithm’s time complexity and Big O notation

Eight time complexities that every programmer should know 👈 you are here

Data Structures for Beginners: Arrays, HashMaps, and Lists

Graph Data Structures for Beginners

Trees Data Structures for Beginners

Self-balanced Binary Search Trees

Appendix I: Analysis of Recursive Algorithms
