# O(log n) - Logarithmic time

Logarithmic time complexities usually apply to algorithms that divide problems in half every time. For instance, let’s say that we want to look for a word in an old fashion dictionary. It has every word sorted alphabetically. There are at least two ways to do it:

Algorithm A:

* Start at the beginning of the book and go in order until you find the contact you are looking for.

Algorithm B:

* Open the book in the middle and check the first word on it.
* If the word that you are looking for is alphabetically more significant, then look to the right. Otherwise, look in the left half.

Which one is faster? The first algorithms go word by word O(n), while the algorithm B split the problem in half on each iteration O(log n). This 2nd algorithm is a binary search.
