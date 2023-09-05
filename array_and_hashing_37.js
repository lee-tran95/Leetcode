/*
'''
❓ PROMPT
You're practicing the riffle shuffle in cardistry (https://youtube.com/shorts/NFnJoWcaL_0). You start with the 26 red cards in one hand and the 26 black cards in the other and try to interweave them perfectly, meaning the colors alternate every card once you merge them into a single 52-card deck.

You build a machine that accepts a deck of cards to automatically determine the size of your biggest mistake after the merge. Currently, it can interpret the card's color; you need to write the algorithm.

Example(s)
biggestMistake(["B", "B", "R", "B", "R"]) is 2
biggestMistake(["R", "B", "R", "B", "B"]) is 2
biggestMistake(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B", "R"]) is 1
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function biggestMistake(deck) {
def biggestMistake(deck: list[str]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
function biggestMistake(deck){
    let max = 1;
    let currMax = 1;
    let curr = ''
    for(const card of deck){
      if(card === curr){
        currMax++
        max = Math.max(currMax, max)
      }else{
        curr = card
        currMax = 1;
      }
    }
    return max
  }
  
  console.log(biggestMistake(["R", "R", "R", "R", "R"]) == 5)
  console.log(biggestMistake(["R", "B", "R", "R", "R"]) == 3)
  console.log(biggestMistake(["B", "B", "R", "B", "R"]) == 2)
  console.log(biggestMistake(["R", "B", "R", "B", "B"]) == 2)
  console.log(biggestMistake(["B", "B", "R", "R", "B", "B", "R", "R", "B", "R"]) == 2)
  console.log(biggestMistake(["R", "B", "R", "B", "B", "B", "R", "R", "B", "B", "R"]) == 3)
  console.log(biggestMistake(["B", "R", "B", "R", "B", "R", "B", "R", "B", "R"]) == 1)
  console.log(biggestMistake(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B", "R"]) == 1)