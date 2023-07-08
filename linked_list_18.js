// Reverse Linked List in K groups
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

reverseKGroup = function(head, k) {
    if(!head) return null;
    let dummy = new ListNode();
    let left = dummy;
    let right = head;
    
    while(right){
        let start = right;
        for(let i = 1; i < k; i++){
            right = right.next
            if(!right) return dummy.next
        }
        
        let next = right.next;
        left.next = reverseList(start,k)
        start.next = next
        left = start;
        right = next;
    }
    return dummy.next
  };
  
  function reverseList(head,k){
    let prev = null, current = head
    for(let i = 0; i < k; i++){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    return prev
  }
  