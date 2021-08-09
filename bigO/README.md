# Big O Notation Notes
  - Imagine we have multiple implementations of the same function, how do we determine which implementation is "best"?
  - Useful for discussing trade-offs between different approaches
  - It is a way of describing how the runtime of an algorithm grows as the inputs grow.

# Time Complexity
  - f(n) could be linear (f(n) = n)
  - f(n) could be quadratic (f(n) = n^2)
  - f(n) could be constant (f(n) = 1)
  - f(n) could be something entirely different

  - Constants don't matter. So O(2n) is simplified to O(n)
  - Smaller terms don't matter. So O(n + 10) is simplified to O(n)

  1. Arithmetic operations are (roughly) constant.
  2. Variable assignment is constant.
  3. Accessing elements in an array (using an index) or an object by key is constant.
  4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

# Space Complexity
  - How much additional memory doe we need to allocate in order to run the code in our algorithm?

  1. Most primitives are constant space. Primitives being booleans, numbers, undefined, and null.
  2. Strings require O(n) space, where n is the string lenght.
  3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys for an object.
