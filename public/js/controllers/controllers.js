angular.module("parking", [])
  .controller("parkingCtrl", function($scope){
     $scope.appTitle = "[Pack] Parking";
     $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];     
     $scope.cars = [];
     $scope.showAlert = true;	  
     $scope.park = function(car) {
        car.entrance = new Date();		  
        $scope.cars.push(car);
	delete $scope.car;     
     } 
     $scope.closeAlert = function() {
        $scope.showAlert = false;
     }
});
