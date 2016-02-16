function calculate(nestedNums, depth){
    var count = 0;
    
    for(var i = 0; i<nestedNums.length; i ++){
        console.log(nestedNums[i]);
        if(nestedNums[i] instanceof Array){
            count += calculate(nestedNums[i], depth + 1);
        }else{         
            count += nestedNums[i] * depth;
        }
    }
    return count;
}

console.log(calculate([[1,1],2,[1,1]], 1));
console.log(calculate([1,[4,[6]]], 1));
