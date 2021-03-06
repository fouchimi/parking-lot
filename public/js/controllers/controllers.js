angular.module("parking", [])
  .controller("parkingCtrl", ["$scope","$filter", "parkingService", function($scope, $filter, parkingService){
     $scope.appTitle = $filter("uppercase")("[Pack] Parking");
     $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];     
     $scope.cars = [];
     $scope.showAlert = true;	  
     $scope.park = function(car) {
        car.entrance = new Date();
	car.plate = $filter("plate")(car.plate);     
        $scope.cars.push(car);
	delete $scope.car;     
     } 
     
     $scope.calculateTicket = function(car) {
        $scope.ticket = parkingService.calculateTicket(car);
     }	  
	  
     $scope.closeAlert = function() {
        $scope.showAlert = false;
     }
}]);
