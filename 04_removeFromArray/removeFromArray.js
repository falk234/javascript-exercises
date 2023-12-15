// let array =[1,2,3,4,5,6];

const removeFromArray = function(...input){
    let toRemove=[];
    let array=[];
    for (let i=0;i<input.length;i++){
        if (i==0){
            array=input[i];
        }else{
            toRemove.push(input[i]);
        }
    }     
    // console.log("Array: " + array);
    // console.log("toRemove: " + toRemove);

    for (let i=0;i<array.length;i++){
        for (let j=0;j<toRemove.length;j++){
            if (array[i]===toRemove[j]){
                array.splice(i--,1);
            }
        }
    }

    // console.log("Neues Array: " + array);

    return array;
}

// removeFromArray(array,3,4,5);

// Do not edit below this line
module.exports = removeFromArray;