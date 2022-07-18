// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

class TrieNode {
    constructor(key){
        this.key = key;
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode(null)
    }
    
    insert(word){
        let current = this.root;
        for(let char of word){
            if(current.children[char] === undefined){
                current.children[char] = new TrieNode(char)
            }
            current = current.children[char]
        }
        current.endOfWord = true
    }
    
    search(word){
        let current = this.root;
        for(let char of word){
            if(current.children[char] === undefined){
                return false
            }
            current = current.children[char]
        }
        return current.endOfWord
    }
    
    startsWith(word){
        let current = this.root;
        for(let char of word){
            if(current.children[char] === undefined){
                return false
            }
            current = current.children[char];
        }
        return true
    }
}