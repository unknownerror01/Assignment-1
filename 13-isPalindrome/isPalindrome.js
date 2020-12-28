function isPalindrome(word) {
  // Insert code here;
  let start = 0; 
  let end = word.split(" ").reverse().join();

  while (start <= end) {
    if (word[start] !== word[end])
    return false;
    start++;
    end--;
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;