const removeFromArray = function(...input){
    let toRemove=[];
    let array=[];
    for (let i=0;i<input.length;i++){
        (i==0)?array=input[i]:toRemove.push(input[i]);
    }

    for (let i=0;i<array.length;i++){
        for (let j=0;j<toRemove.length;j++){
            if (array[i]===toRemove[j]){
                array.splice(i--,1);
            }
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;