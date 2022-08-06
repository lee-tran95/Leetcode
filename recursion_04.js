// Given a linked list of positive integers, count the elements with odd values from the list. Note 0 is an even number.
// Function Signature
// function countOddValues(head)
// Expected Runtime
// O(n) time
// O(n) space - counting the recursive stack space
// Examples
// 1 → 1 → 1 → 1 returns 4
// 1 → 2 → 3 → 4 returns 2
// Test Cases
// null returns 0
// 2 returns 0
// 1 returns 1
// 1 → 2 returns 1

class Node {
    constructor(value, next = null){
      this.value = value;
      this.next = next;
    }
  }
   function countOddValues(head){
     if(!head) return 0;
     return head.value%2 === 1 ? 1 + countOddValues(head.next): countOddValues(head.next)
   }
  
  
  let ll = new Node(1,new Node(1,new Node(1,new Node(1))))
  let ll2 = new Node(1,new Node(2,new Node(3,new Node(4))))
  console.log(countOddValues(ll))
  console.log(countOddValues(ll2))