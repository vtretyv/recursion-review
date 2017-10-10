// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var parseJSON = function(json) {
  // your code goes here
var myArr = json.split("");
var myBracket = json[0];
var myType;
var noBracket = json.slice(1,-1);

//Arrays
if (myBracket == "["){
  
  myType = "Array";
  if (json == "[]"){
    return [];
}
  var tempArr = noBracket.split(", ");
  tempArr.map(function(word){
    return word.split('"').join("");
})
}


//Objects
else if (myBracket == "{"){
  var myObj = {};
  myType = "Object";
}



};




