/*
Your job is to group the words in anagrams.

What is an anagram ?
star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.

Example
A typical test could be :

// input
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);

// output
[
  ["tsar", "star", "tars"],
  ["rat", "tar"],
  ["cheese"]
]
Helpers
The method assertSimilarUnsorted has been preloaded for you in the Solution Sandbox 
only to compare to arrays without relying on the sorting of the elements.

assertSimilarUnsorted([[1,2], [3]], [[3], [1,2]]); // returns true
Hvae unf !

I'd advise you to find an efficient way for grouping the words in anagrams otherwise 
you'll probably won't pass the heavy superhero test cases
*/
function groupAnagrams(words){
  const arrayOfWords = words.map(word => word.split(""));
  const groupAnagrams = {};
  for (let i = 0; i < arrayOfWords.length; i++) {
    let sortedWord = arrayOfWords[i].sort();
    groupAnagrams[sortedWord] = groupAnagrams[sortedWord] ?? [];
    groupAnagrams[sortedWord].push(words[i])
  }
  return Object.values(groupAnagrams); // ниже вопрос!
  
  // for (const word of arrayOfWords) {
  //   let sortedWord = word.sort();
  //   groupAnagrams[sortedWord] = groupAnagrams[sortedWord] ?? [];
  //   groupAnagrams[sortedWord].push(word.join("")) // почему у меня пушится отсортированное слово, а не обычное?
  // }
  //return Object.values(groupAnagrams);
}
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))