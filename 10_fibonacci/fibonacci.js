function fibonacci(n) {
    if(n<0){
        return "OOPS"
    }
    else{
        var fibonacci = [];
        fibonacci[0] = 0;
        fibonacci[1] = 1;
        for (var i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        }
        console.log(fibonacci);
        return fibonacci[n]
    }        
  }
  
// Do not edit below this line
module.exports = fibonacci;
