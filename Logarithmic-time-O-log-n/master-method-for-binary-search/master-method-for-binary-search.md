# Master Method for Binary Search

The binary search algorithm slit n on half until a solution is found or array is exhausted. So, using the Master Method:

>>T(n) = a T(n/b) + f(n)

1) Find a, b and f(n) and replace it in the formula:
   * a: the number of sub-problems. For our example, we only split the problem into another subproblem. So a=1.
   * b: the factor by which n is reduced. For our case, we divide n in half each time. Thus, b=2.
   * f(n): the running time outside the recursion: O(1).
  thus,
  >>T(n) = T(n/2) + O(1)

2) Compare the runtime executed inside and outside the recursion:
   * Runtime of the work done outside the recursion: f(n). E.g. O(1).
   * Runtime of work done inside the recursion given by this formula nlogba. E.g. O(nlog21) = O(n0) = O(1).
3) Finally, getting the runtime. Based on the comparison of the expressions from the previous steps, find the case it matches.
   
   As we saw in the previous step the work outside and inside the recursion has the same runtime, so we are in case 2.
   >>O(nlogba log(n))

Making the substitution we get:

O(nlog21 log(n))

O(n0 log(n))

O(log(n)) 👈 this is running time of a binary search
