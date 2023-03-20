// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = function(array) {
    // If the input in empty
    if(array.length<0){
        return 0;
    }
    // If the input contains only one number
    if(array.length==1){
        array[0]=array[0]*array[0];
        return array;
    }
    // If the input contains more than one number
    for (let i=0; i<array.length;i++){
        let temp = array[i]*array[i];
        array[i]=temp;
    }   
    array.sort(function(a,b){return a-b});
    return array;
};

// Example of an input array
// array = [-7,-3,2,3,11]
