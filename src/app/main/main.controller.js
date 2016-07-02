(function() {
  'use strict';

  angular
    .module('decidzTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,weatherService) {
    var main = this;
main.loaded=false;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(result){
        weatherService.saveTemperature(result.coords.latitude,result.coords.longitude).then(
          function(res){
            console.log("saved: "+res);
          }
          );
        weatherService.checkWeatherCoords(result.coords.latitude,result.coords.longitude).then(function(result){
          main.weatherCurrentLocation=result.data;
          main.loaded=true;

        });
      });
    }else {
      weatherService.checkWeatherCoords("51.50722","­0.12750").then(function(result){
        main.weatherCurrentLocation=result.data;
        main.loaded=true;

        console.log( main.weatherLondon)
      });
    }
  }
})();
