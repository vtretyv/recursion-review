// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  // your code here 
  function recurseList(element){
  

    if (_(element.classList).contains(className)){ 
    result.push(element);
    }
    (_(element.childNodes)).forEach(function(item){
      recurseList(item);
});
   /// for (child in element.childNodes) {
     /// recurseList(child);
    ///}  
    }
recurseList(document.body);
return result;
};
