/*
'''
❓ PROMPT
Given integers *X* and *Y*, return the head of a linked list with *X* nodes with value *Y*.

Example(s)
createLL(5, 3)
"3 -> 3 -> 3 -> 3 -> 3"

createLL(6, 6)
"6 -> 6 -> 6 -> 6 -> 6 -> 6"

createLL(2, -10)
"-10 -> -10"
 */

class Node{
    constructor(value, next = null){
      this.value = value;
      this.next = next;
    }
  }
  
  function createLL(count, value){
    let head = new Node(null)
    let curr = head
    for(let i = 0; i < count; i++){
      curr.next = new Node(value)
      curr = curr.next
    }
    return head
  }