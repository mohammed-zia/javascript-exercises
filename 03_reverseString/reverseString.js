const reverseString = function(stringIn) {
    let array = stringIn.split('')
    arrayReverse = array.reverse()
    stringOut = arrayReverse.join('')
    return stringOut
};

// Do not edit below this line
module.exports = reverseString;
