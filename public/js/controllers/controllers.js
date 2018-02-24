var parking = angular.module("parking", []);
   parking.controller("parkingCtrl", function($scope){
     $scope.appTitle = "[Pack] Parking";
     $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];     
     $scope.cars = [];
     $scope.car = {};     
     $scope.park = function(car) {
        car.entrance = new Date();		  
        $scope.cars.push(car);		   
     } 
     $scope.select = function() {
	 console.log($scope.car.selected);	
     }      
});
