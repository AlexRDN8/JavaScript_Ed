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
  for (const word of arrayOfWords) {
    
  }
  //return arrayOfWords;
}
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))
// не сделал.