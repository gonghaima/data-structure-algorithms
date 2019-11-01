# Look-up table

Given a string find its word frequency data.
```javascript
const dictionary = {the: 22038615, be: 12545825, and: 10741073, of: 10343885, a: 10144200, in: 6996437, to: 6332195 /* ... */};

function getWordFrequency(dictionary, word) {
  return dictionary[word];
}

console.log(getWordFrequency(dictionary, 'the'));
console.log(getWordFrequency(dictionary, 'in'));
```

Again, we can be sure that even if the dictionary has 10 or 1 million words, it would still execute line 4 once to find the word. However, if we decided to store the dictionary as an array rather than a hash map, then it would be a different story. In the next section, we are going to explore what’s the running time to find an item in an array.

>> Only a hash table with a perfect hash function will have a worst-case runtime of O(1). The ideal hash function is not practical, so there will be some collisions and workarounds leads to a worst-case runtime of O(n). Still, on average the lookup time is O(1).
