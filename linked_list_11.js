// 146. LRU Cache
// Medium

// 14431

// 571

// Add to List

// Share
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

 

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

class Node {
    constructor(key,value,next=null,prev=null){
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    constructor(cap){
        this.cap = cap
        this.size = 0;
        this.cache = {};
        this.left = new Node(0,0)
        this.right = new Node(0,0)
        this.left.next = this.right;
        this.right.prev = this.left;
    }


    remove(node){
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }
    
    insert(node){
        let prev = this.right.prev
        let next = this.right
        prev.next = node
        next.prev = node
        node.next = next
        node.prev = prev
    }
    get(key){
        if(this.cache[key]!== undefined){
            this.remove(this.cache[key]);
            this.insert(this.cache[key]);
            return this.cache[key].value;
        }else{
            return -1;
        }
    }
    put(key,value){
        if(this.cache[key]!== undefined){
            this.remove(this.cache[key])
            this.size--
        }
        this.cache[key] = new Node(key,value)
        this.insert(this.cache[key])
        this.size++
        if(this.size > this.cap){
            let lru = this.left.next
            this.remove(lru)
            delete this.cache[lru.key]
            this.size--
        }
    }
}

class Node {
    constructor(key, value, next = null, prev = null){
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    constructor(cap){
        this.cap = cap;
        this.size = 0;
        this.cache = {};
        this.left = new Node(0,0)
        this.right = new Node(0,0)
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node){
        let next = node.next;
        let prev = node.prev;
        next.prev = prev;
        prev.next = next;
    }

    insert(node){
        let prev = this.right.prev;
        let next = this.right;
        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
    }

    get(key){
        if(this.cache[key] !== undefined){
            this.remove(this.cache[key]);
            this.insert(this.cache[key]);
            return this.cache[key].value
        }else{
            return -1
        }
    }

    put(key,value){
        if(this.cache[key]!== undefined){
            this.remove(this.cache[key]);
            this.size--;
        }
        this.cache[key] = new Node(key,value)
        this.insert(this.cache[key])
        this.size++
        if(this.size > this.cap){
            let lru = this.left.next
            this.remove(lru)
            delete this.cache[lru.key]
            this.size--
        }
    }
}
