const sumAll = function(start, end) {
    list=[];
    if (start > end){
        oldEnd = end
        end = start
        start = oldEnd
    }
    if (start < 0 || end < 0){
        return 'ERROR'
    }
    if (typeof(start)!='number' || typeof(end)!='number'){
        return 'ERROR'
    }
    for (i = start; i>=start && i<=end; i++){
        list.push(i)
    }
    sum=0
    for (num of list){
        sum=sum+num
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
