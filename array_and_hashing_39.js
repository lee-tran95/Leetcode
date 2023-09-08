/*
'''
Frequency Stack

Implement a stack that returns the most frequent element when the pop() method is called instead of the last element added. In the event of a tie, pop the last element added into the stack.
 

EXAMPLE(S)
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
 

FUNCTION SIGNATURE
class FreqStack:
    def push(val: int) -> None:
        pass

    def pop() -> Optional[int]:
        pass
'''
{
  5:2
  4:2
  3:1
  8:0
}
maxFreq - 1
{
  1: [1],
  2: []
}
[[5,4,3][],[]]
return 5
*/

class FreqStack{
    constructor(){
      this.frequencyOfValues = {}
      this.maxFreq = 0
      this.timesSeen = {}
    }
  
    push(val){
      this.frequencyOfValues[val] = (this.frequencyOfValues[val] || 0) + 1
      const frequency = this.frequencyOfValues[val];
      
      this.maxFreq = Math.max(this.maxFreq, frequency);
      
      if (this.timesSeen[frequency] === undefined) {
        this.timesSeen[frequency] = []
      }
  
      this.timesSeen[frequency].push(val);
    }
  
    pop(){
      // Edge case max Freq === 0
      if (this.maxFreq === 0) return null;
  
      const value = this.timesSeen[this.maxFreq].pop();
      
      this.frequencyOfValues[value]--
      
      if (this.timesSeen[this.maxFreq].length === 0) this.maxFreq--
  
      return value;
    }
  }
  
  let freqStack = new FreqStack();
  freqStack.push(5); // The stack is [5]
  freqStack.push(7); // The stack is [5,7]
  freqStack.push(5); // The stack is [5,7,5]
  freqStack.push(7); // The stack is [5,7,5,7]
  freqStack.push(4); // The stack is [5,7,5,7,4]
  freqStack.push(5); // The stack is [5,7,5,7,4,5]
  console.log(freqStack.pop(), 5);   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
  console.log(freqStack.pop(), 7);   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
  console.log(freqStack.pop(), 5);   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
  console.log(freqStack.pop(), 4);   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].