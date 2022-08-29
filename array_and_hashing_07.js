// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

var isValidSudoku = function(board) {
    let row = new Array();
    let col = new Array();
    let box = new Array();
    
    for(let i = 0; i < 9; i++){
        row.push(new Set());
        col.push(new Set());
        box.push(new Set());
    }

    
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let cell = board[r][c];
            if(cell === '.') continue
            let boxKey = Math.floor(r/3)*3 + Math.floor(c/3)
            if(row[r].has(cell) || col[c].has(cell) || box[boxKey].has(cell)){
                return false
            }else{
                row[r].add(cell)
                col[c].add(cell)
                box[boxKey].add(cell)
            }
        }
    }
    return true
}

// O(n^2) Time
// O(1) Space