angular.module("parking", [])
  .controller("parkingCtrl", function($scope){
     $scope.appTitle = "[Pack] Parking";
     $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];     
     $scope.cars = [];
     $scope.car = {};    
     $scope.alertTopic = "Something went wrong";
     $scope.alertMessage = "You must inform the plate and the color of the car!"
     $scope.park = function(car) {
        car.entrance = new Date();		  
        $scope.cars.push(car);
	$scope.car.plate = "";
        $scope.entrance = ""; 
	$scope.color = "";     
     } 
     $scope.select = function() {
	 console.log($scope.car.selected);	
     }      
});
