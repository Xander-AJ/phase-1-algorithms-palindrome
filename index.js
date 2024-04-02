function isPalindrome(word) {
  // Remove spaces and special characters, and convert to lowercase
  const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
  // Initialize pointers
  let left = 0;
  let right = cleanedWord.length - 1;

  // Loop until pointers meet
  while (left < right) {
    // If characters at pointers are not equal, it's not a palindrome
    if (cleanedWord[left] !== cleanedWord[right]) {
      return false;
    }
    // Move pointers towards each other
    left++;
    right--;
  }
  
  // If loop completes without finding unequal characters, it's a palindrome
  return true;
}

/* 
  Pseudocode:
  - Remove spaces and special characters from the input word
  - Convert the word to lowercase
  - Initialize pointers: one at the beginning of the word and one at the end
  - Loop until the pointers meet:
    - Compare characters at the pointers:
      - If they're not equal, return false
    - Move the pointers towards each other
  - If the loop completes without finding unequal characters, return true

  Written Explanation of the Solution:
  - We first clean the input word by removing spaces and special characters and converting it to lowercase to ensure case-insensitivity.
  - Then, we initialize two pointers, one at the beginning of the word and one at the end.
  - We iterate through the word using these pointers, comparing characters at each position.
  - If we find any unequal characters, we return false, indicating that the word is not a palindrome.
  - If the loop completes without finding any unequal characters, we return true, indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;