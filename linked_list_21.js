// Partition Linked List into Segments

// Given the head of a linked list and any number *parts*, partition the list into *parts* consecutive segments. No 2 segments should have a size difference >1.

// Return an array of *n* of head nodes. The segments should be in the same original order, and segments occurring earlier should never be smaller than later segments.
 

// EXAMPLE(S)
// list1 = 1->2->3->4->5->6->7->8->9->10->None
// segmentLinkedList(list1,1)
// Output:
// [
//   1->2->3->4->5->6->7->8->9->10->None
// ]

// list2 = 1->2->3->4->5->None
// segmentLinkedList(list2, parts=10)
// Output:
// [
//   1->None
//   2->None
//   3->None
//   4->None
//   5->None
//   []
//   []
//   []
//   []
//   []
// ]

// list3 = 1->2->3->4->5->None
// segmentLinkedList(list3, parts=2)
// Output:
// [
//   1->2->3->None
//   4->5->None
// ]

class Node {
    constructor(val=0, next=null) {
      this.val = val
      this.next = next
    }
  }
  
  function segmentLinkedList(head, parts) {
    const results = [];
    let cur = head;
    let length = 0;
  
      while (cur) {
        length += 1;
        cur = cur.next;
      }
  
    let partsLength = Math.floor(length / parts); //3
    let addToPartsLength = length % parts //1
    cur = head;
  
      for(let i = 0; i < parts; i++){
        let headPart = new Node(null)
        let currentPart = headPart
        let count = 0
        let currLength = addToPartsLength > 0 ? partsLength + 1 : partsLength
          while(count < currLength && cur){
            currentPart.next = new Node(cur.val)
            cur = cur.next
            currentPart = currentPart.next
            count++
          }
          
        addToPartsLength--
        headPart.next === null ? results.push([]) : results.push(headPart.next)
      }
  
    return results;
  }