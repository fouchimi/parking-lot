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
      transclude: true,
      controller: function($scope, $element, $attrs, $transclude) {
        const accordionItems = [];
        const addAccordionItem = function(accordionScope) {
          accordionItems.push(accordionScope);		
	}
	const closeAll = function() {
	  accordionItems.forEach(accordionScope => {accordionScope.active = false });
	}
	return {
	  addAccordionItem: addAccordionItem,
          closeAll: closeAll		
	};
      }	    
    };
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
          ctrl.addAccordionItem(scope);
	  element.bind("click", function(){
          ctrl.closeAll();		  
	  scope.$apply(function() {
	   scope.active = !scope.active;  
	  });
	});
      }
    };
});
