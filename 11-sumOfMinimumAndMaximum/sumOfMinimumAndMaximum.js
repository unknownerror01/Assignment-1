function sumOfMinimumAndMaximum(nums) {
  var min = nums[0];
  var max = nums[0];
  for (var i = 0; i < nums.length; i++)
  {
    if (nums [i] > nums [i+1])
              min = nums[i];
    else if ( nums[i] < nums [i+1])
              max = nums[i+1];
  }
   return min + max; 
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;