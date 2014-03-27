'use strict';

var epicookbook = angular.module('epicookbook', [
  'ngRoute',
  'epicookbookControllers'
]);

epicookbook.config(['$routeProvider',
  function($routeProvider){
    when('/components', {
      templateUrl: 'partials/components.html',
      controller: 'ComponentsController'
    }).
    otherwise({
      redirectTo: '/components'
    });
  }
]);