// You have n  tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

 

// Example 1:

// Input: tiles = "AAB"
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
// Example 2:

// Input: tiles = "AAABBC"
// Output: 188
// Example 3:

// Input: tiles = "V"
// Output: 1

var numTilePossibilities = function(tiles) {
    const map = {};
    for(let c of tiles){
        map[c] = (map[c] || 0)+1
    }
    
    function findAllSubSet(hMap){
        let sum = 0;
        for(let key in hMap){
            if(hMap[key] === 0) continue;
            sum++
            hMap[key] = hMap[key] - 1
            sum += findAllSubSet(hMap)
            hMap[key] = hMap[key] + 1
        }
        return sum
    }
    
   return findAllSubSet(map)
};