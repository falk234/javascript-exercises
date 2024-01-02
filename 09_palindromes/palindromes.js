// Version without word_splitting
const palindromes = function (myString) {

// Transform whole sentence to character array
    const characterArray=myString.split("");
// Remove  all non-letters from character array
// => create new array if symbol is a number or a real character (upper and lowercase is different)
    const filteredCharacterArray = characterArray.filter( (char) => /^[0-9]*$/.test(char) || char.toLowerCase() != char.toUpperCase());
// Join array back to string
    let filteredString = filteredCharacterArray.join('');
// reverse string
    let reversedFilteredString = filteredCharacterArray.reverse().join('');
// return result of comparison
    return (filteredString.toLowerCase()===reversedFilteredString.toLowerCase());
};


// Do not edit below this line
module.exports = palindromes;
