// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode()
    let current = dummy;
    let carry = 0;
    let val1 = -1;
    let val2 = -1
    let value = -1
    while(l1 || l2 || carry){
        if(l1){
            val1 = l1.val
        }else{
            val1 = 0;
        }
        if(l2){
            val2 = l2.val;
        }else{
            val2 = 0;
        }
        
        value = val1 + val2 + carry;
        carry = Math.floor(value/10)
        value = value%10
        current.next = new ListNode(value)
        
        current = current.next
        
        if(l1){
            l1 = l1.next;
        }else{
            l1 = null
        }
        if(l2){
            l2 = l2.next;
        }else{
            l2 = null
        }
    }
    return dummy.next
};

var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2){
        return null
    }else if(!l1){
        return l2
    }else if(!l2){
        return l1
    }
    let dummy = new ListNode(0)
    let current = dummy;
    let carry = 0;
    let remainder = 0;

    while(l1 && l2){
        remainder = (l1.val + l2.val + carry) %10
        carry = Math.floor((l1.val + l2.val + carry) / 10)
        current.next = new ListNode(remainder)
        current = current.next
        l1 = l1.next
        l2 = l2.next
    }

    if(l1){
        while(l1){
            remainder = (l1.val + carry) %10
            carry = Math.floor((l1.val + carry) / 10)
            current.next = new ListNode(remainder)
            current = current.next
            l1 = l1.next
        }
    }

    if(l2){
        while(l2){
            remainder = (l2.val + carry) %10
            carry = Math.floor((l2.val + carry) / 10)
            current.next = new ListNode(remainder)
            current = current.next
            l2 = l2.next
        }
    }
    if(carry > 0){
            current.next = new ListNode(carry)
        }
    return dummy.next
};

// O(n+m) time complexity
// O(1) space complexit