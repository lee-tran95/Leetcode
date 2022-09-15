var carFleet = function(target, position, speed) {
    let pairs = [];
    let stack = [];
    for(let i = 0; i < position.length; i++){
        pairs.push([position[i],speed[i]])
    }
    pairs = pairs.sort((a,b) => b[0] - a[0])
    for(let i = 0; i < pairs.length; i++){
        let current = (target - pairs[i][0]) / pairs[i][1]
        if(stack.length >= 1){
            if(stack[stack.length-1] < current){
                stack.push(current)
            }
        }else{
            stack.push(current)
        }
    }
    return stack.length
};

// O(nlogn) time complexity
// O(n) space complexity