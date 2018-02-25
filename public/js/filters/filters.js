angular.module("parking")
  .filter("plate", function(){
     return function(input) {
       let firstPart = input.substring(0, 3);
       let secondPart = input.substring(3);
       return firstPart + "-" + secondPart;	     
     }
});
