/*
'''
❓ PROMPT
A restaurant has a dedicated cook making flapjacks (pancakes) in the mornings. First, they're removed from the griddle and added to a stack as they're ready. 
Then, servers remove them from the stack to serve customers. The manager wants to serve fresh flapjacks, meaning they never want the stack to be taller than 4. 
At the same time, they want the stack never to be empty so that no orders have to wait for pancakes.

Write a function that takes a series of numbers representing flapjacks being added and removed from the stack (positive for fresh off the grill, negative for an order being served). 
Return a tuple (or pair), where the first value is true or false to reflect if the manager's constraints are always satisfied, and the second value is the max height of the stack.

Example(s)
goldilockFlapjacks([2, -1]) => [true, 2]
goldilockFlapjacks([-1, 2]) => [false, 1]
goldilockFlapjacks([2, -1, 3, -3, 2, -1]) => [true, 4]
 
*/

function goldilockFlapjacks(pancakes) {
    const res = [true, 0]
    let count = 0;
    for(const numOfPancakes of pancakes){
      count += numOfPancakes
      if(count <= 0 || count > 4) res[0] = false
      res[1] = Math.max(res[1], count)
    }
    console.log(res)
    return res
  }
  
  console.log(JSON.stringify(goldilockFlapjacks([2])) === JSON.stringify([true, 2]))
  console.log(JSON.stringify(goldilockFlapjacks([-2])) === JSON.stringify([false, 0]))
  console.log(JSON.stringify(goldilockFlapjacks([4])) === JSON.stringify([true, 4]))
  console.log(JSON.stringify(goldilockFlapjacks([5])) === JSON.stringify([false, 5]))
  console.log(JSON.stringify(goldilockFlapjacks([4, -2, 1, -2])) === JSON.stringify([true, 4]))
  console.log(JSON.stringify(goldilockFlapjacks([2, -1, 1, -1, 1])) === JSON.stringify([true, 2]))
  console.log(JSON.stringify(goldilockFlapjacks([4, -2, 1, -2, 4])) === JSON.stringify([false, 5]))
  console.log(JSON.stringify(goldilockFlapjacks([4, -2, 1, -2, -4])) === JSON.stringify([false, 4]))