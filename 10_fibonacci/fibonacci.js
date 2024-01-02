const fibonacci = function(num) {
    const fiboArray = [1,1];
    if (num ==0) return 0;
        else if (num<0){
            return "OOPS";}
    for(let i=2; i<=num-1; i++){
        fiboArray.push(+fiboArray[i-2] + +fiboArray[i-1]);
    }

    return fiboArray[--num];

};

// Fibonacci-Sequenz: "1, 1, 2, 3, 5, 8";

// Do not edit below this line
module.exports = fibonacci;
