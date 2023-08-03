// Q. Given a string, a target string, and a frequency f, 
// remove the target f number of times from the beginning of the input string. 
// If f exceeds the number of target strings appeared in the input string, do nothing.

function solution(string, target, f) {
    let count = 0
    let res = string
    
    for(let i = 0; i < string.length; i++){
        if(string.substring(i, i + target.length) === target && count < f){
            string = string.substring(0, i) + string.substring(i + target.length)
            i--
            count++
        }
    }
    return f > count ? res : string
}