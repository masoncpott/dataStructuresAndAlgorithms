# Algorithms and Problem Solving Patterns
  - Devise a way forward through an algorithmic problem that you may not know how to solve right away.

- What is an Algorithm?
  - A *process* or *set of steps* to accomplish a certain task.
  - Almost *everything* that in programming involves some kind of *algorithm*.
  - Foundation for being a successful problem solver --> developer.

- How do you get better at solving algorithms?
  - *Devise* a plan for solving provlems.
  - *Master* common problem solving patterns.

# Problem Solving Strategies
  1. Understand the problem.
  2. Explore concrete examples.
  3. Break it down.
  4. Solve/Simplify.
  5. Look back and refactor.
  - *Note: many of these steps come from George Polya's book "How To Solve It"*

## Understanding the Problem
 1. Can you restate the problem in your own words?
 2. What are the inputs that go into the problem?
 3. What are the outpute that should come from the solution to the problem?
 4. Can the outputs be deteremined from the inputs? Do you have enough information to solve the problem?

## Exploring Concrete Examples
 1. Coming up with concrete examples can help you understand the problem better.
 2. Examples also allow you to check your work/provide sanity checks
 3. Start with simple examples.
 4. Progress to more complex examples.
 5. Explore examples with empty inputs.
 6. Explore examples with invalid inputs.

## Break the Problem Down
 1. Explicitly write out the steps you need to take to solve the problem.
  - this forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before diving in.

## Solve or Simplify
 - solve the problem if you can, if you can't, solve a simpler problem.
 - find the core difficulty in what you are trying to do
 - temporarily ignore that difficulty
 - write a simplified solution
 - then incorporate that difficulty back in

## Look Back and Refactor
 - Can you check the result?
 - Can you derive the result differenctly?
 - Can you understand it at a glance?
 - Can you use the result or method for some other problem?
 - Can you improve the performance of your solution?
 - Can you think of other ways to refactor?
 - How have other people solved this problem?

# Problem Solving Patterns

  ## Frequency Counters
   - this pattern uses objects or sets to collect values/frequencies of values
   - this can often avoid the need for nested loops or O(n^2) operations with arrays/strings
   - see example_2 and exampe_3

  ## Multiple Pointers
   - Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
   - Very efficient for solving problems with minimal space complexity as well
   - see example_4, example_5

  ## Sliding Window
   - This pattern involves creating a WINDOW which can either be an array or number from one position to another
   - Depending on a certain condition, the window either increases or closes (and a new window is created)
   - Very useful for keeping track of a subset of data in an array/string etc.
   - see example_6

  ## Divide and Conquer
   - This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
   - This pattern can tremendously decrease time complexity.
   - see example_7