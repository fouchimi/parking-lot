angular.module("parking")
  .factory("parkingService", ["parkingConfig", function(parkingConfig){
   const _calculateTicket = function(car) {
     const departHour = new Date().getHours();
     const entranceHour = car.entrance.getHours();
     const parkingPeriod = departHour - entranceHour;
     const parkingPrice = parkingPeriod * parkingConfig.parkingRate;
    
     return {
       period: parkingPeriod,
       price: parkingPrice	     
     };
   };
   return {
     calculateTicket: _calculateTicket
   }	  
}]);
