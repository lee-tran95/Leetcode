// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.


//recursive solutiion
var change = function(amount, coins) {
    let index = 0;
    function combination(amount,coins,index){
        if(amount === 0) return 1
        if(amount < 0) return 0;

        let numOfCombination = 0;
        for(let i = index; i < coins.length; i++){
            numOfCombination += combination(amount-coins[i],coins,i)
        }
        return numOfCombination
    }
    return combination(amount,coins,index)
};  

//dynamic programming solution
var change = function(amount, coins) {
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1

    for(let coin of coins){
        for(let i = coin; i <= amount; i++){
            dp[i] += dp[i-coin]
        }
    }
    return dp[amount]
}; 