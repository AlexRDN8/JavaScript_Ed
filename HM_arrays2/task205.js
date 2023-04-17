/*
Complete the method so that it formats the words into a single comma separated value. 
The last word should be separated by the word 'and' instead of a comma. 
The method takes in an array of strings and returns a single formatted string.
Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string 
being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/
function formatWords(words){
    if (words === null){
        return "";
    }
    let newWords = words.filter(word => word != "")
    if (newWords.length > 1){
        const firstPart = newWords
            .slice(0,-1)
            .join(", ");
        return result = firstPart.concat(" and " + newWords[newWords.length - 1]);
    }else{
        return newWords.toString();
    }   
}
console.log(formatWords(null));

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""