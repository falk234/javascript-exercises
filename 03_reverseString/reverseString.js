const reverseString = function(string) {
    let newString='';
    for (let i=0;i<=string.length-1;i++){
        newString+=string.substr(string.length-i-1,1);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
