const removeFromArray = function(input, ...removed ) {

    for (remove of removed){
        const index = input.indexOf(remove);
        if (index > -1){
            input.splice(index, 1)
        }
    }

    return input
}

// const removeFromArray = function(arr, value) {
//     var index = arr.indexOf(value);
//     if (index > -1) {
//       arr.splice(index, 1);
//     }
//     return arr;

// };
// Do not edit below this line
module.exports = removeFromArray;
