// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

var mergeKLists = function(lists) {
    let prevList = null
    // merge each list 1 by 1
    for(let i = 0; i < lists.length; i++){
       prevList = mergeList(prevList,lists[i]) 
    }
    return prevList
};

// merge 2 list
var mergeList = function(l1,l2){
    let dummy = new ListNode(null)
    let curr = dummy;
    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next
        }else{
            curr.next = l2;
            l2 = l2.next
        }
        curr = curr.next
    }
    if(l1){
        curr.next = l1
    }
    if(l2){
        curr.next = l2
    }
    return dummy.next
}

// O(n) time complexity
// O(n) space complexity