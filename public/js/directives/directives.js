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
 })
 .directive("accordion", function(){
    return {
      templateUrl: "../../views/accordion.html",
      restrict: "E",
      transclude: true	    
    }
 })
 .directive("accordionItem", function(){
    return {
      templateUrl: "../../views/accordionItem.html",
      restrict: "E",
      scope: {
        title: "@"
      },
      transclude: true,
      require: '^accordion',	    
      link: function(scope, element, attrs, ctrl, transcludeFn) {
        element.bind("click", function(){
	  scope.$apply(function() {
	   scope.active = !scope.active;  
	  });
	});
      }
    };
});
