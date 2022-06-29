// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0,head)
    let prev = dummy
    let current  = head;
    let count = 0;
    while(current){
        if(count == n){
            current = current.next;
            prev = prev.next
        }else{
            count++
            current = current.next
        }
    }
    prev.next = prev.next.next
    return dummy.next
};