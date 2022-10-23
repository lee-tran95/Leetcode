// arrayOne = [-1,5-10,20,28,3]
// arrayTwo = [26,134,135,15,17]

// returns [28,26]

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a - b);
    arrayTwo.sort((a,b)=> a - b);
  
    let min = [Number.MIN_VALUE, Number.MAX_VALUE];
    let i = 0;
    let j = 0;
  
    while(i < arrayOne.length && j < arrayTwo.length){
      if(Math.abs(arrayOne[i] - arrayTwo[j]) < Math.abs(min[0] - min[1])){
        min = [arrayOne[i],arrayTwo[j]]
      }
      if(arrayOne[i] < arrayTwo[j]){
        i++
      }else if(arrayOne[i] > arrayTwo[j]){
        j++
      }else if (arrayOne[i] === arrayTwo[j]){
        return [arrayOne[i],arrayTwo[j]]
      }
    }
    return min
  }