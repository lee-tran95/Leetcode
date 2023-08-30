/*
'''
❓ PROMPT
Write a function to simulate the undo operation in a text editor and outputs the final text after applying all of the commands. The editor supports the following three commands:

"append <char>": Append the character <char> to the end.

"backspace": Delete the last character.

"undo": Undo the most recent change to the document.

The "undo" command should revert the most recent change made to the text. Meaning if the most recent command was "append", it should remove that character. If the subsequent command was "backspace", it should add the character back in.

Example(s)
commands = ["append a", "append b", "backspace", "append c", "undo", "append d", "undo", "append e"]

Output: "ae"

Explanation:
* append a: appends "a"
* append b: appends "b"
* backspace: removes "b"
* append c: appends "c"
* undo: removes "c"
* append d: appends "d"
* undo: removes "d"
* append e: appends "e"
 


 */

function simulateUndo(commands){
    let result = "";
    let previousState = [""]
  
    for(const command of commands){
      let [operation, letter] = command.split(' ')
      if(operation === 'append'){
        previousState.push(result)
        result += letter
      }else if (operation === 'backspace'){
        previousState.push(result)
        result = result.substring(0, result.length - 1)
      }else if (operation === 'undo'){
        result = previousState.pop()
      }
    }
  
    return result
  }
  
  // Test Case 1: Basic operations
  console.log(simulateUndo(["append a", "append b", "append c", "backspace", "undo"]) === 'abc');
  
  // Test Case 2: Multiple undos
  console.log(simulateUndo(["append a", "append b", "append c", "backspace", "undo", "undo"]) === "ab");
  
  // Test Case 3: Empty input
  console.log(simulateUndo([]) === "");
  
  // Test Case 4: Complex operations
  console.log(simulateUndo(["append a", "append b", "backspace", "append c", "undo", "append d", "undo", "append e"]) === "ae");
  
  // Test Case 5: Undo with no history
  console.log(simulateUndo(["undo"]) === "");
  
  // Test Case 6: Backspace with empty text
  console.log(simulateUndo(["backspace"]) === "");
  
  // Test Case 7: Multiple backspaces
  console.log(simulateUndo(["append a", "append b", "append c", "backspace", "backspace"]) === "a");
  
  // Test Case 8: Undo after multiple backspaces
  console.log(simulateUndo(["append a", "append b", "append c", "backspace", "backspace", "undo", "undo"]) === "abc");
  
  // Test Case 9: Continuous undos and backspaces
  console.log(simulateUndo(["append a", "append b", "append c", "undo", "undo", "undo", "backspace", "backspace", "backspace", "append d", "append e", "append f"]) === "def");