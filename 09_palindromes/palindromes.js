// Version without word_splitting
const palindromes = function (myString) {
    let filteredString = myString.split('').filter((character) => character.toLowerCase() != character.toLowerCase()).join('');
    let reversedFilteredString = filteredString.split('').reverse().join('');
    return reversedFilteredString == filteredString;
};

// // Long Version
// // Transform whole sentence to character array
//     const characterArray=myString.split("");
// // Remove  all non-letters from character array
//     const filteredCharacterArray = characterArray.filter((character) => character.toLowerCase() != character.toUpperCase());
// // Join array back to string
//     filteredString = filteredCharacterArray.join('');
// // reverse string
//     let reversedFilteredString = filteredCharacterArray.reverse().join('');
// // return result of comparison
//     return (filteredString===reversedFilteredString);
//     };


// Do not edit below this line
module.exports = palindromes;
