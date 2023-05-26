
/*
A Toeplitz matrix is one where all elements along diagonals from top left to bottom right are the same. Given a matrix, return true if it is a Toeplitz matrix and false otherwise.

Follow-up:
What if a Toeplitz matrix is allowed to have the same elements, either from top left to bottom right or from top right to bottom left? Can you minimally refactor and adapt your solution to test for this new variation?
 

EXAMPLE(S)
This is a Toeplitz matrix:
1  2  3  4
5  1  2  3
6  5  1  2
7  6  5  1

This is not a Toeplitz matrix:
1  2
2  2
 */


function isToeplitz(input) {

    return topLeftToBottomRight(input) || topRightToBottomRight(input)
  }
  
  function checkDiagonals(matrix, row, column, row_inc, column_inc){
    let value = matrix[row][column]
  
    while (column < matrix[0].length && row < matrix.length && row >=0 && column >= 0) {
      if (value != matrix[row][column]) {
        return false
      }
      row += row_inc
      column += column_inc
    }
    return true
  
  }
  
  function topLeftToBottomRight(input){
    for(let i = 0; i < input[0].length; i++){
      if(!checkDiagonals(input, i, 0, 1, 1)) return false
    }
  
    for(let i = 0; i < input.length; i++){
      if(!checkDiagonals(input, 0, i, 1, 1)) return false
    }
    return true
  }
  
  function topRightToBottomRight(input){
    for(let i = input[0].length - 1; i >= 0; i--){
      if(!checkDiagonals(input, i, input[0].length - 1, 1 , -1)) return false
    }
  
    for(let i = 0; i < input.length; i++){
      if(!checkDiagonals(input, 0, i, 1, -1)) return false
    }
    return true
  }