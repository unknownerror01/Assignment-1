function titleCaseEdit(title) {
var newtitle ="";
newtitle+=title[0].toUpperCase();
for(var x=1; x<title.length; x++){
  if(title[x-1]===" ")newtitle+=title[x].toUpperCase();
  else newtitle+=[x];
}
title=newtitle;
console.log(title);
}

// Do not edit this line;
module.exports = titleCaseEdit;