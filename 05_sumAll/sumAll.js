const sumAll = function(number1,number2) {
    let tmp=0;
    let sum=0;
    if (number1>number2){
        tmp=number1;
        number1=number2;
        number2=tmp;
    }else if (typeof number1 != "number" || typeof number2 != "number" || number1<0 || number2 <0 ){
        return 'ERROR';
    }

    for(number1;number1<=number2;number1++){
        sum+=number1;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;



// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10


