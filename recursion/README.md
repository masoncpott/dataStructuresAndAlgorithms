# Recursion

## What is Recursion?
- a *process* (a function in our case) that *calls itself*

## The Call Stack
- Any time a function is invoked, it is placed (pushed) on the top of the call stack
- When JS sees the *return* keyword or when the function ends, the compiler will remove (pop)

## Base Case
- The condition when the recursion ends
- This is the most important concept to understand.

## Different Input (Recursive Case)
- Our function calling itself

## Common Pitfalls
- No Base Case or base case is incorrect, causing an infinite number of functions to be added to the call stack.
- Forgetting to return or returning the wrong thing
- Stack Overflow!


## Helper Method Recursion
- an outer function contains an inner, recursive function that is utilized within the outer function.
- very useful when traversing an array


## Pure Recursion
- the function itself is completely self contained and it is recursive
- For arrays, use methods like slice, the spread operator, and concat that make copies of the arrays so you do not mutate them.
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.
- To make copies of objects use Obnject.assign, or the spread operator.