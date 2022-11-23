// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

function minRewards(scores) {
    let lastMaxIndex = 0;
    let lastMaxReward = 1;
    let previousReward = 1;
    let totalReward = 1;
  
    for(let i = 1; i < scores.length; i++){
      if(scores[i] > scores[i-1]){
        totalReward += previousReward + 1;
        previousReward++;
        lastMaxIndex = i;
        lastMaxReward = previousReward
      }else{
        if(previousReward == 1){
          totalReward += i - lastMaxIndex
          if(i-lastMaxIndex >= lastMaxReward){
            totalReward++
          }
        }else{
          totalReward += 1
        }
        previousReward = 1
      }
    }
    return totalReward
  }