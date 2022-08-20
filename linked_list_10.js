// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

var reorderList = function(head) {
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    let mid = slow;
    let next = null;
    let prev = null;
    while(mid){
        next = mid.next;
        mid.next = prev;
        prev = mid;
        mid = next;
    }
    
    let curr = head;
    
    while(curr){
        let next = curr.next
        let prevNext = prev.next
        curr.next = prev;
        prev.next = next;
        prev = prevNext
        curr = next
        
    }
};

var reorderList = function(head) {
    let slow = head
    let fast = head

    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    let mid = slow;
    let prev = null;
    let next = null;
    while(mid){
        next = mid.next;
        mid.next = prev;
        prev = mid
        mid = next
    }

    let current = head;
    while(current){
        next = current.next;
        current.next = prev;
        prevNext = prev.next
        prev.next = next;
        current = next;
        prev = prevNext;
    }
    return head
};

// O(n) time complexity
// O(1) space complexity