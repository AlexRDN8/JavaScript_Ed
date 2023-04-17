/*
You've just finished writing the last chapter for your novel when a virus suddenly infects 
your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. 
Write a function which will:
a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)
b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is 
in lower case.
Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.
*/
function proofread (str) { 
    const newString = str
    .toLowerCase()
    .replaceAll("ie", "ei")
    .split(". ") // Как одновременно разбить и по другим знакам окончания строки?
    .map(sentense => sentense[0].toUpperCase() + sentense.slice(1))
    
    return newString.join(". "); 
    } 
        
console.log(proofread ("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."));