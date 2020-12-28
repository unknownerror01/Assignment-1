function countOfAllNumbersSmallerThanTarget(nums, target) {
 let counter = 0;

 nums.forEach((num) =>{
   if (nums < target){
     counter++;
   }
 });
 return counter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;