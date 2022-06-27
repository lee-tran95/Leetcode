// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function(list1, list2) {
    let currentOne = list1;
    let currentTwo = list2;
    
    let dummy = new ListNode();
    let tail = dummy;
    
    while(currentOne && currentTwo){
        if(currentOne.val <= currentTwo.val){
            tail.next = currentOne;
            currentOne = currentOne.next
        }else{
            tail.next = currentTwo;
            currentTwo = currentTwo.next
        }
        tail = tail.next
    }
    
    if(currentOne){
        tail.next = currentOne
    }else if(currentTwo){
        tail.next = currentTwo
    }
    
    return dummy.next
};