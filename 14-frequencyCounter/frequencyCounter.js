function frequencyCounter(word) {
let frequencyCounter = {}

for (let i = 0; i < word.length; i++){
   if (frequencyCounter[word[i]]){
     frequencyCounter[word[i]] += 1
   } else {
     frequencyCounter[word[i]] = 1
   }
}
console.log(word)
}

// Do not edit this line;
module.exports = frequencyCounter;