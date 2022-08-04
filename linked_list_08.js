// Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

// Implement the Solution class:

// Solution(ListNode head) Initializes the object with the head of the singly-linked list head.
// int getRandom() Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be chosen.
 

// Example 1:


// Input
// ["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
// [[[1, 2, 3]], [], [], [], [], []]
// Output
// [null, 1, 3, 2, 2, 3]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.getRandom(); // return 1
// solution.getRandom(); // return 3
// solution.getRandom(); // return 2
// solution.getRandom(); // return 2
// solution.getRandom(); // return 3
// // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.

class Solution {
    constructor(head) {
        this.head = head
        this.count = 0;
        let curr = head
        while(curr){
            curr = curr.next
            this.count++
        }
    }
    getRandom = function() {
        let curr = this.head
        let nums = Math.floor(Math.random()*this.count)
        while(nums > 0){
            curr = curr.next
            nums--
        }
        return curr.val
    };
};

class Solution {
    constructor(head) {
        this.array = []
        let curr = head
        while(curr){
            this.array.push(curr.val)
            curr = curr.next
        }
    }
    getRandom = function() {
        return this.array[Math.floor(Math.random()*this.array.length)]
    }
};