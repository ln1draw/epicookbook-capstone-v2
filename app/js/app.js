'use strict';

var epicookbook = angular.module('epicookbook', [
  'ngRoute',
  'epicookbookControllers',
  'UserApp',
  'restangular'
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

    when('/profile', {
      templateUrl: 'partials/profile.html'
    }).

    when('/verify-email', {
      templateUrl: 'partials/verify-email.html',
      verify_email: true
    }).

    when('/reset-password', {
      templateUrl: 'partials/reset-password.html',
      public: true
    }).

    when('/set-password', {
      templateUrl: 'partials/set-password.html',
      set_password: true
    }).

    when('/recipe/new', {
      templateUrl: 'partials/new-recipe.html',
      controller: 'NewRecipeController'
    }).

    otherwise({
      redirectTo: '/profile'
    });
  }
])
.run(function($rootScope, user){
  user.init({ appId: '5339e04524d20' });
});