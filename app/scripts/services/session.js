'use strict';

angular.module('azuretestApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
