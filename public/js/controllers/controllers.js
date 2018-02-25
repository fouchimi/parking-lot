angular.module("parking", [])
  .controller("parkingCtrl", function($scope){
     $scope.appTitle = "[Pack] Parking";
     $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];     
     $scope.cars = [];
     $scope.showAlert = true;	  
     $scope.alertTopic = "Something went wrong";
     $scope.alertMessage = "You must inform the plate and the color of the car!"
     $scope.park = function(car) {
        car.entrance = new Date();		  
        $scope.cars.push(car);
	delete $scope.car;     
     } 
     $scope.closeAlert = function() {
        $scope.showAlert = false;
     }
});
