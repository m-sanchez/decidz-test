(function() {
  'use strict';

  angular
    .module('decidzTest')
    .directive('weather', weather);

  /** @ngInject */
  function weather(weatherService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/weather/weather.html',
      scope: {
        creationDate: '='
      },
      controller: WeatherController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function WeatherController(moment) {
      var vm = this;
      vm.loaded=false;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (result) {
          console.log(result)
          weatherService.checkWeatherCoordsHourly(result.coords.latitude, result.coords.longitude).then(function (result) {
            vm.hours = result.data;
            vm.loaded=true;
          });
        });
      } else {
        weatherService.checkWeatherCoordsHourly("51.50722","­0.12750").then(function (result) {
          vm.hours = result.data;
          vm.loaded=true;
          console.log(main.weatherLondon)
        });
      }
    }
  }

})();
