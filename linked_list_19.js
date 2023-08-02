/*
'''
Delete Even Nodes In Linked List

We've been given a linked list of integer values from 0 - 2^32, and we want to delete all of the nodes that are *even* and return the list's head.

We should return the modified input linked list as our result.
 

EXAMPLE(S)
[3,1,3] => [3, 1, 3]

[5, 6, 9] => [5, 9]
[2, 2, 2] => []
[2, 7, 4, 3, 5] => [7, 3, 5]
 
empty array should return null;

*/
class Node{
    constructor(value, next = null){
      this.value = value
      this.next = next
    }
  }

  function deleteEvenNodes(head){
    const dummy = new Node(null)
    dummy.next = head
    let prev = dummy
    let curr = head
    
    while(curr){
      if(curr.value %2 == 0){
        curr = curr.next;
        prev.next = curr;
      }else{
        prev = curr;
        curr = curr.next;
      }
    }
  
    return dummy.next;
  }
  

  let ll1 = new Node(3, new Node(1, new Node(3)))
  console.log(deleteEvenNodes(ll1))
  let ll2 = new Node(2, new Node(2, new Node(2)))
  console.log(deleteEvenNodes(ll2))
  let ll3 = new Node(5, new Node(6, new Node(9)))
  console.log(deleteEvenNodes(ll3))
  let ll4 = new Node(2,new Node(7, new Node(4, new Node(3, new Node(5,null)))));
  console.log(deleteEvenNodes(ll4));