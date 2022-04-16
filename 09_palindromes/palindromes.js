const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");
    strNoSpace = str.split(' ').join("")
    strList = strNoSpace.split("")
    revStr = strNoSpace.toLowerCase().split("").reverse().join(""); 
    if(strNoSpace === revStr){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
