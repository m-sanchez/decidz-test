(function() {
  'use strict';

  angular
    .module('decidzTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
