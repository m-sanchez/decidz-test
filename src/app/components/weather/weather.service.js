(function (){
  angular.module('decidzTest')
    .factory('weatherService', function($http,$q){
      return{

        checkWeatherCoords: function(lat,long){
          var deferred = $q.defer();
          var promise = deferred.promise;
          $http({
            method: 'GET',
            dataType: "jsonp",
            url: "http://cors.io/?u=https://api.forecast.io/forecast/acc5f50221d8db5d8e2ade64c6fa7e79/"+lat+","+long,
            callback:"JSON_CALLBACK"
          }).then(function(result){
            deferred.resolve(result.data.daily);
          });

          return promise;

        },

        checkWeatherCoordsHourly: function(lat,long){
          var deferred = $q.defer();
          var promise = deferred.promise;
          $http({
            method: 'GET',
            dataType: "jsonp",
            url: "http://cors.io/?u=https://api.forecast.io/forecast/acc5f50221d8db5d8e2ade64c6fa7e79/"+lat+","+long,
            callback:"JSON_CALLBACK"
          }).then(function(result){
            deferred.resolve(result.data.hourly);
          });
          return promise;
        },

        saveTemperature:function(lat,long){
          var deferred = $q.defer();
          var promise = deferred.promise;
          $http({
            method: 'GET',
            dataType: "jsonp",
            url: "http://cors.io/?u=https://api.forecast.io/forecast/acc5f50221d8db5d8e2ade64c6fa7e79/"+lat+","+long,
            callback:"JSON_CALLBACK"
          }).then(function(result){
            deferred.resolve(result.data.currently.temperature);
            localStorage.temperature=result.data.currently.temperature;
          });
          return promise;
        }
      }
    })

})();
