/*
'''
Print all K-length binary strings without consecutive 1s

Given an integer *maxLen*, print all binary strings of size *maxLen* that don't have 1s next to each other. That is, no string should contain the substring 11, 111, 1111, 11111, etc. You can assume *maxLen* > 0.
 

EXAMPLE(S)
printBinaryWithoutConsecutive1s(maxLen=2)
00
01
10

printBinaryWithoutConsecutive1s(maxLen=3)
000
001
010
100
101
 

FUNCTION SIGNATURE
function printBinaryWithoutConsecutive1s(maxLen) {
def printBinaryWithoutConsecutive1s(maxLen: int) -> None:
'''
*/

function printBinaryWithoutConsecutive1s(maxLen) {
    if (maxLen < 1) return
  
    generateStrings(maxLen, '0')
    generateStrings(maxLen, '1')
  }
  
  function generateStrings(maxLen, str) {
    if (str.length === maxLen) {
      console.log(str)
      return
    }
  
    if (str[str.length-1] === '0') {
      generateStrings(maxLen, str + '0')
      generateStrings(maxLen, str + '1')
    } else {
      generateStrings(maxLen, str + '0')
    }
  }
  
  function printBinaryWithoutConsecutive1s(maxLen) {
    // binary string cannot be less than or equal to 1 char
    if (maxLen < 1) return; 
  
    function helper(string) {
      if (string.length === maxLen) {
        console.log(string)
        return;
      }
  
      // only recurse down 1 path if the previous character was not '1'
      if (string[string.length - 1] !== '1')
        helper(string + '1')
  
      helper(string + '0')
    }
  
    helper('0')
    helper('1')
  }
  
  printBinaryWithoutConsecutive1s(1)
  // 0
  // 1
  
  console.log("=======")
  printBinaryWithoutConsecutive1s(2)
  // 00
  // 01
  // 10
  
  console.log("=======")
  printBinaryWithoutConsecutive1s(3)
  // 000
  // 001
  // 010
  // 100
  // 101
  
  console.log("=======")
  printBinaryWithoutConsecutive1s(4)
  // 0000
  // 0001
  // 0010
  // 0100
  // 0101
  // 1000
  // 1001
  // 1010
  
  console.log("=======")
  printBinaryWithoutConsecutive1s(5)
  // 00000
  // 00001
  // 00010
  // 00100
  // 00101
  // 01000
  // 01001
  // 01010
  // 10000
  // 10001
  // 10010
  // 10100
  // 10101