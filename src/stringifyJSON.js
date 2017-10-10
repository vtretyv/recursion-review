// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
var res = "";

/*primitive types boolean, number, string, null, undefined
advacned types: arrays, objects*/
//Primitives
if ((typeof obj === "boolean") || (typeof obj === "number")){
  res+= String(obj);
}
if (typeof obj === "string"){
  res+= '"'+obj+'"';
}
if ((obj === null)){
  res+= String(obj); //Check this line
}


//Arrays
if (Array.isArray(obj)){
  if(obj === "[]");
    
  res+= "[";
  for (var i = 0; i < obj.length; i++){
  res+= stringifyJSON(obj[i]);
   if(i != obj.length-1){
  res+= ",";  
}
}
  res+= "]";
}



//Objects

if ((obj instanceof Object) && !(Array.isArray(obj) && !(typeof obj === "function"))) {

var count = 0;
res+= "{";
  for(var key in obj){
    if (obj[key] !== undefined && typeof obj[key] !== "function") {
//console.log(obj, typeof obj)
//console.log(obj[key], typeof obj[key])
    res+= stringifyJSON(key);
    res+= ":";
    res+= stringifyJSON(obj[key]);
    if(count < (Object.keys(obj).length)-1){
      res+= ",";
    }
    count ++;

    //if (Object.key(obj).indexOf(key) != Object.keys(obj)[Object.key(obj).length-1])
}
}
  res+="}";
}
//console.log(res, typeof(res));
return res;
};

