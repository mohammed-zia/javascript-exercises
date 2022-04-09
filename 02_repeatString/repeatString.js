const repeatString = function(input, repeats) {
    output = input;
    list=[]
    if (repeats < 0) {
        return "ERROR"
    }
    else{
        while (repeats > 0){
            list.push(output);
            repeats--
        }
        stringOut=list.join('')
        return stringOut
    }
};

// Do not edit below this line
module.exports = repeatString;
