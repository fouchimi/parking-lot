angular.module("parking")
  .directive("alert", function() {
   return {
     templateUrl: "../../views/alert.html",
     replace: true,
     restrict: 'EAM',
     transclude: true,	   
     scope: {
        topic: "@",
	close: "&close"     
     }
   }
 });
