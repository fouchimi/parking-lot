angular.module("parking")
  .directive("alert", function() {
   return {
     templateUrl: "../../views/alert.html",
     replace: true,
     restrict: 'EAM',
     scope: {
        topic: "@topic",
	description: "@description"     
     }
   }
 });
