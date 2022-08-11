// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:


// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

var reverseKGroup = function(head, k) {
    if(!head) return null;
    let dummyHead = new ListNode();
    let newList = dummyHead;
    let current = head;
    
    while(current){
        let start = current;
        for(let i = 1; i < k; i++){
            current = current.next
            if(!current) return dummyHead.next
        }
        
        let next = current.next;
        newList.next = reverseList(start,k)
        start.next = next
        newList = start;
        current = next;
    }
    return dummyHead.next
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