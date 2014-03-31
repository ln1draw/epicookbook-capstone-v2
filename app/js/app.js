'use strict';

var epicookbook = angular.module('epicookbook', [
  'ngRoute',
  'epicookbookControllers',
  'UserApp'
]);

epicookbook.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
    when('/components', {
      templateUrl: 'partials/components.html',
      controller: 'ComponentsController'
    }).

    when('/login', {
      templateUrl: 'partials/login.html',
      public: true,
      login: true
    }).

    when('/signup', {
      templateUrl: 'partials/signup.html',
      public: true
    }).

    otherwise({
      redirectTo: '/home'
    });
  }
])
.run(function($rootScope, user){
  user.init({ appId: '5339e04524d20' });
});