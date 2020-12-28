function sumOfAllOddNumbers(nums) {
  let sum = 0;

  nums.forEach((num) => {
    if (nums % 2 === 1) {
      sum++;
    }
  });
  return sum;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;