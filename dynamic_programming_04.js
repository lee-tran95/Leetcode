// min number of jumps

//find the min number of jumps to reach the end of the array and each number in the array
//represents the number of steps you can take

function minNumberOfJumps(array) {
    const jumps = new Array(array.length).fill(Infinity)
    jumps[0] = 0;
  
    for(let i = 1; i < array.length; i++){
      for(let j = 0; j < i; j++){
        if(array[j] >= i - j){
          jumps[i] = Math.min(jumps[j]+ 1, jumps[i])
        }
      }
    }
    return jumps[jumps.length-1]
  }