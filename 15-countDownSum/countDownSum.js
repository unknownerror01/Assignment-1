class MySolution {
  countDownSum(num) {
   if(num === 1) return sum + 1;
    return this.countDownSum(num - 1, (sum += num))
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;