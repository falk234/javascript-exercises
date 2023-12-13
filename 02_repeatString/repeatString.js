const repeatString = function(string,number) {
    let returnString='';
    if (number>=0){  
        for (i=0;i<number;i++){
            returnString+=string;
        }
    }else{
        returnString="ERROR"
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
