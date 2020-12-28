function setUnionOfAnyAmountOfSets(...args) {
  const mySet = newSet();

  args.forEach(args =>{
    for (let a of args){
      mySet.add(a);
    }
  });
  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;