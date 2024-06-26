/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    
    //if n is 0, no flattening is required, hence retunr the original array
    
    if(n ==0){
        return arr;
    }
    
    //create an answer array to store final result
    
    let answer = [];
    
    //traverse the array
    
    for(let i = 0; i< arr.length; i++){
        //check if element is instance of array and depth is not equal to 0
        
        if(n> 0 && Array.isArray(arr[i])){
            //recursively call the function for this array and push the flatten array to the answer array
            answer.push(...flat(arr[i],n-1));
        }else {
            // else directly push the current array
            answer.push(arr[i]);
        }
    }
    return answer;
};