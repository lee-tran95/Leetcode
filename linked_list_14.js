// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

var swapPairs = function(head) {
    
    if(!head) return null
    if(!head.next) return head

    let dummy = new ListNode();
    dummy.next = head;
    let count = 1;
    let prev = dummy;
    let current = dummy;
    let next = dummy.next;
    
    while(next){
        if(count%2 === 0){
            current.next = next.next;
            next.next = current;
            prev.next = next;
            next = current.next;
            count++
        }else{
            prev = current;
            current = next;
            next = next.next;
            count++
        }
    }
    return dummy.next
};